import ThemeToggler from "./ThemeToggler.components.jsx";
import { useAppContext } from "../hooks/useAppContext.hooks.jsx";

const Menu = () => {
  const { showMenu, setShowMenu } = useAppContext();

  return (
    <div
      id="menu"
      className={`fixed left-0 right-0 w-full flex flex-col items-center justify-center gap-7 min-[870px]:hidden px-7 z-45 bg-(--white)/50 dark:bg-(--bg-dark)/50 backdrop-blur-xl ${showMenu ? "translate-y-17.25" : "-translate-y-full"} transition-all duration-400`}
    >
      <a
        href="#contact"
        onClick={() => setShowMenu((prev) => !prev)}
        className="px-5 py-2 rounded-lg bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-sm cursor-pointer"
      >
        Get started
      </a>

      <nav className="flex flex-col items-center gap-6 text-(--primary-light) dark:text-(--primary-dark)">
        <a
          onClick={() => setShowMenu((prev) => !prev)}
          href="#home"
          className="text-sm"
        >
          Home
        </a>
        <a
          onClick={() => setShowMenu((prev) => !prev)}
          href="#testimonials"
          className="text-sm"
        >
          Testimonials
        </a>
        <a
          onClick={() => setShowMenu((prev) => !prev)}
          href="#about"
          className="text-sm"
        >
          About me
        </a>
        <a
          onClick={() => setShowMenu((prev) => !prev)}
          href="#programs"
          className="text-sm"
        >
          Programs
        </a>
        <a
          onClick={() => setShowMenu((prev) => !prev)}
          href="#contact"
          className="text-sm"
        >
          Contact
        </a>
      </nav>
      <ThemeToggler />
    </div>
  );
};

export default Menu;
