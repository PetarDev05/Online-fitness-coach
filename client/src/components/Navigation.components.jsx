const Navigation = () => {
  return (
    <nav className="flex flex-row items-center gap-6 text-(--primary-light) dark:text-(--primary-dark) max-[870px]:hidden">
      <a href="#home" className="text-sm">
        Home
      </a>
      <a href="#testimonials" className="text-sm">
        Testimonials
      </a>
      <a href="#about" className="text-sm">
        About me
      </a>
      <a href="#programs" className="text-sm">
        Programs
      </a>
      <a href="#contact" className="text-sm">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
