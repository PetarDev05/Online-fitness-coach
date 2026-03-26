import { useAppContext } from "../hooks/useAppContext.hooks.jsx";
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
 
const ThemeToggler = () => {
  const { theme, switchTheme } = useAppContext();

  return (
    <div
      onClick={switchTheme}
      className="relative w-17.5 h-8 rounded-full bg-(--primary-light) flex items-center px-0.75 dark:bg-(--primary-dark) cursor-pointer transition-colors duration-500 ease-in-out"
    >
      <LuSunMedium className="absolute text-(--primary-light) z-10 left-1.25 text-xl" />
      <LuMoon className="absolute  text-(--primary-dark) z-10 right-1.5 text-xl" />
      <div
        className={`transition-all duration-300 ${theme === "light" ? "translate-x-0" : "translate-x-10"} w-6 h-6 rounded-full bg-(--primary-dark) dark:bg-(--primary-light)`}
      ></div>
    </div>
  );
};

export default ThemeToggler;
