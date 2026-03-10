import type { Step } from '../../lib/types';

interface InstructionsListProps {
    steps?: Step[];
}

function InstructionStep({ order, instruction, duration, tip }: Step) {
    const formatDuration = (mins?: number) => {
        if (!mins) return null;
        return mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : `${mins}:00`;
    };

    return (
        <div className="flex gap-4">
            <div className={`shrink-0 flex items-center justify-center size-8 rounded-full font-bold text-sm ${order === 1
                ? 'text-white bg-brand-green'
                : 'bg-brand-green/20 text-brand-green'
            }`}>
                {order}
            </div>
            <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {instruction}
                </p>
                {tip && (
                    <p className="mt-2 text-xs text-primary font-bold italic">{tip}</p>
                )}
                {duration && (
                    <div className="mt-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-brand-green text-xs font-bold">
                            <span className="material-symbols-outlined !text-sm">timer</span>
                            START TIMER ({formatDuration(duration)})
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const FALLBACK_STEPS: Step[] = [
    { order: 1, instruction: 'Bring a large pot of salted water to a boil. Cook pasta until al dente.', duration: 10 },
    { order: 2, instruction: 'Melt butter in a skillet. Add minced garlic and sauté for 1-2 minutes.' },
    { order: 3, instruction: 'Combine pasta with garlic butter, reserved water, parmesan, and parsley.' },
];

export function InstructionsList({ steps = FALLBACK_STEPS }: InstructionsListProps) {
    return (
        <section className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Instructions</h3>
            <div className="space-y-6">
                {steps.map((s) => (
                    <InstructionStep key={s.order} {...s} />
                ))}
            </div>
        </section>
    );
}
