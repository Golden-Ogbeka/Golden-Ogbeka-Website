import { useTranslation } from 'next-i18next';
import { BlogCategory } from '../../../data/BlogPosts';

interface CategoryFilterProps {
  activeCategory: BlogCategory | 'all';
  onCategoryChange: (category: BlogCategory | 'all') => void;
  availableCategories: (BlogCategory | 'all')[];
}

function CategoryFilter({ activeCategory, onCategoryChange, availableCategories }: CategoryFilterProps) {
  const { t } = useTranslation(['blog']);

  return (
    <div className='flex flex-wrap gap-3 mb-10' role='tablist' aria-label={t('blog:category.all')}>
      {availableCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          role='tab'
          aria-selected={activeCategory === cat}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent ${
            activeCategory === cat
              ? 'bg-accent text-white'
              : 'minimal-card text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent'
          }`}
        >
          {t(`blog:category.${cat}`)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
