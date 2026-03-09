export default function InviteFriends() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        <div className="flex items-center bg-brand-green p-4 pb-6 pt-8 justify-between text-white rounded-b-xl shadow-lg">
          <div className="flex size-12 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-2xl">
              arrow_back
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight flex-1 text-center">
            Invite Friends
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-white">
                share
              </span>
            </button>
          </div>
        </div>

        <div className="px-4 -mt-4">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] shadow-md relative"
            data-alt="Group of friends laughing together in a sunny park"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(14, 117, 71, 0.8) 0%, rgba(14, 117, 71, 0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE58_SPGsqBJvgWovkPIEt5GYlBTAACAgxva0xt2bpmo4fPiQRnb5wxfsKlRlqJY-Q0ldvmyyvFQdcbxR8-wUHBC1kpun6kTRK6j8bUZrIuMNTFEjWQ3URDwuYm9pvNiWtc2NtojlXsQlkPX1insi60-3pld8MQkP-Xhgk_KWUiajG9ZkO0Yefc8miIVUuzE3Oj-X-Jciue9pO-9vnFmqTEf6TwILGDDUtbH0ridTGCGAr2uNmrzF2gehHKHCAeui0uKCOX6endaZL')",
            }}
          >
            <div className="p-6">
              <p className="text-white text-2xl font-bold leading-tight">
                Spread the Joy
              </p>
              <p className="text-white/90 text-sm mt-1">
                Everything is better with friends.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-6">
          <div className="bg-sage-green/30 border-2 border-dashed border-brand-green/30 rounded-xl p-5 text-center">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-wider mb-2">
              Your Referral Code
            </p>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-3 border border-sage-green shadow-sm">
              <span className="text-xl font-mono font-bold text-brand-green tracking-widest ml-2">
                FRIEND2024
              </span>
              <button className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-green/90 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  content_copy
                </span>
                Copy
              </button>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-3">
              Share this code to give your friends 20% off their first order!
            </p>
          </div>
        </div>

        <div className="px-4 pt-8 pb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">From your contacts</h3>
          <span className="text-primary text-sm font-semibold cursor-pointer">
            View all
          </span>
        </div>

        <div className="flex flex-col px-4 gap-4 mb-24">
          <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                JD
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Jane Doe
                </p>
                <p className="text-xs text-slate-500">+1 (555) 000-1234</p>
              </div>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Invite
            </button>
          </div>

          <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-lg">
                AS
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Alex Smith
                </p>
                <p className="text-xs text-slate-500">alex.smith@email.com</p>
              </div>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Invite
            </button>
          </div>

          <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-sage-green flex items-center justify-center text-brand-green font-bold text-lg">
                MR
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Maria Rodriguez
                </p>
                <p className="text-xs text-slate-500">+1 (555) 000-5678</p>
              </div>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Invite
            </button>
          </div>

          <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-lg">
                BK
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Brian Kim
                </p>
                <p className="text-xs text-slate-500">brian.k@webmail.com</p>
              </div>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Invite
            </button>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 flex border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pb-6 pt-2 z-50">
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-brand-green transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <p className="text-[10px] font-medium leading-normal tracking-wide">
              Home
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-brand-green transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              featured_seasonal_and_gifts
            </span>
            <p className="text-[10px] font-medium leading-normal tracking-wide">
              Rewards
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-brand-green"
            href="#"
          >
            <div className="bg-brand-green/10 p-1.5 rounded-xl flex items-center justify-center">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person_add
              </span>
            </div>
            <p className="text-[10px] font-bold leading-normal tracking-wide">
              Invite
            </p>
          </a>
          <a
            className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-brand-green transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-medium leading-normal tracking-wide">
              Profile
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
