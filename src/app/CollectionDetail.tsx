import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { AppNavigation } from '../components/layout/AppNavigation';
import { RecipeThumbnail } from '../components/ui/RecipeThumbnail';

const COLLECTION_RECIPES = [
  {
    title: "Watermelon Feta Salad",
    category: "Salad",
    time: "15 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3898a_rWbr2l3QkMewEOQ0tsPWNVk4LCGUIDvHb3QI_Lr0hPhxIi9RBvavqpqGICT0UlZf1YSjsT8jfpno2ZtJnxKucmtpC-j6nQYPra7klBunCoWzBR4rqgaYj0Xzlo0mMj-RUJk9UEbdZ7GKobH0vCq7M6HVm7gHyAHto3mdmQJM2pkyfWR1rCh8Asq0jDaP5WecCS25Hk0Oznsp1vYnSLFQyg4__Y4wF95Gs_4__QCOhb57i13_WPqbUDBDOHEsN_Mbi2f8iVR",
    isFavorite: true
  },
  {
    title: "Grilled Lemon Chicken",
    category: "Main Course",
    time: "30 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LLpe8dPcvqoAwxUy7iqLnfKqCgDVMlKfpU1-zWuQCDZS7rAM6Njwrq1oC4ddz1D1xzZjBumbHdByFckJBobnmF_1D6Udf6o2LwNQtg17s3YiezVCiTsbK63rEzBeb8eCwm0xgR1czcFVe46bk1s7kSbz09O2iysQsR0xB7PF6nFY6ji98Ivjdvs9v0pR9tl0wWn0MFppZlxRCOrfCw6fyEJZVBKyQHdhtjzZ4EWV62j3FX2XW1DmoTQmlfsp4UMKehrNBZsKmsyf",
    isFavorite: false
  },
  {
    title: "Peach Iced Tea",
    category: "Beverage",
    time: "10 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH1OmCqsU6XHfTp4mOKQKaIh835045Kc51x29i9qcOJ49EWkYKFq0V31pUz-ghqlWWnsgXUgt3A_8ZqEtKJ0uiH2ovYlEAPORfE3voKSrQ2yrCthnGhvLcABZW-B0yptCUiUGkV9fwFqzR74nO0C5LTK4HMW7WOdDqVbv4p6Rsr15_ogDz3zdPSlKPqBJjuBOcwvWCB8f5JbvE60xJfByULmtPMrTir0CB3pyRIqo3UJiIXzeKlhppwCHCyawkXKGnPfsvLVyfjySG",
    isFavorite: false
  },
  {
    title: "Berry Smoothie Bowl",
    category: "Breakfast",
    time: "12 mins",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSw71LCG4r8d7OSE5aa1NzY15Hj-vBx0hriSCIlmC-H_g1jvN69zejJXYMDqgp12w0GYIIFQcsrbLfEjh4K_RInNHpmPT4zQ66NqH_hcEI8vlQ843_niqPzcLH6HFRDoNbn3RsFD0dm9Ixky0bXfDJhDzzjLpoZuIVaESw-p4wAvdfAdhF1aitMTjRUrQNOD7qkN6VCqldgzzxPZGPmdLNFq-cfSKT_dkpnh4EFWgmX7wg1lX9665Xlt9oMcxQITLR_OswDtr8WGE1",
    isFavorite: false
  }
];

type CollectionTab = 'All Recipes' | 'Recently Added';

export default function CollectionDetail() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CollectionTab>('All Recipes');

  const displayedRecipes = activeTab === 'Recently Added'
    ? COLLECTION_RECIPES.slice(-2)
    : COLLECTION_RECIPES;

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <PageHeader title="Summer Favorites" rightActionIcon="more_horiz" />

      <main className="flex-1 pb-40">
        {/* Banner Section */}
        <section className="px-8 pt-8 pb-12 space-y-10 bg-brand-green text-white rounded-b-[4rem] shadow-2xl relative z-10">
          <div className="relative group aspect-[16/9] overflow-hidden rounded-[3rem] border-4 border-white/20 shadow-2xl">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPSuMT_RlbYT2j4JUwcfSttElMHvPNaYQ8MLAw0wUjkUu6mQRSLgRkIA_dHmpb9e0xBPN3CrN0IWk2EPo7fd-2_xv7MNlRcAMhVAepO42L4UtEkb37v8b7uibYcUByoslpLydsY0pIFUYEkumnCGJ0zkX1xHKSi_MbElT6xSgFtEN2XDFKQx6oezkG7X8KekW-DuieP8nz7_2cuFRMAVDiKWIYkv_B80cgjp1WOMBrZ11HUnwB5oVO5b8PnvfaXD84r65PQt2C1xt"
              alt="Summer Favorites"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="bg-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/20">24 Recipes</span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Personal</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-black uppercase tracking-tighter italic leading-none">
              Summer <span className="text-primary tracking-tight">Favorites</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 leading-relaxed max-w-[320px]">
              A curated collection of my favorite refreshing meals and drinks for the sunny season.
            </p>
          </div>
        </section>

        {/* Filters/Tabs */}
        <section className="px-8 mt-12 mb-8">
          <div className="flex gap-8 border-b-4 border-slate-50 dark:border-slate-800">
            {(['All Recipes', 'Recently Added'] as CollectionTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-brand-green' : 'text-slate-300'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-[-4px] left-0 right-0 h-4 bg-brand-green rounded-full shadow-lg shadow-brand-green/20"></div>}
              </button>
            ))}
          </div>
        </section>

        {/* Recipe Grid */}
        <section className="px-8 grid grid-cols-2 gap-4">
          {displayedRecipes.map((recipe, i) => (
            <RecipeThumbnail key={i} {...recipe} />
          ))}
        </section>

        <div className="fixed bottom-32 right-8 z-30">
          <button onClick={() => navigate('/createrecipe')} className="size-20 bg-primary hover:bg-orange-600 text-white rounded-[1.5rem] shadow-[0_20px_50px_-10px_rgba(255,165,0,0.5)] flex items-center justify-center transition-all hover:-translate-y-2 active:scale-90">
            <span className="material-symbols-outlined text-4xl font-black">add</span>
          </button>
        </div>
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
