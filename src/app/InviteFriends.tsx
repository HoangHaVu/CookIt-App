import { PageHeader } from '../components/layout/PageHeader';
import { InviteCard } from '../components/ui/InviteCard';
import { AppNavigation } from '../components/layout/AppNavigation';

const CONTACTS = [
  { name: 'Jane Doe', subtitle: '+1 (555) 000-1234', initials: 'JD' },
  { name: 'Alex Smith', subtitle: 'alex.smith@email.com', initials: 'AS' },
  { name: 'Maria Rodriguez', subtitle: '+1 (555) 000-5678', initials: 'MR' },
  { name: 'Brian Kim', subtitle: 'brian.k@webmail.com', initials: 'BK' }
];

export default function InviteFriends() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <header className="bg-brand-green text-white pb-20 px-6 pt-12 rounded-b-[3rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img
            alt="Decoration"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE58_SPGsqBJvgWovkPIEt5GYlBTAACAgxva0xt2bpmo4fPiQRnb5wxfsKlRlqJY-Q0ldvmyyvFQdcbxR8-wUHBC1kpun6kTRK6j8bUZrIuMNTFEjWQ3URDwuYm9pvNiWtc2NtojlXsQlkPX1insi60-3pld8MQkP-Xhgk_KWUiajG9ZkO0Yefc8miIVUuzE3Oj-X-Jciue9pO-9vnFmqTEf6TwILGDDUtbH0ridTGCGAr2uNmrzF2gehHKHCAeui0uKCOX6endaZL"
            className="w-full h-full object-cover scale-150 rotate-12"
          />
        </div>
        <PageHeader title="Invite Friends" transparent={true} rightActionIcon="share" />
        <div className="mt-10 text-center px-4 relative">
          <h2 className="text-4xl font-black leading-tight mb-4 tracking-tighter uppercase italic">
            Spread the <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8">Joy</span>
          </h2>
          <p className="text-white/70 font-black uppercase tracking-widest text-[10px]">
            Cooking is always better with friends.
          </p>
        </div>
      </header>

      <main className="flex-1 px-6 py-12 space-y-12 pb-40 -mt-10 relative z-20">
        {/* Referral Section */}
        <section className="bg-primary/5 dark:bg-primary/10 border-4 border-dashed border-primary/20 rounded-[3rem] p-8 text-center shadow-xl shadow-primary/5 group hover:bg-primary/10 transition-all">
          <div className="size-16 rounded-3xl bg-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30 rotate-3 group-hover:rotate-0 transition-transform">
            <span className="material-symbols-outlined text-3xl font-black">card_giftcard</span>
          </div>
          <p className="text-primary font-black text-xs uppercase tracking-[0.25em] mb-4">
            Your Personal Code
          </p>
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-[2rem] p-4 border-2 border-primary/10 shadow-inner group-hover:border-primary/30 transition-all">
            <span className="text-xl font-mono font-black text-slate-800 dark:text-slate-100 tracking-[0.3em] ml-4">
              FRIEND2024
            </span>
            <button className="bg-primary hover:bg-orange-600 text-white size-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined font-black">content_copy</span>
            </button>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest mt-6 opacity-80 leading-relaxed">
            Share this code to give friends <br /> <span className="text-primary">20% off</span> their first order!
          </p>
        </section>

        {/* Contacts Section */}
        <section className="space-y-6">
          <div className="flex items-end justify-between px-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
              From your contacts
            </h3>
            <span className="text-primary text-[10px] font-black uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
              View all
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {CONTACTS.map((contact, i) => (
              <InviteCard key={i} {...contact} />
            ))}
          </div>
        </section>
      </main>

      <AppNavigation activeTab="profile" />
    </div>
  );
}
