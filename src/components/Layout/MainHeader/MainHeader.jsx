import React from 'react';
import { useState, useEffect } from 'react';
import styles from './MainHeader.module.css';
import LogoCazeIcon from '../../../assets/caze.png';
import LogoCazeBlackText from '../../../assets/Logotipo_da_CazéTV.png';
import LogoCazeWhiteText from '../../../assets/CazéTVNomeBranco.png';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../Common/ThemeToggle/ThemeToggle';
import { CgMenuRight } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";


import { auth } from '../../../services/firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function MainHeader({ isTransparent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [drawerLogo, setDrawerLogo] = useState(LogoCazeBlackText);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const updateDrawerLogo = () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setDrawerLogo(isDark ? LogoCazeWhiteText : LogoCazeBlackText);
    };

    updateDrawerLogo();
    const observer = new MutationObserver(updateDrawerLogo);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAccountOpen(false);
      navigate('/');
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  const renderUserIcon = () => {
    if (user?.photoURL) {
      return <img src={user.photoURL} alt="Perfil" className={styles.avatarImg} />;
    }
    if (user?.displayName) {
      return <div className={styles.avatarInitial}>{user.displayName[0].toUpperCase()}</div>;
    }
    return <FaUser size={25} className={styles.userIcon} />;
  };

  const handleSubItemClick = (subItem) => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);

    if (subItem === 'TABELA') {
      navigate('/world-cup');
    } else if (subItem === 'JOGOS OLÍMPICOS DE VERÃO') {
      navigate('/olympics');
    } else if (subItem === 'DE ONDE VEIO A CAZETV') {
      navigate('/historia/cazetv');
    } else if (subItem === 'NOVIDADES') {
      navigate('/noticias/novidades');
    }
  };

  const menuData = [
    { title: 'COPA DO MUNDO FIFA 2026', items: ['TABELA', 'GRUPOS', 'CIDADES-SEDE'] },
    { title: 'CAMPEONATOS ESTADUAIS', items: ['CAMPEONATO PAULISTA SICREDI', 'CAMPEONATO CARIOCA SUPERBET', 'CAMPEONATO MINEIRO SUPERBET', 'CAMPEONATO MINEIRO SICOOB'] },
    { title: 'JOGOS OLÍMPICOS', items: ['JOGOS OLÍMPICOS DE INVERNO', 'JOGOS OLÍMPICOS DE VERÃO'] },
    { title: 'LIGAS E TAÇAS EUROPEIAS UEFA', items: ['SUPERLIGA'] },
    { title: 'NOTÍCIAS', items: ['NOVIDADES'] },
    { title: 'HISTÓRIA', items: ['DE ONDE VEIO A CAZETV'] }
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}
        onMouseLeave={() => setActiveSubmenu(null)}
      >
        <div className={styles.topBar}>
          <img
            src={LogoCazeIcon}
            alt="Cazé TV"
            className={styles.logo}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />

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
                {renderUserIcon()}
              </button>

              {isAccountOpen && (
                <>
                  <div className={styles.popoverOverlay} onClick={() => setIsAccountOpen(false)} />
                  <div className={styles.accountPopover}>
                    <div className={styles.popoverArrow} />
                    <div className={styles.popoverContent}>

                      {user ? (
                        <div className={styles.userInfoSection}>
                          <p className={styles.welcomeText}>Coé, <strong>{user.displayName?.split(' ')[0]}</strong>!</p>
                          <button className={styles.logoutBtn} onClick={handleLogout}>
                            <span className="material-symbols-outlined">logout</span>
                            Sair
                          </button>
                        </div>
                      ) : (
                        <button
                          className={styles.loginBtn}
                          onClick={() => {
                            navigate('/login');
                            setIsAccountOpen(false);
                          }}
                        >
                          Entrar / Cadastrar
                        </button>
                      )}

                      <div className={styles.divider} />
                      <div className={styles.themeRow}>
                        <span>Tema</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(true)}>
              <CgMenuRight size={40} id={styles.menuIcon}/>
            </button>
          </div>
        </div>

        <div className={`${styles.subHeaderDesktop} ${activeSubmenu ? styles.showSub : ''}`}>
          <ul className={styles.subListHorizontal}>
            {activeSubmenu?.items.map(item => (
              <li
                key={item}
                onClick={() => handleSubItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </li>
            ))}
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
                    <li
                      key={sub}
                      className={styles.subItemMobile}
                      onClick={() => handleSubItemClick(sub)}
                      style={{ cursor: 'pointer' }}
                    >
                      {sub}
                    </li>
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