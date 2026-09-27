"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const contacts = {
  dana: {
    name: "Nurse Dana R.",
    role: "Primary nurse · Sunrise Wing",
    phone: "(555) 214-7300 ext. 214",
    hours: "7:00 AM – 3:00 PM, Mon–Fri",
  },
  marcus: {
    name: "Nurse Marcus O.",
    role: "Overnight nurse · Sunrise Wing",
    phone: "(555) 214-7300 ext. 215",
    hours: "11:00 PM – 7:00 AM, daily",
  },
  jo: {
    name: "Jo T.",
    role: "Activities coordinator",
    phone: "(555) 214-7300 ext. 220",
    hours: "9:00 AM – 5:00 PM, Mon–Fri",
  },
  priya: {
    name: "Priya K.",
    role: "Dining & nutrition staff",
    phone: "(555) 214-7300 ext. 225",
    hours: "6:00 AM – 2:00 PM, daily",
  },
  billing: {
    name: "Billing Office",
    role: "Payments & insurance",
    phone: "(555) 214-7300 ext. 100",
    hours: "8:00 AM – 4:00 PM, Mon–Fri",
  },
  frontdesk: {
    name: "Front Desk",
    role: "General questions, visitor check-in",
    phone: "(555) 214-7300 ext. 0",
    hours: "7:00 AM – 8:00 PM, daily",
  },
};

function ContactDetailContent() {
  const searchParams = useSearchParams();
  const personId = searchParams.get("person") || "dana";
  const contact = contacts[personId] || contacts.dana;
  const initials = contact.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4">
        <Link href="/profile/care-team" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2C5563]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-6 space-y-5">
        <div className="flex flex-col items-center gap-2.5 pt-2 pb-1">
          <div className="w-[76px] h-[76px] rounded-full bg-[#EAF0F1] flex items-center justify-center text-[#3A6B7A] font-semibold text-2xl">
            {initials}
          </div>
          <div className="font-semibold text-[19px]">{contact.name}</div>
          <div className="text-[13px] text-gray-400">{contact.role}</div>
        </div>

        <div className="bg-white border border-[#E7E0D4] rounded-2xl divide-y divide-[#EFE9DD]">
          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path>
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Facility phone line</div>
              <div className="text-[15px] font-semibold mt-0.5">{contact.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Typical hours</div>
              <div className="text-[15px] font-semibold mt-0.5">{contact.hours}</div>
            </div>
          </div>
        </div>

        <div className="text-[13px] text-gray-400 leading-relaxed text-center px-2">
          For non-urgent questions, sending a message is usually faster than calling.
        </div>

        <Link
          href="/messages"
          className="block text-center bg-[#2C5563] text-white font-semibold text-sm rounded-lg py-3.5"
        >
          Send a Message
        </Link>
      </div>
    </main>
  );
}

export default function ContactDetail() {
  return (
    <Suspense fallback={null}>
      <ContactDetailContent />
    </Suspense>
  );
}