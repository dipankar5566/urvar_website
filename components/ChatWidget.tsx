"use client";

import { useRef, useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

type Status = "idle" | "loading" | "error";

export default function ChatWidget() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  async function handleSend() {
    const text = inputValue.trim();
    if (!text || status === "loading") return;

    const userMessage: Message = {
      id: Math.random().toString(36).slice(2),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setStatus("loading");

    try {
      const history = [...messages, userMessage]
        .slice(-10)
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: history.slice(0, -1) }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setStatus("error");
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).slice(2),
          role: "assistant",
          content: data.reply,
        },
      ]);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {isOpen ? (
        /* Chat panel */
        <div className="fixed top-20 right-4 z-[60] flex flex-col w-[calc(100vw-2rem)] max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-urvar-dark px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">{t.chat.title}</p>
              <p className="text-green-300 text-xs">{t.chat.subtitle}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-green-300 hover:text-white transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="bg-gray-50 flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[300px] max-h-[380px]">
            {/* Static welcome message */}
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 text-gray-700 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm leading-relaxed">
                {t.chat.welcome}
              </div>
            </div>

            {/* Conversation messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`text-sm rounded-2xl px-4 py-3 max-w-[85%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-urvar-green text-white rounded-tr-sm shadow-sm"
                      : "bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {status === "loading" && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="flex justify-start">
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                  {t.chat.error}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-200 px-3 py-3 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              disabled={status === "loading"}
              className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-urvar-green transition-colors disabled:opacity-50 bg-gray-50"
            />
            <button
              onClick={handleSend}
              disabled={status === "loading" || !inputValue.trim()}
              aria-label={t.chat.send}
              className="bg-urvar-green hover:bg-green-700 disabled:opacity-40 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              {t.chat.send}
            </button>
          </div>
        </div>
      ) : (
        /* Floating chat button */
        <div className="fixed top-20 right-6 z-50">
          <span className="absolute inset-0 rounded-full bg-urvar-green animate-ping opacity-20" />
          <button
            onClick={() => setIsOpen(true)}
            aria-label={t.chat.button_title}
            title={t.chat.button_title}
            className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-urvar-dark hover:bg-urvar-green transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
