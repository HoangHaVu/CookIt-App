import { useState } from 'react';

interface RecipeTagsSectionProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export function RecipeTagsSection({ tags, onAddTag, onRemoveTag }: RecipeTagsSectionProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const submit = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onAddTag(trimmed);
    }
    setInputValue('');
    setInputVisible(false);
  };

  return (
    <section className="px-4 py-4">
      <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold mb-3 block text-brand-green">
        Tags
      </label>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full bg-brand-green text-white text-sm font-medium flex items-center gap-1 shadow-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemoveTag(tag)}
              className="material-symbols-outlined text-sm cursor-pointer hover:rotate-90 transition-transform"
            >
              close
            </button>
          </span>
        ))}

        {inputVisible ? (
          <input
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={submit}
            onKeyDown={(e) => { if (e.key === 'Enter') submit(); if (e.key === 'Escape') setInputVisible(false); }}
            placeholder="Tag name..."
            className="px-3 py-1.5 rounded-full border-2 border-brand-green text-sm font-medium outline-none w-28 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
        ) : (
          <button
            type="button"
            onClick={() => setInputVisible(true)}
            className="px-3 py-1.5 rounded-full bg-accent-light text-brand-green text-sm font-bold flex items-center gap-1 cursor-pointer hover:bg-accent-light/80 transition-colors border border-brand-green/10"
          >
            <span className="material-symbols-outlined text-sm">add</span> Add Tag
          </button>
        )}
      </div>
    </section>
  );
}
