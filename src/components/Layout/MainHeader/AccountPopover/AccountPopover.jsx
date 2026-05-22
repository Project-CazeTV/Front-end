import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../../../Common/ThemeToggle/ThemeToggle';
import styles from './AccountPopover.module.css';

export default function AccountPopover({ user, onClose, onLogout }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.popover}>
        <div className={styles.arrow} />

        <div className={styles.content}>
          {user ? (
            <div className={styles.userInfoSection}>
              <p className={styles.welcomeText}>
                Coé, <strong>{user.displayName?.split(' ')[0]}</strong>!
              </p>

              <button type="button" className={styles.logoutBtn} onClick={onLogout}>
                <span className="material-symbols-outlined">logout</span>
                Sair
              </button>
            </div>
          ) : (
            <button
              type="button"
              className={styles.loginBtn}
              onClick={() => {
                navigate('/login');
                onClose();
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
  );
}