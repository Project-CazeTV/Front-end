import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';

export function useAccountMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  async function logout() {
    try {
      await signOut(auth);
      close();
      navigate('/');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  }

  return { isOpen, open, close, toggle, logout };
}