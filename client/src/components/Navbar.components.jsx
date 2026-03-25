import Navigation from "./Navigation.components.jsx";
import { TbTopologyStarRing3 } from "react-icons/tb";
import ThemeToggler from "./ThemeToggler.components.jsx";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full p-4 flex flex-row items-center justify-between bg-(--white)/50 dark:bg-(--bg-dark)/50 backdrop-blur-xl border-b border-(--nav-border-light) dark:border-(--nav-border-dark) z-25 transition-all duration-400">
      <div className="flex flex-row items-center gap-3">
        <TbTopologyStarRing3 className="text-2xl text-(--primary-light) dark:text-(--primary-dark)" />
        <p className="logo">
          <span className="text-(--primary-light) dark:text-(--primary-dark)">
            Jamal
          </span>
        </p>
      </div>
      <Navigation />
      <div className="flex flex-row items-center gap-4">
        <ThemeToggler />
        <a href="#contact" className="px-5 py-2 rounded-lg bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-sm cursor-pointer">
          Get started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
