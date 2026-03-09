export default function Profile() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl">
        <div className="flex items-center p-4 justify-between sticky top-0 bg-brand-green text-white z-10">
          <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-white">
              arrow_back
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center text-white">
            Profile
          </h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-xl size-10 bg-transparent text-slate-900 dark:text-slate-100 text-white">
              <span className="material-symbols-outlined text-white">
                settings
              </span>
            </button>
          </div>
        </div>

        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-accent-light"
                data-alt="Professional chef portrait in a kitchen setting"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwljrFK-DB5IaRJG4sxZ7IkF0AFiPiwAsNQq1hHB2bes45CURCF5PZf_E4LTlGG6I-xIWkyWRhi9SovC6_2vAde8ZDCj96WFKqfjMNn9QLoHfI7RlH-mav32pVZ-OIK7tExjeMc46yqwaRjtjh884Or8MRnKZcZW5tugdRwLSz551AiVj0sOd8R_2MKov7PWnp32TQqE5lpSc0L92ZvFWEVZmdDySuA-OEKbVzTh1u9DMnBMtmxlU9WbZ1r5cbzrthC6_oZNpat3FV')",
                }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight text-center">
                  Alex Thompson
                </p>
                <p className="text-primary font-medium text-sm mb-2">
                  @chef_alex_t
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed text-center px-4">
                  Passionate home cook &amp; food photographer. Exploring
                  flavors from around the world one spice at a time.
                </p>
              </div>
            </div>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 text-white text-sm font-bold transition-all hover:bg-primary/90 bg-primary">
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 px-4 py-3">
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl border border-accent-light bg-accent-light/10 p-3 items-center text-center">
            <p className="text-brand-green text-xl font-bold">1.2k</p>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
              Followers
            </p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl border border-accent-light bg-white p-3 items-center text-center shadow-sm">
            <p className="text-slate-900 text-xl font-bold">450</p>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
              Following
            </p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl border border-accent-light bg-white p-3 items-center text-center shadow-sm">
            <p className="text-slate-900 text-xl font-bold">84</p>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
              Recipes
            </p>
          </div>
        </div>

        <div className="mt-4 sticky top-16 bg-background-light dark:bg-background-dark z-10">
          <div className="flex border-b border-accent-light px-4 justify-between">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-[13px] pt-4 flex-1 border-brand-green text-brand-green"
              href="#"
            >
              <p className="text-sm font-bold">My Recipes</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 flex-1"
              href="#"
            >
              <p className="text-sm font-bold">Saved</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 flex-1"
              href="#"
            >
              <p className="text-sm font-bold">Achievements</p>
            </a>
          </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-4 pb-24">
          <div className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 text-white">
                <span className="material-symbols-outlined text-sm">
                  favorite
                </span>
              </div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                data-alt="Healthy vibrant salad bowl with grilled chicken"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoUS8Gay9fKcvvM92Fh_PvqTZcRS5oIKyFat97tfKWs9XVGNrGsrG_MqXqAYZI_KWWC9n2NZgAlD589S96bidtZkJJwor9_olczsWUc8wm1r2OUVcX7DQPwCxPsniZ9cUQnoRIRdartIcaAO3SGPKQE79ZqzTJibTp2VWQcwpnzUpg9zmgCP5GRmrGEjRGloVJEn26bWaJoNO6QT0krbFD0WmWu3BVu7GbX8XnbyyXuxsvDKKab0dWFXfqgKZFR7tP1CYyZJ_C9O26')",
                }}
              ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">
              Summer Quinoa Salad
            </p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
              <span className="material-symbols-outlined text-xs">
                schedule
              </span>
              <span>15 mins</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 text-white">
                <span className="material-symbols-outlined text-sm">
                  favorite
                </span>
              </div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                data-alt="Gourmet pasta dish with truffle and cream"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqL9nWyTkEe1oqVtFUpjd7A4sbxqrS49o1LvJktlb24t0TQs-FHX5hNopHqBofik1vBbkqaaA1LkJ_AgTFVAuEdIpUggMAIq8A6E08Fn3dnyBQuebmIMxFKs0D0VX3bWVBxNt2CLRXDXtN4Ce6deD4bp3_LX_gBgtyzZ_alZ-DNHfJOuyFvff8LaA5JUdrWCX6JJjBoEryo2EjTOt67yHOWMVQQQ3Noug97buNbROK6M_t3mNe8fNDlia9g5JERzRDBL3lPRMAJX4X')",
                }}
              ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">Truffle Carbonara</p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
              <span className="material-symbols-outlined text-xs">
                schedule
              </span>
              <span>30 mins</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 text-white">
                <span className="material-symbols-outlined text-sm">
                  favorite
                </span>
              </div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                data-alt="Crispy homemade sourdough pizza Margherita"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo0v-3tf4iXswMWEn_DolnusTjwfQcU7gxt3p412WObNuCysjIHZMasn35LSIoKPJPGBYZgzCOtsFL-a1ibzXIcwJjtKViRYcYPCyX5T7zY0MNO9OQnnPshQ-K1zfVRVUtckTD6j4QsAGpTXDCHxER0Y_EmVPzBTIDv5CNN0CjU5gkwvk3pALP2E2mwB7l3jRh0grorl9FfPtDax6QFhrJKnyh0Ne0g9gXmJw9FAdZo9UKAHoqW0eDIrpu1uYWf1vYbGOR1hSOnanG')",
                }}
              ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">Sourdough Pizza</p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
              <span className="material-symbols-outlined text-xs">
                schedule
              </span>
              <span>45 mins</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-full p-1.5 text-white">
                <span className="material-symbols-outlined text-sm">
                  favorite
                </span>
              </div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                data-alt="Fancy avocado toast with poached egg"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgQzbdx8kBGBbXKhcwb1CfSHkQFvjgSWyHOQ0i5XMQWRDHuu7eYH0Ult4xatiBnpr-SeRCwFl_iSoJdoj5Q0c1dpazdpHnAmuVwACCqbxi5UXrkHKAql2jtF720jOG0Sx06diLThyp0nbTv3QIa9PWLdmzT3uLfj-ViPvRdZsd5E_tBJ8c9ht49p5jj2kaP9GZURBJM64FXVkkfacwcjniib4lZd8cpi86u2zaiKVmNpkZWAAqpIjvM0j5Jyv0OXKWHevK7QRM6a9q')",
                }}
              ></div>
            </div>
            <p className="text-sm font-bold line-clamp-1">
              Avocado Toast Deluxe
            </p>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
              <span className="material-symbols-outlined text-xs">
                schedule
              </span>
              <span>10 mins</span>
            </div>
          </div>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-brand-green text-white/60 px-6 py-4 flex items-center justify-between z-50 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(26,60,52,0.3)]">
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">home</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Home
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Search
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                add_circle
              </span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Post
            </span>
          </a>
          <a className="flex flex-col items-center gap-1" href="#">
            <div className="px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
              Activity
            </span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-brand-green"
            href="#"
          >
            <div className="bg-[#c1daae] rounded-full px-5 py-1 flex items-center justify-center">
              <span className="material-symbols-outlined fill-1">person</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              Profile
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
