import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { CgMenuRight } from 'react-icons/cg';
import styles from './MainHeader.module.css';
import LogoCazeIcon from '../../../assets/caze.png';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileDrawer from './MobileDrawer/MobileDrawer';
import AccountPopover from './AccountPopover/AccountPopover';
import { useMobileMenu } from '../../../hooks/useMobileMenu/useMobileMenu';
import { useMobileMenuLogo } from '../../../hooks/useMobileMenuLogo/useMobileMenuLogo';
import { useAccountMenu } from '../../../hooks/useAccountMenu/useAccountMenu';
import { userAuth } from '../../../hooks/UserAuth/UserAuth';
import { navigationMap } from '../../../utils/navigationMap';
import { menuData } from '../../../mocks/navegacao/optionsHeader';

export default function MainHeader({ logo, isTransparent }) {
  const navigate = useNavigate();
  const { user } = userAuth();
  const mobileMenu = useMobileMenu();
  const mobileMenuLogo = useMobileMenuLogo();
  const accountMenu = useAccountMenu();

  function goToPage(itemName) {
    mobileMenu.close();

    const page = navigationMap[itemName];
    if (!page) {
      console.warn(`Nenhuma rota definida para o item: ${itemName}`);
      return;
    }

    navigate(page.path, { state: page.state });
  }

  function renderUserButtonContent() {
    if (!user?.displayName) {
      return <FaUser size={25} className={styles.userIcon} />;
    }

    const firstName = user.displayName.split(' ')[0];
    return <div className={styles.avatarInitial}>Olá, {firstName}</div>;
  }

  return (
    <>
      <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
        <div className={styles.topBar}>
          <img
            src={logo || LogoCazeIcon}
            alt="Cazé TV"
            className={styles.logo}
            onClick={() => navigate('/')}
            loading="eager"
          />

          <DesktopNav onNavigate={goToPage} isTransparent={isTransparent} />

          <div className={styles.headerControls}>
            <div className={styles.accountArea}>
              <button
                type="button"
                className={styles.accButton}
                onClick={accountMenu.toggle}
                aria-label="Abrir área da conta"
              >
                {renderUserButtonContent()}
              </button>

              {accountMenu.isOpen && (
                <AccountPopover
                  user={user}
                  onClose={accountMenu.close}
                  onLogout={accountMenu.logout}
                />
              )}
            </div>

            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={mobileMenu.open}
              aria-label="Abrir menu"
              aria-expanded={mobileMenu.isOpen}
            >
              <CgMenuRight size={40} id={styles.menuIcon} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={mobileMenu.isOpen}
        logo={mobileMenuLogo}
        onClose={mobileMenu.close}
        menuData={menuData}
        openMenuItem={mobileMenu.openMenuItem}
        onToggleMenuItem={mobileMenu.toggleMenuItem}
        onNavigate={goToPage}
      />
    </>
  );
}