"use client";

import { useState } from "react";
import Link from "next/link";

const visitTypes = [
  {
    id: "resident",
    label: "Visit with resident",
    description: "Spend time with Margaret",
    iconColor: "#3A6B7A",
  },
  {
    id: "nurse",
    label: "Meet with nurse",
    description: "Discuss health or care plan",
    iconColor: "#7A5B33",
  },
  {
    id: "billing",
    label: "Meet with billing staff",
    description: "Payments, insurance, paperwork",
    iconColor: "#4E6B44",
  },
  {
    id: "outing",
    label: "Day trip / outing",
    description: "A visitor, volunteer, or staff member takes Margaret out",
    iconColor: "#3A6B7A",
  },
];

const upcomingVisits = [
  {
    title: "Visit with Margaret",
    status: "Confirmed",
    statusColor: "text-[#3A6B7A]",
    when: "Saturday, Oct 3 · 2:30 PM",
  },
  {
    title: "Meet with billing office",
    status: "Pending",
    statusColor: "text-gray-400",
    when: "Requested for the week of Oct 6",
  },
];

export default function Visits() {
  const [selectedType, setSelectedType] = useState("resident");

  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4">
        <h1 className="text-xl font-semibold">Visits</h1>
        <div className="text-xs text-gray-400 mt-0.5">With Margaret Nguyen</div>
      </div>

      {/* Scroll area */}
      <div className="flex-1 px-5 py-4 space-y-6 pb-24">
        {/* Upcoming */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Upcoming
          </div>
          {upcomingVisits.map((v, i) => (
            <div key={i} className="bg-white border border-[#E7E0D4] rounded-2xl p-4">
              <div className="flex justify-between items-start mb-1.5">
                <div className="font-semibold text-[15px]">{v.title}</div>
                <span className={`text-xs font-semibold ${v.statusColor}`}>{v.status}</span>
              </div>
              <div className="text-sm text-gray-400">{v.when}</div>
            </div>
          ))}
        </div>

        {/* Schedule a new visit */}
        <div className="space-y-3.5">
          <h2 className="text-lg font-semibold">Schedule a Visit</h2>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">What's this visit for?</label>
            {visitTypes.map((t) => {
              const isSelected = selectedType === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t.id)}
                  className={`w-full flex items-center gap-3 rounded-xl p-3.5 text-left transition-colors ${
                    isSelected
                      ? "border-[1.5px] border-[#3A6B7A] bg-[#EAF0F1]"
                      : "border border-[#E7E0D4] bg-white"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "bg-white" : "bg-[#F1EADD]"
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: t.iconColor }}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.label}</div>
                    <div className="text-xs text-gray-400">{t.description}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <Link
            href={`/visits/schedule?type=${selectedType}`}
            className="block text-center bg-[#3A6B7A] text-white font-semibold text-sm rounded-lg py-3.5"
          >
            Continue
          </Link>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="bg-white border-t border-[#E7E0D4] px-3 py-2 flex items-center fixed bottom-0 w-full max-w-md">
        <Link href="/" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Updates
        </Link>
        <Link href="/messages" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Messages
        </Link>
        <Link href="/visits" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-[#3A6B7A]">
          Visits
        </Link>
        <button className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Profile
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
  Profile
</Link>
        </button>
      </div>
    </main>
  );
}