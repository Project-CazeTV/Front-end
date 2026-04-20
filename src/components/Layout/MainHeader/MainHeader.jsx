import { useState, useEffect } from 'react';
import styles from './MainHeader.module.css';
import LogoCazeIcon from '../../../assets/caze.png';
import LogoCazeBlackText from '../../../assets/Logotipo_da_CazéTV.png'; 
import LogoCazeWhiteText from '../../../assets/CazéTVNomeBranco.png'; 
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../Common/ThemeToggle/ThemeToggle';

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [drawerLogo, setDrawerLogo] = useState(LogoCazeBlackText);
  const navigate = useNavigate();

  useEffect(() => {
    const updateDrawerLogo = () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setDrawerLogo(isDark ? LogoCazeWhiteText : LogoCazeBlackText);
    };

    updateDrawerLogo();
    const observer = new MutationObserver(updateDrawerLogo);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const menuData = [
    { title: 'COPA DO MUNDO FIFA 2026', items: ['TABELA', 'GRUPOS', 'CIDADES-SEDE'] },
    { title: 'CAMPEONATOS ESTADUAIS', items: ['CAMPEONATO PAULISTA SICREDI', 'CAMPEONATO CARIOCA SUPERBET', 'CAMPEONATO MINEIRO SUPERBET', 'CAMPEONATO MINEIRO SICOOB'] },
    { title: 'JOGOS OLÍMPICOS', items: ['JOGOS OLÍMPICOS DE INVERNO', 'JOGOS OLÍMPICOS DE VERÃO'] },
    { title: 'LIGAS E TAÇAS EUROPEIAS UEFA', items: ['SUPERLIGA']},
    { title: 'NOTÍCIAS', items: ['NOVIDADES']},
    { title: 'HISTÓRIA', items: ['DE ONDE VEIO A CAZETV']}
  ];

  return (
    <>
      <header className={styles.header} onMouseLeave={() => setActiveSubmenu(null)}>
        <div className={styles.topBar}>
          <img src={LogoCazeIcon} alt="Cazé TV" className={styles.logo} />

          <nav className={styles.desktopNav}>
            <ul className={styles.mainList}>
              {menuData.map((menu) => (
                <li 
                  key={menu.title}
                  onMouseEnter={() => setActiveSubmenu(menu)}
                  className={`${styles.mainListItem} ${activeSubmenu?.title === menu.title ? styles.active : ''}`}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.headerControls}>
            <div className={styles.accountArea}>
              <button className={styles.accButton} onClick={() => setIsAccountOpen(!isAccountOpen)}>
                <span className="material-symbols-outlined" id={styles.accCircle}>account_circle</span>
              </button>
              {isAccountOpen && (
                <>
                  <div className={styles.popoverOverlay} onClick={() => setIsAccountOpen(false)} />
                  <div className={styles.accountPopover}>
                    <div className={styles.popoverArrow} />
                    <div className={styles.popoverContent}>
                      <button 
  className={styles.loginBtn} 
  onClick={() => {
    navigate('/login');
    setIsAccountOpen(false);
  }}
>
  Entrar / Cadastrar
</button>
                      <div className={styles.divider} />
                      <div className={styles.themeRow}><span>Tema</span><ThemeToggle /></div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(true)}>
              <span className="material-symbols-outlined" id={styles.menuIcon}>menu</span>
            </button>
          </div>
        </div>

        <div className={`${styles.subHeaderDesktop} ${activeSubmenu ? styles.showSub : ''}`}>
          <ul className={styles.subListHorizontal}>
            {activeSubmenu?.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </header>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.visible : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      <aside className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <img src={drawerLogo} alt="Cazé TV" className={styles.logoSmall} />
          <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-outlined" id={styles.closeIcon}>close</span>
          </button>
        </div>
        
        <nav className={styles.mobileNav}>
          {menuData.map(menu => (
            <div key={menu.title} className={styles.accordion}>
              <button 
                className={styles.mobileItem} 
                onClick={() => setMobileSubOpen(mobileSubOpen === menu.title ? null : menu.title)}
              >
                {menu.title}
                <span className={`material-symbols-outlined ${mobileSubOpen === menu.title ? styles.rotate : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div className={`${styles.subItemsWrapper} ${mobileSubOpen === menu.title ? styles.isExpanded : ''}`}>
                <ul className={styles.mobileSubList}>
                  {menu.items.map(sub => (
                    <li key={sub} className={styles.subItemMobile}>{sub}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}