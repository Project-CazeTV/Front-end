import { useEffect, useState } from 'react';

export function useThemeLogos({logoLight,logoDark,fifaLight,fifaDark}) {

  const [currentLogo, setCurrentLogo] = useState(logoLight);
  const [currentLogoFifa, setCurrentLogoFifa] = useState(fifaDark);

  useEffect(() => {
    const updateLogos = () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.body.setAttribute('data-theme', savedTheme);
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setCurrentLogo(isDark ? logoDark : logoLight);
      setCurrentLogoFifa(isDark ? fifaLight : fifaDark);
    };

    updateLogos();

    const observer = new MutationObserver(updateLogos);

    observer.observe(document.body, {attributes: true,attributeFilter: ['data-theme']});
    return () => observer.disconnect();
  }, [logoLight, logoDark, fifaLight, fifaDark]);

  return {
    currentLogo,
    currentLogoFifa
  };
}