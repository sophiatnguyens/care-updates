import Link from "next/link";

const groups = [
  {
    label: "Nursing",
    people: [
      { id: "dana", name: "Nurse Dana R.", role: "Primary nurse" },
      { id: "marcus", name: "Nurse Marcus O.", role: "Overnight nurse" },
    ],
  },
  {
    label: "Activities & Daily Life",
    people: [
      { id: "jo", name: "Jo T.", role: "Activities coordinator" },
      { id: "priya", name: "Priya K.", role: "Dining & nutrition staff" },
    ],
  },
  {
    label: "Administration",
    people: [
      { id: "billing", name: "Billing Office", role: "Payments & insurance" },
      { id: "frontdesk", name: "Front Desk", role: "General questions, visitor check-in" },
    ],
  },
];

export default function CareTeam() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4">
        <Link href="/profile" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2C5563]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back
        </Link>
        <h1 className="text-xl font-semibold mt-2.5">Care Team</h1>
        <div className="text-xs text-gray-400 mt-0.5">Working with Margaret at Willow Creek Care</div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-5 space-y-5">
        {groups.map((group) => (
          <div key={group.label} className="space-y-2.5">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              {group.label}
            </div>
            <div className="bg-white border border-[#E7E0D4] rounded-2xl divide-y divide-[#EFE9DD]">
              {group.people.map((person) => (
                <Link
                  key={person.id}
                  href={`/profile/contact?person=${person.id}`}
                  className="flex items-center gap-3 p-4"
                >
                  <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0 text-[#2C5563] font-semibold text-xs">
                    {person.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{person.name}</div>
                    <div className="text-xs text-gray-400">{person.role}</div>
                  </div>
                  <svg className="ml-auto flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7BEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}