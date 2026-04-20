import { useState, useEffect } from 'react';
import styles from './LoginPage.module.css';
import LogoCazeBlackText from '../../assets/Logotipo_da_CazéTV.png';
import LogoCazeWhiteText from '../../assets/CazéTVNomeBranco.png';
import LogoFIFA from '../../assets/logo-copa-escuro.png';
import LogoFIFALight from '../../assets/logo-copa.png';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [currentLogo, setCurrentLogo] = useState(LogoCazeBlackText);
  const [currentLogoFifa, setCurrentLogoFifa] = useState(LogoFIFALight);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.body.setAttribute('data-theme', savedTheme);
    
    setCurrentLogo(savedTheme === 'dark' ? LogoCazeWhiteText : LogoCazeBlackText);
    setCurrentLogoFifa(savedTheme === 'dark' ? LogoFIFALight : LogoFIFA);

    const observer = new MutationObserver(() => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setCurrentLogo(isDark ? LogoCazeWhiteText : LogoCazeBlackText);
      setCurrentLogoFifa(isDark ? LogoFIFALight : LogoFIFA);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login com:', email, senha);
  };

  return (
    <div className={styles.pageWrapper}>

      <button className={styles.backButton} onClick={handleBack} aria-label="Voltar para tela inicial">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className={styles.loginContainer}>
        
        <div className={styles.headerLogos}>
          <img src={currentLogo} alt="Cazé TV" className={styles.logoCaze} />
          <div className={styles.divider} />
          <img src={currentLogoFifa} alt="FIFA 26" className={styles.logoFifa} />
        </div>

        <p className={styles.welcomeText}>
          Seja bem-vindo a <strong>Cazé TV</strong>. Entre com seus dados abaixo para continuar.
        </p>

        <form onSubmit={handleLogin} className={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            required
          />

          <button type="submit" className={styles.submitBtn}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <div className={styles.switchArea}>
          <span>Não tem uma conta?</span>
          <button className={styles.registerLink}>Cadastre-se</button>
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.googleBtn}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png" alt="Google" />
            Entrar com Google
          </button>
        </div>

      </div>
    </div>
  );
}