import Link from "next/link";

const resident = {
  name: "Margaret Nguyen",
  initials: "MN",
  room: "214",
  wing: "Sunrise Wing",
  mood: "Content",
  mealsToday: "3 of 3",
  lastVisit: "4 days ago",
};

const updates = [
  {
    tag: "Health check",
    tagColor: "bg-sky-50 text-sky-700",
    time: "2:15 PM",
    day: "Today",
    text: "Blood pressure and vitals within normal range. Margaret mentioned mild knee stiffness this morning; noted for the care team to monitor.",
    staff: "Nurse Dana R.",
  },
  {
    tag: "Activity",
    tagColor: "bg-green-50 text-green-700",
    time: "11:40 AM",
    day: "Today",
    text: "Joined the morning music circle and requested two songs herself. Stayed engaged for the full session and chatted with a neighbor afterward.",
    staff: "Activities Coordinator Jo T.",
  },
  {
    tag: "Meal",
    tagColor: "bg-amber-50 text-amber-700",
    time: "6:05 PM",
    day: "Yesterday",
    text: "Finished all of dinner, including a second helping of the vegetable soup. Good appetite today overall.",
    staff: "Dining Staff Priya K.",
  },
  {
    tag: "Health check",
    tagColor: "bg-sky-50 text-sky-700",
    time: "9:30 AM",
    day: "Yesterday",
    text: "Slept well overnight, no reported discomfort. Medication administered on schedule.",
    staff: "Nurse Dana R.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#EAF0F1] flex items-center justify-center text-[#3A6B7A] font-semibold text-lg">
          {resident.initials}
        </div>
        <div>
          <div className="font-semibold text-[17px]">{resident.name}</div>
          <div className="text-xs text-gray-400">
            Room {resident.room} · {resident.wing}
          </div>
        </div>
      </div>

      {/* Scroll area */}
      <div className="flex-1 px-5 py-4 space-y-4 pb-24">
        {/* Stats row */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white border border-[#E7E0D4] rounded-xl p-3 text-center">
            <div className="text-xs text-gray-400">Mood</div>
            <div className="text-sm font-semibold mt-1">{resident.mood}</div>
          </div>
          <div className="flex-1 bg-white border border-[#E7E0D4] rounded-xl p-3 text-center">
            <div className="text-xs text-gray-400">Meals</div>
            <div className="text-sm font-semibold mt-1">{resident.mealsToday}</div>
          </div>
          <div className="flex-1 bg-white border border-[#E7E0D4] rounded-xl p-3 text-center">
            <div className="text-xs text-gray-400">Last visit</div>
            <div className="text-sm font-semibold mt-1">{resident.lastVisit}</div>
          </div>
        </div>

        <h1 className="text-xl font-semibold mt-1">Care Updates</h1>

        {updates.map((u, i) => {
          const showDayLabel = i === 0 || updates[i - 1].day !== u.day;
          return (
            <div key={i}>
              {showDayLabel && (
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 mt-2">
                  {u.day}
                </div>
              )}
              <div className="bg-white border border-[#E7E0D4] rounded-2xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${u.tagColor}`}>
                    {u.tag}
                  </span>
                  <span className="text-xs text-gray-400">{u.time}</span>
                </div>
                <div className="text-sm leading-relaxed mb-2">{u.text}</div>
                <div className="text-xs text-gray-400">— {u.staff}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom tab bar */}
      <div className="bg-white border-t border-[#E7E0D4] px-3 py-2 flex items-center fixed bottom-0 w-full max-w-md">
        <Link href="/" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-[#3A6B7A]">
          Updates
        </Link>
        <Link href="/messages" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
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