export function ProfileHero() {
    return (
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
    );
}
