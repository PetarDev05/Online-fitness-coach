import Navigation from "./Navigation.components.jsx";
import { TbTopologyStarRing3 } from "react-icons/tb";
import ThemeToggler from "./ThemeToggler.components.jsx";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useAppContext } from "../hooks/useAppContext.hooks.jsx";

const Navbar = () => {
  const { showMenu, setShowMenu } = useAppContext();

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-17.25 px-4 flex flex-row items-center justify-between bg-(--white)/50 dark:bg-(--bg-dark)/50 backdrop-blur-xl border-b border-(--nav-border-light) dark:border-(--nav-border-dark) z-50 transition-all duration-400">
      <div className="flex flex-row items-center gap-3">
        <TbTopologyStarRing3 className="text-2xl text-(--primary-light) dark:text-(--primary-dark)" />
        <p className="logo">
          <span className="text-(--primary-light) dark:text-(--primary-dark)">
            Jamal
          </span>
        </p>
      </div>
      <Navigation />
      <div className="flex flex-row items-center gap-4 max-[870px]:hidden">
        <ThemeToggler />
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-sm cursor-pointer"
        >
          Get started
        </a>
      </div>
      <div onClick={() => setShowMenu((prev) => !prev)} className="text-2xl min-[870px]:hidden text-(--primary-light) dark:text-(--primary-dark)">{showMenu ? <CgClose /> : <CgMenuRight />}</div>
    </header>
  );
};

export default Navbar;
