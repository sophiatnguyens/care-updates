"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const typeLabels = {
  resident: "Visit with resident",
  nurse: "Meet with nurse",
  billing: "Meet with billing staff",
  outing: "Day trip / outing",
};

function ScheduleVisitContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "resident";
  const label = typeLabels[type] || typeLabels.resident;

  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4">
        <Link href="/visits" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A6B7A]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back
        </Link>
        <h1 className="text-xl font-semibold mt-2.5">Schedule a Visit</h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-5 py-5 space-y-5">
        <div className="bg-[#EAF0F1] rounded-xl p-3.5">
          <div className="text-xs font-semibold text-[#2C5563] uppercase tracking-wide">
            Visit type
          </div>
          <div className="text-[15px] font-semibold mt-1">{label}</div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="visit-date" className="text-sm font-semibold text-gray-600">
            Date
          </label>
          <input
            id="visit-date"
            type="date"
            className="w-full border border-[#DCD3C3] rounded-lg px-3.5 py-3 text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="visit-time" className="text-sm font-semibold text-gray-600">
            Time
          </label>
          <input
            id="visit-time"
            type="time"
            className="w-full border border-[#DCD3C3] rounded-lg px-3.5 py-3 text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="visit-note" className="text-sm font-semibold text-gray-600">
            Note to staff (optional)
          </label>
          <input
            id="visit-note"
            type="text"
            placeholder="e.g. bringing her grandkids along"
            className="w-full border border-[#DCD3C3] rounded-lg px-3.5 py-3 text-sm placeholder-gray-400"
          />
        </div>

        <button className="w-full bg-[#3A6B7A] text-white font-semibold text-sm rounded-lg py-3.5 mt-2">
          Request Visit
        </button>
      </div>
    </main>
  );
}

export default function ScheduleVisit() {
  return (
    <Suspense fallback={null}>
      <ScheduleVisitContent />
    </Suspense>
  );
}