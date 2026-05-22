import { useState, useEffect } from 'react';
import LogoCazeBlackText from '../../assets/Logotipo_da_CazéTV.png';
import LogoCazeWhiteText from '../../assets/CazéTVNomeBranco.png';

export function useMobileMenuLogo() {
  const [logo, setLogo] = useState(LogoCazeBlackText);

  useEffect(() => {
    function update() {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setLogo(isDark ? LogoCazeWhiteText : LogoCazeBlackText);
    }

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return logo;
}