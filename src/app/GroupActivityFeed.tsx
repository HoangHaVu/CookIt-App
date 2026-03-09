export default function GroupActivityFeed() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden border-x border-primary/10">
        <header className="sticky top-0 z-50 bg-brand-green text-white curved-header pb-2">
          <div className="flex items-center p-4 justify-between">
            <div className="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined">skillet</span>
            </div>
            <h2 className="dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-3">
              Cooking Enthusiasts
            </h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center rounded-full size-10 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-white">
                  search
                </span>
              </button>
              <button className="flex items-center justify-center rounded-full size-10 hover:bg-primary/10 transition-colors relative">
                <span className="material-symbols-outlined text-white">
                  notifications
                </span>
                <span className="material-symbols-outlined text-white"></span>
              </button>
            </div>
          </div>
          <div className="px-4">
            <div className="flex border-b border-primary/10 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-2"
                href="#"
              >
                <p className="text-sm font-bold text-white">Feed</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-2 border-transparent text-white/60 pb-3 pt-2 hover:text-white transition-colors"
                href="#"
              >
                <p className="text-sm font-bold">Recipes</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-2 border-transparent text-white/60 pb-3 pt-2 hover:text-white transition-colors"
                href="#"
              >
                <p className="text-sm font-bold">Members</p>
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="flex items-start px-4 py-4 gap-3">
            <div className="bg-primary/20 rounded-full size-10 shrink-0 flex items-center justify-center overflow-hidden border border-primary/10">
              <img
                alt="User"
                data-alt="Close up portrait of a smiling amateur chef"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2rYzDk03cl2XFv17aeO0ttaVyqNcZdEHOz_pBOphQCgPrNJS3FV7pFq_ih-72ChyxfO1q4DTeoq6RRZrYNlSsRxdleK2LpVZmiopUB2ki1lHggGBiuYrRHJp7KqUwfh69V-ZwqFSGDOg4O0bMKxbVzeF5JlD-angOWTjUm0UnxnketBXnl9HsaKUPHe07aNwnd8l2hObGKdKEzsk7iM2TMngc5rfGZKGTUjUmn6Uga36jfmiZF5zHpyiRw4eTOy8oMi-ntr1TLAL"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col rounded-xl border border-primary/10 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden">
                <textarea
                  className="w-full min-h-[100px] resize-none border-none bg-transparent focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-base p-4"
                  placeholder="Share a recipe or food photo..."
                ></textarea>
                <div className="flex items-center justify-between p-3 border-t border-primary/5 bg-slate-50/50 dark:bg-slate-900/20">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        photo_camera
                      </span>
                    </button>
                    <button className="flex items-center justify-center p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        menu_book
                      </span>
                    </button>
                    <button className="flex items-center justify-center p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        location_on
                      </span>
                    </button>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-md active:scale-95">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-6">
            <div className="flex flex-col rounded-xl overflow-hidden border border-primary/10 bg-white dark:bg-slate-800 shadow-sm">
              <div className="flex items-center gap-3 p-4">
                <img
                  alt="Maria"
                  className="size-10 rounded-full border border-primary/10"
                  data-alt="Profile picture of a female home cook"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiM4XY9tWcMnzEPcKcY0T_QlaIxDyGBkGV-rm1UvZH8g1JudJraYwKSbeyf7QF95VwwpyiPpFQ6-j7JTrfSZ7zUeuPxqT1MCJqkdo5UZPlZXgcS7cBo-QcsMAmQz8-qniiEBggc961PQs1Gl1V9fR_HC-Zebm1eJLf0jxR7QuOA7z-20IzqA7Rds_eGbFBS0fCZnV_aefOFa42Rs33fP2zI4uZzZLP1hMZI3ATdgq4HLQay8ZXaHBRbWprWcgkbYEq5WxzAAJTSWYi"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    Maria Chen
                  </span>
                  <span className="text-xs text-slate-500">
                    2h ago •{' '}
                    <span className="text-brand-green font-bold">
                      Baking Expert
                    </span>
                  </span>
                </div>
                <button className="ml-auto text-slate-400">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-slate-700 dark:text-slate-300 text-base">
                  Just finished baking this! The crust is super flaky. Used my
                  grandmother's secret technique for the glaze. #baking #summer
                  #berrytart
                </p>
              </div>
              <div className="w-full aspect-[4/3] bg-slate-200 relative">
                <img
                  alt="Berry Tart"
                  className="w-full h-full object-cover"
                  data-alt="Glistening summer berry tart with fresh strawberries and blueberries"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKd4kQtnc8bibgiFQ1ZXjj3TyOl3CY8KVHLE1omeX0TfYcDl9GrfnciAQSUdhDrAmcGjeKs6AL6eJmIhj_yLisrjUwnE7l99f1mgdokBELBZBAb6OVClDIi6Rdn7sYRGHuJyJGd7FZmr9GLyLcRpZKzifq5pas_IqieGtyne1GNI8ncxnbL9JpOm0BBoj9XSTGgHZ3qSHrZI0Fg5RlxAuPdVESvmFLP2-DAJBRdkDxlx5rFIe_1Pe_MNcO0UQftaEOsXHmxb2xavjs"
                />
              </div>
              <div className="flex items-center justify-between p-4 border-b border-primary/5">
                <div className="flex -space-x-2">
                  <div className="size-6 rounded-full bg-primary border-2 border-white dark:border-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white">
                      favorite
                    </span>
                  </div>
                  <div className="size-6 rounded-full bg-blue-500 border-2 border-white dark:border-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white">
                      thumb_up
                    </span>
                  </div>
                  <span className="pl-4 text-xs font-medium text-slate-500">
                    42 likes
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  12 comments • 5 shares
                </span>
              </div>
              <div className="flex items-center justify-around p-1">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-primary/5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">
                    favorite
                  </span>{' '}
                  Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-primary/5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">
                    chat_bubble
                  </span>{' '}
                  Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-primary/5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>{' '}
                  Share
                </button>
              </div>
            </div>
            <div className="flex flex-col rounded-xl overflow-hidden border border-primary/10 bg-white dark:bg-slate-800 shadow-sm">
              <div className="flex items-center gap-3 p-4">
                <img
                  alt="David"
                  className="size-10 rounded-full border border-primary/10"
                  data-alt="Profile picture of a man in a chef hat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrcJdkggMY9psbNJnYduuKEuNRwoS5iLG-aZqMJqO1VqAVXpwfKt92PLwW2r_O6D0AetcRMFKzaQ1VjDK5LhJyP0zJjeadxJn7wJpmNP5qQiWpXwMpqmvZcwh-6xdxv5X4qViTzkQbLSl-mGy6UMReVD9Gbtt27QXGoKxNiLc5FrMYjBWwxBqq_bgNuUsYLcu91eEFDeauVNURvaUgIVAw1WBlZwvaCBVlVRRskNUzLuE_kXcEw3Exr7vdxjXGt-IGZwnOUEZ0hIl"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    David Wilson
                  </span>
                  <span className="text-brand-green font-bold">
                    5h ago •{' '}
                    <span className="text-brand-green font-bold">
                      Grill Master
                    </span>
                  </span>
                </div>
                <button className="ml-auto text-slate-400">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-4">
                  <div className="size-16 bg-white rounded-lg border border-primary/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      alt="Ribs"
                      className="object-cover h-full w-full"
                      data-alt="Slow cooked barbecue ribs on a wooden board"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuARrMyiBKop-gIkpcK191B3_g8aEpTBQ844e5CyWC_jK68Blqlis73Tg0pmKDnPC67e0wMUY1kbSp-c7W6M1yVTclHrPJ_wP9UOCzk7W5Ed46cep59Z19V7_R8Zs_SPVHGNBtvfkLbNztO6rBP22KYsU5jyyEjKSS09QvnSURkEHtRMh5V-2afhhqz7wt5S080YBGYa4FuYH-jtXegarnqgWsxlRVlT6c9KXuyrWWUJKwVN8wAZEKS3VprHv5-qNiLCxvuJKxZ3OV8A"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      Smoked BBQ Ribs
                    </h4>
                    <p className="text-xs text-slate-500">
                      15 mins prep • 6 hours cook
                    </p>
                    <div className="flex items-center mt-1 text-primary">
                      <span className="material-symbols-outlined text-xs fill-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-xs fill-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-xs fill-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-xs fill-1">
                        star
                      </span>
                      <span className="material-symbols-outlined text-xs">
                        star
                      </span>
                      <span className="text-[10px] ml-1 text-slate-500">
                        (24)
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto self-center bg-primary text-white text-xs px-3 py-1.5 rounded-lg font-bold">
                    View
                  </button>
                </div>
                <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm italic">
                  "The dry rub is the key here. Make sure to let it sit for at
                  least 2 hours!"
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl overflow-hidden border border-primary/10 bg-white dark:bg-slate-800 shadow-sm mb-20">
              <div className="flex items-center gap-3 p-4">
                <img
                  alt="Elena"
                  className="size-10 rounded-full border border-primary/10"
                  data-alt="Portrait of a woman with a clean culinary style"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo8HWPAL7OTrVG_-OcnOOle3MEoEVoQ9D488nN4-DxWgX2yEDLXuCVdk0rUP6DXyzWzaJSKuM2VtGhQErvtKeOEL6pHx-bpkHBEOU5Q4m2oHgkvc16YzImNlu7HQAyJO7eBTG-_QA_x1wvVjWqPBb89WfYBJCD6Mnegg7mHCeXh6zLxfFJBeN5n-B23Qrz0oHTzKMCooX4uiQSEAWRjgn9ZpUJqO-0L-g4kYbTASC5cesg8BwNNQNWcWZnvzvO23mi9shnTY-_7SqU"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    Elena Rodriguez
                  </span>
                  <span className="text-xs text-slate-500">8h ago</span>
                </div>
                <button className="ml-auto text-slate-400">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-slate-700 dark:text-slate-300 text-base">
                  Question for the group: What's your favorite substitute for
                  heavy cream in pasta sauces? Trying to go a bit lighter today.
                  🍝
                </p>
              </div>
              <div className="px-4 pb-4 flex flex-col gap-3">
                <div className="flex gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40">
                  <img
                    alt="Reply"
                    className="size-8 rounded-full"
                    data-alt="Small profile icon for a user comment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOyVo9rlI1KosIdJ3FKxvswqolHDUCHovDR0uLhdSDxNdyNcJ9DIo6mUQ83Y2H_0G_441_2llvBpld357nBKBpea3VAj4nUKr0vU4UNz8_BJ3cm-L1FIVs7AHD6s7g24bfIVNhxvSgjKamE-Smfq1mFRDDlQimykejL58k_nfvo8tvxRiPdF-0oWuUXCMO-udyaP10Fy6yOp06AFPr_iVYQusLeeH0ODbf6wRNPCRer2-hllkYgRT90dku_Pqj4lZDF81TN7aeZMkV"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs">Sam J.</span>
                      <span className="text-[10px] text-slate-500">4h ago</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Greek yogurt works wonders! Just don't let it boil or it
                      will curdle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40">
                  <img
                    alt="Reply"
                    className="size-8 rounded-full"
                    data-alt="Small profile icon for a user comment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkd33_s-Vv9PtWdRO7kT9vpdLq-bN8YEv9VTCbknf9-WeU59xqFSGkP8j8PIJ6zw1rZp4BoeOUcic95cBQ-Q7gB070v6HH_OMwidHgQgvJpcPsdRm3-10968OB61VWPHVj_xaBjbYRg3ZCwFQRt1Qejfcec-bj8Cjqu7oQEj53MmXwKpIl71cSUIeCckktLkI4-Xcu7bn85keAH7mhdAWsiYKkhmqOgkNjGjR5EsHMVn7uC5cSeZGL8WvkKzcaPNEkStiJzNht9ylO"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs">Chef Mike</span>
                      <span className="text-[10px] text-slate-500">2h ago</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Blended silken tofu. You get the protein and the
                      creaminess without the fat!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(26,60,52,0.3)]">
          <a
            className="flex flex-col items-center gap-1 text-brand-green"
            href="#"
          >
            <div className="nav-pill px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined fill-1">home</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Home
            </span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60"
            href="#"
          >
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">group</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Groups
            </span>
          </a>
          <div className="relative -top-6">
            <button className="size-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-3xl">add</span>
            </button>
          </div>
          <a
            className="flex flex-col items-center gap-1 text-white/60"
            href="#"
          >
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">bookmark</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Saved
            </span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-white/60"
            href="#"
          >
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Profile
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
