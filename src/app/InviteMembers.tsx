import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { InviteCard } from '../components/ui/InviteCard';
import { AppNavigation } from '../components/layout/AppNavigation';

const SUGGESTED_CONTACTS = [
  {
    name: 'Alice Chen',
    subtitle: '12 mutual foodie friends',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFLt2q7yuGK5-5G5iYMdHueM7WFFfth7EzirPvQauvYmogNLcvA_MBLEFh71DkvrbCno8BZgCVvWp_4zfgxPJ2ZZavRDwNMXrmGDFtuPgiTxi_tZdwx4FXU8kaTcNffVSeRRhMbcNPr3iR6gIniJX1uDhVbkKX4I1Hbv5pPRBHlKIriiqmEk5WHh01lhX77X6-Aai8mzyv5uKn8YEHN_lsU621mUpOcuu7yoMa0fsjXlN-GzcbimLM3cme-fAjhEuciDOAXAgvYNCI',
  },
  {
    name: 'Mark Thompson',
    subtitle: '8 mutual foodie friends',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmZppiG9Yv-maJd1Uk9FF20hTs3xBRYvos7EojmTUHbSO-e-WO1UR8rmAKUeWjHjhnEYWp3Czw3tRzqFmbJdwEq5F-rBJfQY4rOpp1GO9Mv94eQx47-vpc4L4WDewTUnbfhwkyzyb4h8YJhDuXg7bnbSCAgCDEVOfPCH7raG-kopPX_SOzXLA75UXFemZLZwmRdPzXH5J8r4FhN68ljcRYxfKL3LAER2YvdSLdHt2dJNtWVAxXO0h7hKCyILuU5EFTicgR-xjfQHwo',
  },
  {
    name: 'Sarah Miller',
    subtitle: '5 mutual foodie friends',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc_fSOx6tohxn6eZP9zv1CWwGqwuac0jeo_Fu7KYsY923G4XYYNa53hNaO-NinZFqLl9oyjp-fa4fjUa8O4jNJYcWIiBlB4Qkb9_O1QN0tr79iJZolxP_k1e8YW1ajXiPsPohdcZNbeLLVVqezN5fhdMvoIifcdS1QnfdopcRPOMdquU-kDZkKZUQfP7durAhkak40FaYthi5Zju09unbg5R5rFhRFyObEy6tB26nL5J-buuJpLrrcG1E-b8SVPn6oUeLXRztIStvA',
  }
];

export default function InviteMembers() {
  const navigate = useNavigate();
  const [invitedNames, setInvitedNames] = useState<Set<string>>(new Set(['Mark Thompson']));

  const invite = (name: string) => {
    setInvitedNames((prev) => new Set([...prev, name]));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="bg-brand-green text-white pb-12 px-6 pt-12 rounded-b-[3rem] shadow-2xl relative z-10">
        <PageHeader title="Gather the Circle" transparent={true} rightActionIcon="share" />
        <div className="mt-8 text-center px-4">
          <h2 className="text-3xl font-black leading-tight mb-2 tracking-tighter uppercase">
            Expand Your <span className="text-primary italic">Kitchen</span>
          </h2>
          <p className="text-white/70 font-bold uppercase tracking-widest text-[9px]">
            Invite fellow chefs and foodie enthusiasts.
          </p>
        </div>
      </header>

      <main className="flex-1 px-6 py-10 space-y-10 pb-48 -mt-8 relative z-20">
        <section className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined font-black text-sm">groups_3</span>
            Suggested contacts
          </h3>

          <div className="flex flex-col gap-4">
            {SUGGESTED_CONTACTS.map((contact) => (
              <InviteCard
                key={contact.name}
                {...contact}
                isInvited={invitedNames.has(contact.name)}
                onInvite={() => invite(contact.name)}
              />
            ))}
          </div>
        </section>

        <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-[2.5rem] border-2 border-primary/20 shadow-xl shadow-primary/5 transition-all group hover:bg-primary/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-2xl font-black">link</span>
            </div>
            <div>
              <h4 className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-1">
                Invite Link
              </h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                Direct share link
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                className="w-full h-14 px-6 rounded-2xl border-none bg-white dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 font-bold text-sm transition-all focus:ring-0 shadow-inner"
                readOnly={true}
                type="text"
                value="cookapp.com/join/f8x2k"
              />
            </div>
            <button className="bg-primary hover:bg-orange-600 text-white size-14 rounded-2xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-primary/25 border-4 border-white dark:border-slate-800 scale-105 active:rotate-12">
              <span className="material-symbols-outlined text-2xl font-black">content_copy</span>
            </button>
          </div>
          <p className="mt-6 text-slate-400 dark:text-slate-500 text-[10px] font-bold italic tracking-wide text-center uppercase tracking-tight opacity-70">
            Share this link to invite multiple members at once
          </p>
        </section>

        <div className="mt-12 mb-8">
          <button
            onClick={() => navigate('/groupactivityfeed')}
            className="w-full bg-primary hover:bg-orange-600 text-white font-black h-20 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(255,165,0,0.5)] hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all text-xl uppercase tracking-tighter"
          >
            Done Inviting {invitedNames.size > 0 && `(${invitedNames.size})`}
          </button>
        </div>
      </main>

      <AppNavigation activeTab="profile" />
    </div>
  );
}
