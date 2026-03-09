import { Link } from 'react-router-dom';

export interface NavItem {
    id: string;
    icon: string;
    label: string;
    path: string;
    fill?: boolean;
}

interface ModuleNavProps {
    activeTab?: string;
    variant?: 'brand' | 'dark' | 'pantry';
    items?: NavItem[];
}

export function ModuleNav({
    activeTab = 'home',
    variant = 'brand',
    items
}: ModuleNavProps) {
    const bgClass =
        variant === 'brand' ? 'bg-brand-green' :
            variant === 'pantry' ? 'bg-nav-bg' :
                'bg-header-footer';

    const roundedClass = variant === 'brand' ? 'rounded-t-[2.5rem]' : '';
    const paddingClass = variant === 'brand' ? 'px-6 py-4' : 'px-6 pb-6 pt-3';

    const defaultItems: NavItem[] = [
        { id: 'home', icon: 'home', label: 'Home', path: '/' },
        { id: 'recipes', icon: 'menu_book', label: 'Recipes', path: '#' },
        { id: 'planner', icon: 'calendar_month', label: 'Planner', path: '#' },
        { id: 'shopping', icon: 'shopping_cart', label: 'Shopping', path: '/shoppinglist' },
        { id: 'profile', icon: 'person', label: 'Profile', path: '/profile' },
    ];

    const navItems = items || defaultItems;

    return (
        <nav className={`fixed bottom-0 left-0 right-0 ${bgClass} text-white/60 ${paddingClass} flex items-center justify-between z-50 ${roundedClass} shadow-[0_-10px_30px_rgba(0,0,0,0.1)]`}>
            {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`flex flex-1 flex-col items-center gap-1 ${isActive ? 'text-white' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`px-5 py-1 flex items-center justify-center ${isActive && variant === 'brand' ? 'bg-white/10 rounded-full' : ''}`}>
                            <span className={`material-symbols-outlined ${isActive || item.fill ? 'fill-1' : ''}`}>{item.icon}</span>
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
