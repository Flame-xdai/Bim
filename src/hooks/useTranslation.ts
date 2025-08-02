import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';

export function useTranslation() {
  const { state } = useApp();
  
  const t = (key: keyof typeof translations.en): string => {
    return translations[state.language][key] || key;
  };

  return { t, language: state.language };
}