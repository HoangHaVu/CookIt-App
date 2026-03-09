import { CookbookHeader } from '../components/layout/CookbookHeader';
import { CollectionCard } from '../components/ui/CollectionCard';
import { AppNavigation } from '../components/layout/AppNavigation';

const COLLECTIONS = [
  {
    title: 'Personal Recipes',
    recipeCount: 24,
    lastUpdated: '2 days ago',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLo34rx15oUeip3OkePUF-dWbBfTdG9L9UjgFUuTiif2UZdH1SQ5zRNX0CX3gC3dGaBAyWtP-uJXJY9fuAJFCciGIQV2Uz5ZBGCgZ7YowXJukqe5g6lAhNheRNBdRA3INNCwh3HI_9gxzEYj07W4c7-Tqfk73KCMK57mQPqnjYzml-imfk4CqVlV0y4a9B4otpP2lowZvizUHUg4rk7EFmCmkOSAwYHnlbIdbfmyaPAmcD2IYtDC6N5baZGo5cnDkW8SsTqMVDW8J4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBok__JMSqnYGjvbP8b7IszCcNTWiyZvaRKXHkw5NLVgOHOfO0TPJSODpLei6aV3U2p70rw3t6n-wgJ0X-54vFZYMOx77wqa3FNLSn_QaO3s2ZwV9VlLpkEjwZUM07-m8L4vGoHLk6pvMkFaka4jQ4zpQjtVRoyArB50xre6lUeUJmFGq0jIUFvt26vB8plkfGQfM7mPF_3qBj_sPQCsUP7ZFSdfMGMjH-1POg7WpHe-au25SgbIaMm7vXac03GJp65T3oWqHifPcYI',
    ],
  },
  {
    title: 'Family Favorites',
    recipeCount: 12,
    lastUpdated: '1 week ago',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEOilDghzLj_oU1tIzT7oQqUTIHTrBjSWsmPRnzRhM-taKitgU-aNbcaMGzioSpqoZ9pbx-ogT0oLGu-Az2Q0L6kZCJFhrNNK2xcz1Ol8V5uMYtOPrsMhOrKwpYVg17FXOAFLb0TqPM1u3W6ZkSWq-EwCvk8w3wt-KbrWxKRxXRBfsB1nS2mnfAY2IRa0iEO3abxk8Ryt3JNI-8gmfE1QuKfuECEoPhD2IaFSO4ORFJPsIYbuAJy15ZzNKXsgbkxgQB8bpigBCut2r',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_jKJdYurHHNoNYEhQeTxn-c2V0qZsJav-ejdb5ygYhDTXS_BGFmTdDGUBXmmMrB-QCPbqnPbs8U6PwWIH5XNzrO7h7GaTrkgopBpRDauBI6X8dEutF5UwdmsL_w0JiZYcFLxgYv4Wa0gHgrWmh9HYhDMARxo53wPJ5gqjWSbP1W2ZqseeqTCUCMTCCmUd8WF8KnnaiUT24P03ifKSB2u9IrYMYzgdiWkpcNs9hLcAfd5_pAKDJnP_xyY1KRZJJPKTU7H3dCn2sL3A',
    ],
  },
  {
    title: 'Shared with Friends',
    recipeCount: 8,
    lastUpdated: 'yesterday',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2yvKXetCHs0FVP8SSCOLtV0wKEJWja9CwekGR5fffC06eEJ-18VFGzx-W_XsWRtN4fLx6XzgxvFlrHyoHgoIyRnR_Qtrn0sdWiQRh1qZqJn3GduxHhbTeelijw5qcA83nkQDa3_7_alPgIE_eJIqQyqjkXSn8rA1bKZVPHzBrGkpzVcqIwAlKmBGKCXWEIFVPNRdhRmta_oqJ7aLNOdyMWSWRKrPOqGS7Tze7F1cu71hBGu5m_VEBJJlR_x80EcGv_VNjZlZwc1aE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDk1GrA4ltqKAzI4QWMNtTAw2jidY6s64NXz6p8X_yvZQyyqp_xeOMNWo9i2c8zxU6MgiYCFZWcjCm9wTiMNWxsFUweT5kTvdJRa7teVY_HMXSVrxipy-aMCYpljLw3uiWEQXui6daNeUR4g_aA9tg6I1xvKuAz4TRPVKlckgQm9JNyvpwMphJSN3nDCK9CkUiZmmAjQYHpbltdaNl14m6wpH4FIWqNsKgjRFtL46uy5hPsPUHUgz9znHAbyvt0Ngeuco9HWySdtu8z',
    ],
  }
];


export default function PrivateCookbook() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-2xl mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <CookbookHeader title="My Cookbook" />

      <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Your Collections
          </h2>
          <span className="text-xs font-black text-brand-green bg-accent-sage/20 px-4 py-1.5 rounded-full uppercase tracking-widest border border-brand-green/20">
            3 Folders
          </span>
        </div>

        <div className="grid gap-8">
          {COLLECTIONS.map((c, i) => (
            <CollectionCard key={i} {...c} />
          ))}

          <button className="flex flex-col items-center justify-center border-4 border-dashed border-primary/20 rounded-[3rem] p-12 hover:bg-primary/5 transition-all group active:scale-95 shadow-inner">
            <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-5xl text-primary font-black">create_new_folder</span>
            </div>
            <span className="text-lg font-black text-primary uppercase tracking-[0.2em]">
              Create New Collection
            </span>
          </button>
        </div>
      </main>

      <AppNavigation activeTab="recipes" />
    </div>
  );
}
