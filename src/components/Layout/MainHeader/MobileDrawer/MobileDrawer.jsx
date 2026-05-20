import styles from './MobileDrawer.module.css';

export default function MobileDrawer({ isOpen, logo, onClose, menuData, openMenuItem, onToggleMenuItem, onNavigate }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
        onClick={onClose}
      />

      <div
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <img src={logo} alt="Cazé TV" className={styles.logoSmall} loading="eager" />

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <span className="material-symbols-outlined" id={styles.closeIcon}>
              close
            </span>
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {menuData.map((menu) => {
            const isMenuItemOpen = openMenuItem === menu.title;

            return (
              <div key={menu.title} className={styles.accordion}>
                <button
                  type="button"
                  className={styles.mobileItem}
                  onClick={() => onToggleMenuItem(menu.title)}
                  aria-expanded={isMenuItemOpen}
                >
                  {menu.title}
                  <span className={`material-symbols-outlined ${isMenuItemOpen ? styles.rotate : ''}`}>
                    expand_more
                  </span>
                </button>

                <div className={`${styles.subItemsWrapper} ${isMenuItemOpen ? styles.isExpanded : ''}`}>
                  <ul className={styles.mobileSubList}>
                    {menu.items.map((itemName) => (
                      <li
                        key={itemName}
                        className={styles.subItemMobile}
                        onClick={() => onNavigate(itemName)}
                      >
                        {itemName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}