export function PhotoUploadSection() {
    return (
        <section className="p-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-3 text-brand-green">
                Food Photos
            </h3>
            <div className="grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl bg-accent-light text-brand-green flex flex-col items-center justify-center cursor-pointer hover:bg-accent-light/80 transition-all border-2 border-dashed border-brand-green/20">
                    <span className="material-symbols-outlined text-3xl">add_a_photo</span>
                    <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">Add Photo</span>
                </div>
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdaZJ2LFl_xHoFzZ4fRxKHsiYjcFu8b9JtMqm-qPYHmWv4XT4-Me7QGuKQOpuutp_b7WJVZQ7aFXFr2tHvtfR06u2kZHVH7eC1de8D7OLuBHAIqKVh2CZEJz513qvlDE6Kd0Rzgjav3P-VHUKf7OKDNxZm0UxvCigp9zj54uglKF72KspSGWP9vmsqq_MWh2NZYutU4iPbCw3MWAEBo0VV-PDPnE2zYKWeEcGvvgzBkcxmzMq0mZKsoCcGhyIjCI_JyUBhr0rkIlK0')",
                    }}
                ></div>
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm1vTylp1fz8ym5FuGrEbIi9rlHomGKTY82kuK2NzRciqyf5_TJ2CVPpahIsf88eXar2acXPAQ4P2PkGCpy96aMFXcjSqjFsjDhJI3vsPh4ccFa9uhp0bjGK7iwstQZxUl_cqDhkzg7mKNaObO_T8cWYb7b4hM3pC5wBMyu9mkrHn6xXwV2eFx7J3Vy-C38dB_kDuO5AgrU21NP70zFoSqGyhRZWtVI2lyPJ7HjdfKcpFtDJewv2FGL6yGHPvNGR-lWseldaeRuqtQ')",
                    }}
                ></div>
            </div>
        </section>
    );
}
