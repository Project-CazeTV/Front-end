import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';
import LogoCazeBlackText from '../../assets/Logotipo_da_CazéTV.png';
import LogoCazeWhiteText from '../../assets/CazéTVNomeBranco.png';
import LogoFIFA from '../../assets/logo-copa-escuro.png';
import LogoFIFALight from '../../assets/logo-copa.png';
import { auth, db, googleProvider } from '../../services/firebase/firebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { registerWithEmail, registerWithGoogle } from '../../services/firebase/authService.js';
import { buscarCep } from '../../services/cepService';
import { useThemeLogos } from '../../hooks/ThemeLogos/useThemeLogos.js';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nome: '', email: '', cep: '', cidade: '', estado: '', senha: '' });
  const { currentLogo, currentLogoFifa } = useThemeLogos({ logoLight: LogoCazeBlackText, logoDark: LogoCazeWhiteText, fifaLight: LogoFIFALight, fifaDark: LogoFIFA });

  const handleBack = () => { navigate('/login'); };

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, cep }));

    if (cep.length !== 8) return;

    try {
      const endereco = await buscarCep(cep);
      setFormData(prev => ({ ...prev, cidade: endereco.cidade, estado: endereco.estado }));
    } catch (err) {
      console.error("Erro no CEP", err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await registerWithEmail(formData);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await registerWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
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
          Seja bem-vindo a <strong>Cazé TV</strong>. Confirme seus dados abaixo para continuar seu cadastro.
        </p>
        <form onSubmit={handleSignUp} className={styles.form}>

          <input className={styles.input} placeholder="Nome" required onChange={e => setFormData({ ...formData, nome: e.target.value })} />
          <input className={styles.input} placeholder="Email" type="email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <input className={styles.input} placeholder="CEP" value={formData.cep} onChange={handleCepChange} maxLength="8" required />
          <input className={styles.input} placeholder="Cidade" value={formData.cidade} readOnly style={{ opacity: 0.6 }} />
          <input className={styles.input} placeholder="Estado" value={formData.estado} readOnly style={{ opacity: 0.6 }} />
          <input className={styles.input} placeholder="Senha" type="password" required onChange={e => setFormData({ ...formData, senha: e.target.value })} />
          <button type="submit" className={styles.submitBtn}>Finalizar Cadastro</button>
        </form>

        <div className={styles.socialLogin}>
          <button type="button" className={styles.googleBtn} onClick={signUpWithGoogle}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png" alt="Google" />
            Cadastrar com Google
          </button>
        </div>

        <div className={styles.switchArea}>
          <span>Já tem uma conta?</span>
          <button
            type="button"
            className={styles.registerLink}
            onClick={() => navigate('/login')}>Faça login aqui</button>
        </div>

      </div>
    </div>
  );
}