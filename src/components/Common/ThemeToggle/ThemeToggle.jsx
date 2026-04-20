import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <div className={styles.themeToggleWrapper}>
      <span className="material-symbols-outlined">light_mode</span>

      <div
        className={`${styles.toggle} ${isDark ? styles.active : ""}`}
        onClick={() => setIsDark(prev => !prev)}
      >
        <div className={styles.ball} />
      </div>

      <span className="material-symbols-outlined">dark_mode</span>
    </div>
  );
}