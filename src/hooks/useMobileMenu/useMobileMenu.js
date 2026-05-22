import { useState, useEffect } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuItem, setOpenMenuItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setOpenMenuItem(null);
  }

  function toggleMenuItem(menuTitle) {
    setOpenMenuItem((current) => (current === menuTitle ? null : menuTitle));
  }

  return { isOpen, openMenuItem, open, close, toggleMenuItem };
}