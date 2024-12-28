// components/LanguageToggle.tsx

import React, { useState } from 'react';

type Language = 'en' | 'pt';

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
      aria-label="Toggle Language"
    >
      {/* You can replace these with flags or icons if desired */}
      {language === 'en' ? 'English' : 'Português'}
      <span className="ml-1">
        {/* Simple indicator, e.g., a down arrow */}
        ▼
      </span>
    </button>
  );
};

export default LanguageToggle;
