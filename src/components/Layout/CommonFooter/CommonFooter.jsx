import { useState, useEffect } from 'react';
import styles from './CommonFooter.module.css';
import logoWhite from '../../../assets/logo-apenas-nome-branco.png';
import logoBlack from '../../../assets/logo-apenas-nome.png';
import youtubeIconWhite from '../../../assets/logo-youtube-white.png';
import youtubeIconBlack from '../../../assets/logo-youtube.png';
import instagramIconWhite from '../../../assets/logo-instagram-white.png';
import instagramIconBlack from '../../../assets/logo-instagram.png';

export default function CommonFooter() {
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

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <img src={currentLogo} alt="Cazé TV" className={styles.logo} />
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <h3 className={styles.title}>ATALHOS</h3>
              <ul>
                <li><a href="#">Todos os jogos</a></li>
                <li><a href="#">Todos os times</a></li>
                <li><a href="#">Todas as competições</a></li>
                <li><a href="#">Apostas brasil</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.title}>SOBRE NÓS</h3>
              <ul>
                <li><a href="#">História</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Central de Ajuda</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.title}>INFORMAÇÕES LEGAIS</h3>
              <ul>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Termos e Condições</a></li>
              </ul>
            </div>

            
          <div className={styles.socialColumn}>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="YouTube">
                <img src={currentYoutube} alt="YouTube" className={styles.socialImg} />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={currentInstagram} alt="Instagram" className={styles.socialImg} />
              </a>
            </div>

          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}