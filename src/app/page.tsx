import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Gopi Narimeti - Principal Software Engineer",
  description:
    "Principal Software Engineer specializing in Node.js, React.js, Cloud, DevOps, and Generative AI.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-slate-900">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
