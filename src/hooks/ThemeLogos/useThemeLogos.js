import { useEffect, useState } from 'react';
import logoWhite from '../../assets/logo-apenas-nome-branco.png';
import logoBlack from '../../assets/logo-apenas-nome.png';
import youtubeIconWhite from '../../assets/logo-youtube-white.png';
import youtubeIconBlack from '../../assets/logo-youtube.png';
import instagramIconWhite from '../../assets/logo-instagram-white.png';
import instagramIconBlack from '../../assets/logo-instagram.png';

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

export function useThemeLogosFooter() {
  const [currentLogo, setCurrentLogo] = useState(logoBlack);
  const [currentYoutube, setCurrentYoutube] = useState(youtubeIconBlack);
  const [currentInstagram, setCurrentInstagram] = useState(instagramIconBlack);

  useEffect(() => {
      const updateAssets = () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        setCurrentLogo(isDark ? logoWhite : logoBlack);
        setCurrentYoutube(isDark ? youtubeIconWhite : youtubeIconBlack);
        setCurrentInstagram(isDark ? instagramIconWhite : instagramIconBlack);
      };
  
      updateAssets();
  
      const observer = new MutationObserver(updateAssets);
  
      observer.observe(document.body, { 
        attributes: true, 
        attributeFilter: ['data-theme'] 
      });
      
      return () => observer.disconnect();
    }, []);

    return {
      currentLogo,
      currentYoutube,
      currentInstagram
    };
}