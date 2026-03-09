export function CheckoutBar({ itemsCount = 6 }: { itemsCount?: number }) {
    return (
        <div className="fixed bottom-20 left-0 right-0 p-4 z-20 pointer-events-none">
            <div className="max-w-xl mx-auto flex justify-center pointer-events-auto">
                <button className="bg-primary w-full max-w-sm py-4 rounded-xl text-white font-bold text-lg shadow-2xl flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">shopping_basket</span>
                    Checkout ({itemsCount} items)
                </button>
            </div>
        </div>
    );
}
