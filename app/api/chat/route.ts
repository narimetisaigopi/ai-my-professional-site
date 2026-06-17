import { NextResponse } from "next/server";
import { resumeData } from "@/data/resume";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "nex-agi/nex-n2-pro:free";

const normalizeModel = (value: string) => {
  const trimmed = value.trim();

  // Backward compatibility for earlier invalid slug used in this project.
  if (trimmed === "nexusflow/nex-n2-pro:free") {
    return "nex-agi/nex-n2-pro:free";
  }

  return trimmed;
};

const buildGroundedSystemPrompt = () => {
  const profileJson = JSON.stringify(resumeData);
  return [
    "You are Sai Gopi Narimeti's portfolio assistant.",
    "You must answer strictly and only using the PROFILE_DATA provided below.",
    "If a requested fact is not present in PROFILE_DATA, respond exactly with: 'That detail is not available in my profile data.'",
    "Do not invent, infer, or embellish any details.",
    "Keep answers concise and professional.",
    `PROFILE_DATA: ${profileJson}`,
  ].join("\n");
};

const toTextStream = (source: ReadableStream<Uint8Array>) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let buffer = "";

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = source.getReader();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const rawLine of lines) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) {
              continue;
            }

            const data = line.slice(5).trim();

            if (data === "[DONE]") {
              controller.close();
              return;
            }

            try {
              const parsed = JSON.parse(data);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (typeof delta === "string" && delta.length > 0) {
                controller.enqueue(encoder.encode(delta));
              }
            } catch {
              continue;
            }
          }
        }

        controller.close();
      } catch (streamError) {
        controller.error(streamError);
      } finally {
        reader.releaseLock();
      }
    },
  });
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing OPENROUTER_API_KEY." },
      { status: 500 },
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const rawMessages = body.messages ?? [];

  const messages = rawMessages.filter(
    (message) =>
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim().length > 0,
  );

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "At least one chat message is required." },
      { status: 400 },
    );
  }

  try {
    const model = normalizeModel(
      process.env.OPENROUTER_MODEL ?? DEFAULT_MODEL,
    );

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Sai Gopi Professional Site",
      },
      body: JSON.stringify({
        model,
        stream: true,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: buildGroundedSystemPrompt(),
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: "OpenRouter request failed.",
          detail: errorText,
        },
        { status: response.status },
      );
    }

    if (!response.body) {
      return NextResponse.json(
        { error: "OpenRouter returned no stream body." },
        { status: 502 },
      );
    }

    return new Response(toTextStream(response.body), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach OpenRouter right now." },
      { status: 502 },
    );
  }
}
