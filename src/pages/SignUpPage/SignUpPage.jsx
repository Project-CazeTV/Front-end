import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../LoginPage/LoginPage.module.css';
import LogoCazeBlackText from '../../assets/Logotipo_da_CazéTV.png';
import LogoCazeWhiteText from '../../assets/CazéTVNomeBranco.png';
import LogoFIFA from '../../assets/logo-copa-escuro.png';
import LogoFIFALight from '../../assets/logo-copa.png';

import { auth, db, googleProvider } from '../../services/firebase/firebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '', sobrenome: '', email: '', cep: '',
    rua: '', bairro: '', cidade: '', estado: '', senha: ''
  });

  const [currentLogo, setCurrentLogo] = useState(LogoCazeBlackText);
  const [currentLogoFifa, setCurrentLogoFifa] = useState(LogoFIFALight);


  const handleBack = () => {
    navigate('/login');
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

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }));
        }
      } catch (err) { console.error("Erro no CEP", err); }
    }
  };

  const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.senha);
    const user = userCredential.user;

    await updateProfile(user, { displayName: formData.nome });

    await setDoc(doc(db, "usuarios", user.uid), {
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      cep: formData.cep,
      tipoCadastro: 'manual'
    });

    navigate('/');
  } catch (error) {
    alert(error.message);
  }
};

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: user.displayName.split(' ')[0],
        sobrenome: user.displayName.split(' ').slice(1).join(' '),
        email: user.email,
        tipoCadastro: 'google'
      }, { merge: true });

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
          
          <input className={styles.input} placeholder="Nome" required onChange={e => setFormData({...formData, nome: e.target.value})} />
          <input className={styles.input} placeholder="Email" type="email" required onChange={e => setFormData({...formData, email: e.target.value})} />
          
          <input className={styles.input} placeholder="CEP" value={formData.cep} onChange={handleCepChange} maxLength="8" required />
          
          <input className={styles.input} placeholder="Rua" value={formData.rua} readOnly style={{opacity: 0.6}} />
          <input className={styles.input} placeholder="Cidade" value={formData.cidade} readOnly style={{opacity: 0.6}} />

          <input className={styles.input} placeholder="Senha" type="password" required onChange={e => setFormData({...formData, senha: e.target.value})} />

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
            onClick={() => navigate('/login')}
          >
            Faça login aqui
          </button>
        </div>
        
      </div>
    </div>
  );
}