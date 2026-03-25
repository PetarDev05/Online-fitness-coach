import { useState } from "react";
import { AppContext } from "./AppContext.context.jsx";

const AppContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const html = document.documentElement;

  const switchTheme = () => {
    theme === "light"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = { showMenu, setShowMenu, theme, switchTheme };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
