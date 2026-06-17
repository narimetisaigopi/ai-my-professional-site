"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi, I am Sai Gopi's AI assistant. Ask me about experience, skills, projects, or availability.",
};

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const canSubmit = useMemo(() => {
    return input.trim().length > 0 && !isLoading;
  }, [input, isLoading]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    const userMessage: Message = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMessage];
    const assistantPlaceholder: Message = { role: "assistant", content: "" };

    setMessages([...nextMessages, assistantPlaceholder]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to send message.");
      }

      if (!response.body) {
        throw new Error("Streaming response is unavailable.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        assistantText += decoder.decode(value, { stream: true });
        setMessages((previous) => {
          const updated = [...previous];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantText,
          };
          return updated;
        });
      }

      setTimeout(() => {
        viewportRef.current?.scrollTo({
          top: viewportRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 0);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to send message.";
      setError(message);
      setMessages((previous) => previous.filter((_, index) => index !== previous.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] rounded-2xl border overflow-hidden"
          style={{
            borderColor: "var(--color-border-light)",
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            boxShadow: "0 22px 60px rgba(2, 6, 23, 0.6)",
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: "var(--color-border-light)" }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                AI Assistant
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                Grounded on profile data only
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-sm px-2 py-1 rounded-md"
              style={{ color: "var(--color-text-secondary)", backgroundColor: "rgba(30, 41, 59, 0.8)" }}
            >
              Close
            </button>
          </div>

          <div ref={viewportRef} className="h-[360px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed"
                    style={
                      isUser
                        ? {
                            background:
                              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                            color: "#ffffff",
                          }
                        : {
                            backgroundColor: "rgba(30, 41, 59, 0.95)",
                            color: "var(--color-text-primary)",
                            border: "1px solid var(--color-border-light)",
                          }
                    }
                  >
                    {message.content || "..."}
                  </div>
                </div>
              );
            })}

          </div>

          <form
            onSubmit={onSubmit}
            className="border-t p-4"
            style={{ borderColor: "var(--color-border-light)" }}
          >
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask something about Sai Gopi's work..."
                className="flex-1 rounded-lg px-4 py-3 outline-none border text-sm"
                style={{
                  backgroundColor: "rgba(3, 7, 18, 0.7)",
                  borderColor: "var(--color-border-light)",
                  color: "var(--color-text-primary)",
                }}
              />
              <button
                type="submit"
                disabled={!canSubmit}
                className="px-5 py-3 rounded-lg font-semibold transition-all duration-200 text-sm"
                style={{
                  background: canSubmit
                    ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                    : "rgba(71, 85, 105, 0.5)",
                  color: "#ffffff",
                  cursor: canSubmit ? "pointer" : "not-allowed",
                }}
              >
                Send
              </button>
            </div>
            {isLoading && (
              <p className="mt-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                Streaming response...
              </p>
            )}
            {error && (
              <p className="mt-3 text-sm" style={{ color: "#fca5a5" }}>
                {error}
              </p>
            )}
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 px-5 py-3 rounded-full font-semibold shadow-2xl transition-transform duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          color: "#ffffff",
        }}
      >
        {isOpen ? "Hide Chat" : "Ask AI"}
      </button>
    </>
  );
};
