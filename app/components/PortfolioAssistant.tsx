"use client";

import { FormEvent, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };
const initialMessage = "Hi, I’m Kayden’s portfolio assistant. Ask me about his projects, technical stack, experience, or career focus.";
const topics = ["Projects", "Tech Stack", "Experience", "Contact"];

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: initialMessage }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const reducedMotion = useReducedMotion();
  const endRef = useRef<HTMLDivElement>(null);

  const send = async (event?: FormEvent, topic?: string) => {
    event?.preventDefault();
    const content = (topic || input).trim().slice(0, 600);
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next); setInput(""); setLoading(true);
    requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
    try {
      const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", content: data.answer || "Please try again." }]);
    } catch { setMessages((current) => [...current, { role: "assistant", content: "I’m unable to respond right now. Please use the Contact Me form." }]); }
    finally { setLoading(false); requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" })); }
  };

  return <div className="fixed bottom-5 right-5 z-[60] max-w-[calc(100vw-2.5rem)] sm:bottom-6 sm:right-6">
    <AnimatePresence>
      {open && <motion.section initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.98, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98, y: reducedMotion ? 0 : 12 }} transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }} className="mb-3 flex h-[min(600px,calc(100vh-8rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-purple-400/30 bg-black/85 shadow-2xl shadow-purple-950/50 backdrop-blur-xl" aria-label="Kayden AI Assistant">
        <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-950/70 to-blue-950/70 px-4 py-3"><div><p className="font-semibold">Kayden AI Assistant</p><p className="text-xs text-gray-400">Portfolio questions only</p></div><button onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Close assistant">×</button></header>
        <div className="flex-1 space-y-3 overflow-y-auto p-3" aria-live="polite">{messages.map((message, index) => <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} key={`${message.role}-${index}`} className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === "user" ? "ml-auto bg-purple-600/80" : "border border-white/10 bg-white/10 text-gray-200"}`}>{message.content}</motion.div>)}{loading && <div className="flex gap-1 px-3 py-2 text-purple-300" aria-label="Loading"><span className="motion-safe:animate-bounce">•</span><span className="motion-safe:animate-bounce [animation-delay:120ms]">•</span><span className="motion-safe:animate-bounce [animation-delay:240ms]">•</span></div>}<div ref={endRef} /></div>
        <div className="border-t border-white/10 p-3"><div className="mb-2 flex flex-wrap gap-1.5">{topics.map((topic) => <button key={topic} onClick={() => send(undefined, topic)} disabled={loading} className="rounded-full border border-blue-400/30 px-2.5 py-1 text-xs text-blue-200 transition hover:border-purple-400 hover:bg-purple-500/20 disabled:opacity-50">{topic}</button>)}</div><form onSubmit={send} className="flex gap-2"><input value={input} maxLength={600} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Kayden..." disabled={loading} className="min-w-0 flex-1 rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-purple-400" aria-label="Ask Kayden a question"/><button type="submit" disabled={loading || !input.trim()} className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-3 text-sm font-medium transition hover:opacity-90 disabled:opacity-40">Send</button></form></div>
      </motion.section>}
    </AnimatePresence>
    <button onClick={() => setOpen((current) => !current)} className="ml-auto flex items-center gap-2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-700/90 to-blue-700/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/40 transition hover:-translate-y-0.5 hover:shadow-purple-900/50" aria-expanded={open}>{open ? "Minimise" : "Ask Kayden AI"}</button>
  </div>;
}
