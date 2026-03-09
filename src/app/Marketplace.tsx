export default function Marketplace() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-brand-dark text-white p-4 shadow-md">
          <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">Marketplace</h1>
            <div className="flex items-center gap-2">
              <button className="relative flex items-center justify-center p-2 rounded-full hover:bg-white/10">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto w-full pb-24">
          <div className="px-4 py-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-brand-dark/60">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="block w-full p-4 pl-12 text-sm text-slate-900 border-none rounded-xl bg-brand-accent/30 focus:ring-2 focus:ring-brand-dark placeholder:text-brand-dark/50"
                placeholder="Search premium tools &amp; organic ingredients"
                type="text"
              />
            </div>
          </div>

          <div className="flex gap-3 px-4 pb-6 overflow-x-auto no-scrollbar">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-dark text-white px-5 text-sm font-semibold">
              All
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-accent/40 text-brand-dark px-5 text-sm font-medium hover:bg-brand-accent/60">
              Kitchen Tools
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-accent/40 text-brand-dark px-5 text-sm font-medium hover:bg-brand-accent/60">
              Ingredients
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-accent/40 text-brand-dark px-5 text-sm font-medium hover:bg-brand-accent/60">
              Bakeware
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-brand-accent/40 text-brand-dark px-5 text-sm font-medium hover:bg-brand-accent/60">
              Pantry
            </button>
          </div>

          <section className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-brand-dark">
                Recommended for this recipe
              </h2>
              <a className="text-primary text-sm font-bold" href="#">
                View All
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-brand-accent/20 group">
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Premium stainless steel chef knife on wooden board"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIlFYj84KzvryXwuTTg-4t9to3B3xi1P5oyWQ1N0-m3Uf9-hVHAml82GCmBNqH5m2Zaj-t5cDyDhe_mOdMLQkCMsoLkDJRnEoWXAyvnzJw6mHYstJtNHzDU17WQTK5aneVGBaO0L_iWoASLUMc-fHzQCP45gBIbEYesoZHAK4PhF-8WbLopO6b0DaDQH_LCYBgwBVSQKGg1iTMu4EPX9iqtGPQKNRONLeQiO3P6hKAfLAx-IUmLqtG0rRnmxfj2T0jU5mbSkpE1Wqg"
                  />
                  <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-brand-dark hover:bg-white">
                    <span className="material-symbols-outlined text-sm">
                      favorite
                    </span>
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">
                    Kitchen Tools
                  </p>
                  <h3 className="font-bold text-sm truncate">
                    Professional Chef's Knife
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px] text-primary fill-1">
                      star
                    </span>
                    <span className="text-xs font-bold">4.9</span>
                    <span className="text-[10px] text-slate-400">(128)</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-brand-dark">$89.00</span>
                    <button className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-brand-accent/20 group">
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Small glass bottle of organic truffle oil"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSxQ5NV0RcrlR3agE_X4utd01tenWypxpsH9PKiRB74ETYxF8hfUIxqSFkB8bj3259KweUhQvw2CU-Em-qA6YRQ7y61b7YnI1cfFI8ybGLIGdMJAi-DmNuL3Pu9Q12QZeGtMy_xNpqSvZImIpCqdQT21bQSm3_wlOOaVtovum1EdNqz-DYuYfeR_9JsK7AtmkHZRAC4YVGD-QpqUQXmZO8Y3vD7z0J5_Z5wBa1ExvXH9aRel6VZL5WzHmnOgrVopledZXQmgpp1NoK"
                  />
                  <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-brand-dark hover:bg-white">
                    <span className="material-symbols-outlined text-sm">
                      favorite
                    </span>
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">
                    Ingredients
                  </p>
                  <h3 className="font-bold text-sm truncate">
                    White Truffle Oil (100ml)
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px] text-primary fill-1">
                      star
                    </span>
                    <span className="text-xs font-bold">4.7</span>
                    <span className="text-[10px] text-slate-400">(45)</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-brand-dark">$24.50</span>
                    <button className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-4">
            <h2 className="text-xl font-bold text-brand-dark mb-4">
              Trending Now
            </h2>
            <div className="space-y-4">
              <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-brand-accent/20">
                <div className="w-32 h-32 shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Collection of modern ceramic measuring cups"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhgsFrPutJRDZLDRY1jdaSPU_pYzwexZOE6APL7lLxWsU_zmbhesNt08LLaqYZXKcN59opzrLth-GEIDobv56jE-RqgSTitGzt9hp_KdQnI_u6wXhWi2e1s48W5U5H-DVCTVAOc8QpUz1uNPupJdKgCQwtjdOAHyqJCKS2g0kB3Ayw6NwuMMSZtjm1LMbGg1_7MwUxpUu6ia-8lzNQ_Vrs5j0zFUOOPhBHvjFDD8ec_J7Kh-fvd6EBYACmpEdGSfDv8Bl3hjICsTZ"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base">
                        Ceramic Measuring Set
                      </h3>
                      <span className="bg-brand-accent/30 text-brand-dark text-[10px] px-2 py-1 rounded font-bold uppercase">
                        New
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-primary fill-1">
                        star
                      </span>
                      <span className="text-xs font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-brand-dark">
                      $32.00
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                      Add{' '}
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-brand-accent/20">
                <div className="w-32 h-32 shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Artisanal small-batch smoked paprika tin"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxZDq2Cyu4jSk17WFNg1pnjplRfCIFhnL1npHJWQVKmFEUGjH7P9J646KWlZ-d2Gm3XeQLQ2JD-W2ME5oOblqXzBXaDJSkpMa9kX2iBEgrt3EhCNeCHDTsIkNt89_p5WV1y85lJWBxcBO1TQImM7S7EX_zr362S7TisY3lI8yDe8cNUGbbNfOM-9K3Nh9Rvng2bsFTxm_mBesEK8zNOw_O8sbuvSro_p02S0jEP1fcOcsOsiFykHC4RTOjqPxbmbmHnwcomatOSgu2"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base">
                        Smoked Spanish Paprika
                      </h3>
                      <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold uppercase">
                        Best Seller
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-primary fill-1">
                        star
                      </span>
                      <span className="text-xs font-bold">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-brand-dark">
                      $12.99
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                      Add{' '}
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-brand-dark text-white border-t border-white/10 px-4 pb-6 pt-3 flex justify-between items-center z-50">
          <a
            className="flex flex-col items-center gap-1 flex-1 opacity-60 hover:opacity-100 transition-opacity"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 opacity-60 hover:opacity-100 transition-opacity"
            href="#"
          >
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px] font-medium">Recipes</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 text-primary"
            href="#"
          >
            <span className="material-symbols-outlined fill-1">storefront</span>
            <span className="text-[10px] font-bold">Market</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 opacity-60 hover:opacity-100 transition-opacity"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-medium">Community</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 flex-1 opacity-60 hover:opacity-100 transition-opacity"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </a>
        </nav>
      </div>
    </>
  );
}
