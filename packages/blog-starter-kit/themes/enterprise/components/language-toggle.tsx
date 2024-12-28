// components/LanguageToggle.tsx

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaFlagUsa, FaFlag } from 'react-icons/fa'; // Using react-icons for flags

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center gap-2 
        rounded-full 
        px-4 py-2 
        transition 
        bg-blue-800 text-white 
        border border-blue-800 
        shadow-lg 
        hover:bg-blue-800 
        focus:outline-none focus:ring-2 focus:ring-blue-600
      "
      aria-label="Toggle Language"
    >
      {language === 'en' ? <FaFlagUsa /> : <FaFlag />}
      <span className="font-semibold">
        {language === 'en' ? 'EN' : 'PT-BR'}
      </span>
      <span className="ml-1">▼</span>
    </button>
  );
};

export default LanguageToggle;
