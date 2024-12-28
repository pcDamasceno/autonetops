// components/LanguageToggle.tsx

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'English' : 'Português'}
      <span className="ml-1">▼</span>
    </button>
  );
};

export default LanguageToggle;
