import { ActivityPost } from '../components/ui/ActivityPost';
import { AppNavigation } from '../components/layout/AppNavigation';

const POSTS = [
  {
    author: 'Maria Chen',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiM4XY9tWcMnzEPcKcY0T_QlaIxDyGBkGV-rm1UvZH8g1JudJraYwKSbeyf7QF95VwwpyiPpFQ6-j7JTrfSZ7zUeuPxqT1MCJqkdo5UZPlZXgcS7cBo-QcsMAmQz8-qniiEBggc961PQs1Gl1V9fR_HC-Zebm1eJLf0jxR7QuOA7z-20IzqA7Rds_eGbFBS0fCZnV_aefOFa42Rs33fP2zI4uZzZLP1hMZI3ATdgq4HLQay8ZXaHBRbWprWcgkbYEq5WxzAAJTSWYi',
    authorBadge: 'Baking Expert',
    timeAgo: '2h ago',
    content: "Just finished baking this! The crust is super flaky. Used my grandmother's secret technique for the glaze. #baking #summer #berrytart",
    postImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKd4kQtnc8bibgiFQ1ZXjj3TyOl3CY8KVHLE1omeX0TfYcDl9GrfnciAQSUdhDrAmcGjeKs6AL6eJmIhj_yLisrjUwnE7l99f1mgdokBELBZBAb6OVClDIi6Rdn7sYRGHuJyJGd7FZmr9GLyLcRpZKzifq5pas_IqieGtyne1GNI8ncxnbL9JpOm0BBoj9XSTGgHZ3qSHrZI0Fg5RlxAuPdVESvmFLP2-DAJBRdkDxlx5rFIe_1Pe_MNcO0UQftaEOsXHmxb2xavjs',
    likes: 42,
    comments: 12,
    shares: 5,
  },
  {
    author: 'David Wilson',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrcJdkggMY9psbNJnYduuKEuNRwoS5iLG-aZqMJqO1VqAVXpwfKt92PLwW2r_O6D0AetcRMFKzaQ1VjDK5LhJyP0zJjeadxJn7wJpmNP5qQiWpXwMpqmvZcwh-6xdxv5X4qViTzkQbLSl-mGy6UMReVD9Gbtt27QXGoKxNiLc5FrMYjBWwxBqq_bgNuUsYLcu91eEFDeauVNURvaUgIVAw1WBlZwvaCBVlVRRskNUzLuE_kXcEw3Exr7vdxjXGt-IGZwnOUEZ0hIl',
    authorBadge: 'Grill Master',
    timeAgo: '5h ago',
    content: '"The dry rub is the key here. Make sure to let it sit for at least 2 hours!"',
    likes: 89,
    comments: 24,
    shares: 8,
    recipeCard: {
      title: 'Smoked BBQ Ribs',
      prepTime: '15 mins prep',
      cookTime: '6 hours cook',
      rating: 4.5,
      reviews: 24,
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARrMyiBKop-gIkpcK191B3_g8aEpTBQ844e5CyWC_jK68Blqlis73Tg0pmKDnPC67e0wMUY1kbSp-c7W6M1yVTclHrPJ_wP9UOCzk7W5Ed46cep59Z19V7_R8Zs_SPVHGNBtvfkLbNztO6rBP22KYsU5jyyEjKSS09QvnSURkEHtRMh5V-2afhhqz7wt5S080YBGYa4FuYH-jtXegarnqgWsxlRVlT6c9KXuyrWWUJKwVN8wAZEKS3VprHv5-qNiLCxvuJKxZ3OV8A',
    }
  }
];

export default function GroupActivityFeed() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="sticky top-0 z-50 bg-brand-green text-white pb-4 rounded-b-[2.5rem] shadow-2xl">
        <div className="flex items-center p-6 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center justify-center bg-white/10 rounded-2xl border border-white/20 shadow-xl">
            <span className="material-symbols-outlined font-black text-3xl">skillet</span>
          </div>
          <div className="flex-1 ml-4 px-1">
            <h2 className="text-xl font-black tracking-tight leading-tight uppercase">
              Cooking Enthusiasts
            </h2>
            <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mt-0.5">Circle Stream</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-2xl size-10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white font-black">search</span>
            </button>
            <button className="flex items-center justify-center rounded-2xl size-10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white font-black">notifications</span>
            </button>
          </div>
        </div>

        <nav className="px-6 mt-2 overflow-hidden">
          <div className="flex gap-8 border-b border-white/10">
            {['Feed', 'Recipes', 'Members'].map(tab => {
              const isActive = tab === 'Feed';
              return (
                <button
                  key={tab}
                  className={`flex flex-col items-center justify-center border-b-4 pb-4 pt-2 transition-all uppercase tracking-[0.2em] text-[10px] font-black ${isActive ? 'border-primary text-white' : 'border-transparent text-white/50 hover:text-white'
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="flex-1 px-6 pt-10 space-y-12 pb-48">
        {/* Post Input Section */}
        <section className="flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-[1.2rem] bg-brand-green/10 border-2 border-brand-green/20 overflow-hidden shadow-inner shrink-0 scale-95 origin-left">
              <img
                alt="User"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2rYzDk03cl2XFv17aeO0ttaVyqNcZdEHOz_pBOphQCgPrNJS3FV7pFq_ih-72ChyxfO1q4DTeoq6RRZrYNlSsRxdleK2LpVZmiopUB2ki1lHggGBiuYrRHJp7KqUwfh69V-ZwqFSGDOg4O0bMKxbVzeF5JlD-angOWTjUm0UnxnketBXnl9HsaKUPHe07aNwnd8l2hObGKdKEzsk7iM2TMngc5rfGZKGTUjUmn6Uga36jfmiZF5zHpyiRw4eTOy8oMi-ntr1TLAL"
              />
            </div>
            <textarea
              className="flex-1 min-h-[80px] mt-1 resize-none border-none bg-transparent focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-300 font-bold text-sm"
              placeholder="Share a recipe or food photo..."
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-1">
              {['photo_camera', 'menu_book', 'location_on'].map(icon => (
                <button key={icon} className="size-10 flex items-center justify-center text-slate-300 hover:text-brand-green hover:bg-brand-green/5 rounded-xl transition-all">
                  <span className="material-symbols-outlined text-xl font-black">{icon}</span>
                </button>
              ))}
            </div>
            <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/30 transition-all active:scale-95">
              Share Post
            </button>
          </div>
        </section>

        {/* Activity List */}
        <div className="space-y-10">
          {POSTS.map((post, i) => (
            <ActivityPost key={i} {...post} />
          ))}
        </div>
      </main>

      {/* Floating Add Button */}
      <button className="absolute bottom-24 right-6 size-20 bg-primary text-white rounded-[2rem] shadow-[0_15px_30px_-5px_rgba(255,165,0,0.5)] flex items-center justify-center hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all ring-8 ring-white dark:ring-slate-900 z-40">
        <span className="material-symbols-outlined text-4xl font-black">add</span>
      </button>

      <AppNavigation activeTab="home" />
    </div>
  );
}
