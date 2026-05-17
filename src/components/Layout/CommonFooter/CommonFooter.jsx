import { useState, useEffect } from 'react';
import styles from './CommonFooter.module.css';
import { useThemeLogosFooter } from '../../../hooks/ThemeLogos/useThemeLogos.js';

export default function CommonFooter() {

  const { currentLogo, currentYoutube, currentInstagram } = useThemeLogosFooter();

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
                <li><a href="/historia/cazetv">História</a></li>
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
                <a href="https://www.youtube.com/@CazeTV" target="_blank" aria-label="YouTube">
                  <img src={currentYoutube} alt="YouTube" className={styles.socialImg} />
                </a>
                <a href="https://www.instagram.com/cazetv/" target="_blank" aria-label="Instagram">
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