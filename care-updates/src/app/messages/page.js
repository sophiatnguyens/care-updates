"use client";

import { useState } from "react";
import Link from "next/link";

const initialMessages = [
  {
    from: "staff",
    day: "Yesterday",
    text: "Hi! Just wanted to let you know Margaret had a great afternoon at the music circle today. She's in good spirits.",
    sender: "Jo T.",
    time: "3:12 PM",
  },
  {
    from: "me",
    day: "Yesterday",
    text: "That's wonderful to hear, thank you! Did she mention anything about her knee?",
    sender: "You",
    time: "3:20 PM",
  },
  {
    from: "staff",
    day: "Yesterday",
    text: "A little stiffness this morning, nothing new. We're keeping an eye on it and will flag it to her doctor at the next visit.",
    sender: "Nurse Dana R.",
    time: "3:25 PM",
  },
  {
    from: "me",
    day: "Today",
    text: "Appreciate it. I'll be by this weekend to visit, is Saturday afternoon usually a good time?",
    sender: "You",
    time: "9:02 AM",
  },
  {
    from: "staff",
    day: "Today",
    text: "Saturday afternoons are great, she usually rests after lunch until about 2, so anytime after that works well.",
    sender: "Nurse Dana R.",
    time: "9:15 AM",
  },
];

function formatTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  function handleSend(e) {
    e.preventDefault();
    if (!draft.trim()) return;

    setMessages([
      ...messages,
      {
        from: "me",
        day: "Today",
        text: draft,
        sender: "You",
        time: formatTime(),
      },
    ]);
    setDraft("");
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#EAF0F1] flex items-center justify-center text-[#3A6B7A] font-semibold text-sm">
          SW
        </div>
        <div>
          <div className="font-semibold text-[16px]">Sunrise Wing Care Team</div>
          <div className="text-xs text-gray-400">About Margaret Nguyen</div>
        </div>
      </div>

      {/* Thread */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 pb-4">
        {messages.map((m, i) => {
          const showDayLabel = i === 0 || messages[i - 1].day !== m.day;
          const isMe = m.from === "me";
          return (
            <div key={i}>
              {showDayLabel && (
                <div className="text-center text-xs text-gray-400 my-2">{m.day}</div>
              )}
              <div className={`flex flex-col gap-1 max-w-[78%] ${isMe ? "ml-auto items-end" : "items-start"}`}>
                <div
                  className={
                    isMe
                      ? "bg-[#2C5563] text-white rounded-2xl rounded-br-md px-3.5 py-3 text-sm leading-relaxed"
                      : "bg-white border border-[#E7E0D4] rounded-2xl rounded-bl-md px-3.5 py-3 text-sm leading-relaxed"
                  }
                >
                  {m.text}
                </div>
                <div className="text-[11px] text-gray-400 px-1">
                  {m.sender} · {m.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Composer */}
      <form onSubmit={handleSend} className="bg-white border-t border-[#E7E0D4] px-3.5 py-3 flex gap-2.5 items-center">
        <label htmlFor="msg-input" className="sr-only">
          Message
        </label>
        <input
          id="msg-input"
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-[#DCD3C3] rounded-full px-4 py-2.5 text-sm placeholder-gray-400"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="w-10 h-10 rounded-full bg-[#3A6B7A] flex items-center justify-center flex-shrink-0"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>

      {/* Bottom tab bar */}
      <div className="bg-white border-t border-[#E7E0D4] px-3 py-2 flex items-center">
        <Link href="/" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Updates
        </Link>
        <Link href="/messages" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-[#3A6B7A]">
          Messages
        </Link>
        <button className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Visits
        </button>
        <button className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Profile
        </button>
      </div>
    </main>
  );
}