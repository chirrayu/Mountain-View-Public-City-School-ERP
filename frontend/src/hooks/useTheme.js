import { useEffect, useState } from "react";

const storageKey = "mvps-theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
