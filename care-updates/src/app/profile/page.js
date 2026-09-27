import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-[#E7E0D4] px-5 py-4">
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      {/* Scroll area */}
      <div className="flex-1 px-5 py-5 space-y-5 pb-24">
        {/* Resident summary */}
        <div className="bg-white border border-[#E7E0D4] rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#EAF0F1] flex items-center justify-center text-[#3A6B7A] font-semibold text-lg flex-shrink-0">
            MN
          </div>
          <div>
            <div className="font-semibold text-[17px]">Margaret Nguyen</div>
            <div className="text-[13px] text-gray-400 mt-0.5">Room 214 · Sunrise Wing</div>
            <div className="text-[13px] text-gray-400">Willow Creek Care</div>
          </div>
        </div>

        {/* Care team link */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Care Team</div>
          <div className="bg-white border border-[#E7E0D4] rounded-2xl">
            <Link href="/profile/care-team" className="flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">View Care Team</div>
                <div className="text-xs text-gray-400">Nurse, activities, billing &amp; more</div>
              </div>
              <svg className="ml-auto flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7BEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Account section */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Your Account</div>
          <div className="bg-white border border-[#E7E0D4] rounded-2xl divide-y divide-[#EFE9DD]">
            <button type="button" className="w-full flex items-center gap-3 p-4 text-left">
              <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div className="text-sm font-semibold">Notification settings</div>
              <svg className="ml-auto flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7BEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
            <button type="button" className="w-full flex items-center gap-3 p-4 text-left">
              <div className="w-9 h-9 rounded-full bg-[#EAF0F1] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="text-sm font-semibold">Family members with access</div>
              <svg className="ml-auto flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7BEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
            <button type="button" className="w-full flex items-center gap-3 p-4 text-left text-[#B3483C]">
              <div className="w-9 h-9 rounded-full bg-[#FBE9E4] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3483C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <div className="text-sm font-semibold">Log out</div>
            </button>
          </div>
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
        <Link href="/visits" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-gray-400">
          Visits
        </Link>
        <Link href="/profile" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold text-[#3A6B7A]">
          Profile
        </Link>
      </div>
    </main>
  );
}