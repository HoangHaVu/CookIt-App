import { useState } from 'react';

interface DayPickerProps {
  onDayChange?: (dayIndex: number) => void;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getWeekDays() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sun
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7)); // start on Monday

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      id: `day-${i}`,
      name: DAY_NAMES[d.getDay()],
      date: d.getDate(),
      isToday: d.toDateString() === today.toDateString(),
    };
  });
}

export function DayPicker({ onDayChange }: DayPickerProps) {
  const days = getWeekDays();
  const todayIndex = days.findIndex((d) => d.isToday);
  const [activeIndex, setActiveIndex] = useState(todayIndex >= 0 ? todayIndex : 0);

  const handleSelect = (i: number) => {
    setActiveIndex(i);
    onDayChange?.(i);
  };

  return (
    <div className="sticky top-[72px] z-10 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
      <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 py-3">
        {days.map((day, i) => (
          <button
            key={day.id}
            onClick={() => handleSelect(i)}
            className={`flex min-w-[50px] flex-col items-center justify-center gap-1 rounded-xl p-2 transition-all active:scale-95 ${
              activeIndex === i
                ? 'bg-primary text-white shadow-md scale-105'
                : day.isToday
                ? 'bg-brand-green/10 text-brand-green border-2 border-brand-green/20'
                : 'bg-accent-sage/30 dark:bg-accent-sage/10 text-slate-700 dark:text-slate-300'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider">{day.name}</span>
            <span className="text-sm font-black">{day.date}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
