import { useState } from 'react';
import { menuData } from '../../../../mocks/navegacao/optionsHeader';
import styles from './DesktopNav.module.css';

export default function DesktopNav({ onNavigate, isTransparent }) {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className={styles.navWrapper} onMouseLeave={() => setActiveMenu(null)}>
      <nav className={styles.desktopNav}>
        <ul className={styles.mainList}>
          {menuData.map((menu) => (
            <li
              key={menu.title}
              className={`${styles.mainListItem} ${activeMenu?.title === menu.title ? styles.active : ''} ${isTransparent ? styles.transparent : ''}`}
              onMouseEnter={() => setActiveMenu(menu)}
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </nav>

      <div className={`${styles.subHeaderDesktop} ${activeMenu ? styles.showSub : ''}`}>
        <ul className={`${styles.subListHorizontal} ${isTransparent ? styles.transparent : ''}`}>
          {activeMenu?.items.map((itemName) => (
            <li key={itemName} onClick={() => onNavigate(itemName)}>
              {itemName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}