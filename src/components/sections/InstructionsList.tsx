interface InstructionStepProps {
    step: number;
    text: string;
    hasTimer?: boolean;
}

function InstructionStep({ step, text, hasTimer = false }: InstructionStepProps) {
    return (
        <div className="flex gap-4">
            <div className={`shrink-0 flex items-center justify-center size-8 rounded-full font-bold text-sm ${step === 1
                    ? 'text-white bg-brand-green'
                    : 'bg-brand-green/20 text-brand-green'
                }`}>
                {step}
            </div>
            <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {text}
                </p>
                {hasTimer && (
                    <div className="mt-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-brand-green text-xs font-bold">
                            <span className="material-symbols-outlined !text-sm">
                                timer
                            </span>
                            START TIMER (10:00)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const STEPS = [
    { step: 1, text: 'Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions until al dente.', hasTimer: true },
    { step: 2, text: 'While the pasta cooks, melt the butter in a large skillet over medium heat. Add the minced garlic and sauté for 1-2 minutes until fragrant but not browned.' },
    { step: 3, text: 'Reserve 1/2 cup of pasta water, then drain the pasta. Add the pasta and reserved water to the garlic butter. Toss with parmesan and fresh parsley.' },
];

export function InstructionsList() {
    return (
        <section className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Instructions</h3>
            <div className="space-y-6">
                {STEPS.map((s, i) => (
                    <InstructionStep key={i} {...s} />
                ))}
            </div>
        </section>
    );
}
