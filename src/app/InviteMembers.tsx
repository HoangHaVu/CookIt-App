export default function InviteMembers() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center bg-header-dark p-4 pb-4 justify-between shadow-md">
          <div className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Invite Members
          </h2>
          <div className="flex size-10 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-xl bg-transparent text-white p-2">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </header>
        <main className="flex-1 flex flex-col gap-2 p-4 max-w-2xl mx-auto w-full">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pt-4 pb-2">
            Suggested contacts
          </h3>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-4 min-h-[72px] py-3 justify-between shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary/20"
                data-alt="Portrait of Alice Chen smiling for profile"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFLt2q7yuGK5-5G5iYMdHueM7WFFfth7EzirPvQauvYmogNLcvA_MBLEFh71DkvrbCno8BZgCVvWp_4zfgxPJ2ZZavRDwNMXrmGDFtuPgiTxi_tZdwx4FXU8kaTcNffVSeRRhMbcNPr3iR6gIniJX1uDhVbkKX4I1Hbv5pPRBHlKIriiqmEk5WHh01lhX77X6-Aai8mzyv5uKn8YEHN_lsU621mUpOcuu7yoMa0fsjXlN-GzcbimLM3cme-fAjhEuciDOAXAgvYNCI')",
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal line-clamp-1">
                  Alice Chen
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-1">
                  12 mutual foodie friends
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm font-bold transition-colors hover:bg-slate-300">
                <span className="truncate">Invite</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-4 min-h-[72px] py-3 justify-between shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary/20"
                data-alt="Portrait of Mark Thompson in casual attire"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmZppiG9Yv-maJd1Uk9FF20hTs3xBRYvos7EojmTUHbSO-e-WO1UR8rmAKUeWjHjhnEYWp3Czw3tRzqFmbJdwEq5F-rBJfQY4rOpp1GO9Mv94eQx47-vpc4L4WDewTUnbfhwkyzyb4h8YJhDuXg7bnbSCAgCDEVOfPCH7raG-kopPX_SOzXLA75UXFemZLZwmRdPzXH5J8r4FhN68ljcRYxfKL3LAER2YvdSLdHt2dJNtWVAxXO0h7hKCyILuU5EFTicgR-xjfQHwo')",
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal line-clamp-1">
                  Mark Thompson
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-1">
                  8 mutual foodie friends
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm font-bold transition-colors hover:bg-slate-300">
                <span className="truncate">Invite</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-4 min-h-[72px] py-3 justify-between shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary/20"
                data-alt="Portrait of Sarah Miller with a warm smile"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc_fSOx6tohxn6eZP9zv1CWwGqwuac0jeo_Fu7KYsY923G4XYYNa53hNaO-NinZFqLl9oyjp-fa4fjUa8O4jNJYcWIiBlB4Qkb9_O1QN0tr79iJZolxP_k1e8YW1ajXiPsPohdcZNbeLLVVqezN5fhdMvoIifcdS1QnfdopcRPOMdquU-kDZkKZUQfP7durAhkak40FaYthi5Zju09unbg5R5rFhRFyObEy6tB26nL5J-buuJpLrrcG1E-b8SVPn6oUeLXRztIStvA')",
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal line-clamp-1">
                  Sarah Miller
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-1">
                  5 mutual foodie friends
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm font-bold transition-colors hover:bg-slate-300">
                <span className="truncate">Invite</span>
              </button>
            </div>
          </div>

          <div className="mt-8 bg-sage-light dark:bg-sage-light/20 p-6 rounded-xl border border-sage-light/50">
            <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-3">
              Share Invite Link
            </h4>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  className="w-full h-12 px-4 rounded-lg border-none bg-white/80 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 font-medium focus:ring-2 focus:ring-primary/50"
                  readOnly={true}
                  type="text"
                  value="cookapp.com/join/f8x2k"
                />
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 rounded-lg flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-xs italic">
              Share this link with friends so they can join your kitchen
              directly.
            </p>
          </div>
        </main>

        <div className="sticky bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
          <button className="w-full py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.98]">
            Done Inviting
          </button>
        </div>
      </div>
    </>
  );
}
