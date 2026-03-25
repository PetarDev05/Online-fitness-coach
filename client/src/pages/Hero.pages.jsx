const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-(--bg-light) dark:bg-black  text-(--text-light) dark:text-(--text-dark) transition-all duration-400 overflow-x-hidden"
    >
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--purple-light) dark:bg-(--purple-dark) absolute top-50 left-1/5 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--purple-light) dark:bg-(--purple-dark) absolute top-2/3 left-1/2 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--blue-light) dark:bg-(--blue-dark) absolute top-4/5 left-1/4 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--yellow-light) dark:bg-(--yellow-dark) absolute top-3/5 left-3/4 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--yellow-light) dark:bg-(--yellow-dark) absolute top-3/5 left-0 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--blue-light) dark:bg-(--blue-dark) absolute top-0 left-3/4 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--purple-light) dark:bg-(--purple-dark) absolute top-3/4 -right-50 -translate-1/2"></div>
      <div className="w-60 h-60 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--yellow-light) dark:bg-(--yellow-dark) absolute top-30 left-1/2 -translate-1/2"></div>
      <h1 className="text-(--heading-light) dark:text-(--heading-dark) max-w-250 text-center transition-all duration-400 z-10">
        Online <span className="text-(--image-blue)">Fitness</span> Coaching
        That <span className="text-(--image-yellow)">Actually</span> Gets{" "}
        <span className="text-(--image-purple)">Results</span>
      </h1>
      <p className="max-w-150 text-center z-10">
        Personalized training and nutrition plans designed to help you lose fat,
        build muscle, and stay consistent — without extreme diets or burnout.
      </p>
      <div className="flex flex-row items-center gap-5 z-10">
        <a
          href="#programs"
          className="px-5 py-1.75 rounded-lg bg-transparent text-(--primary-light) dark:text-(--primary-dark) text-lg cursor-pointer border"
        >
          Check programs
        </a>
        <a
          href="#contact"
          className="px-5 py-1.75 rounded-lg bg-transparent text-(--primary-light) dark:text-(--primary-dark) text-lg cursor-pointer border"
        >
          Get in touch
        </a>
        {/* <a
          href="#programs"
          className="px-5 py-2 rounded-lg bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-lg cursor-pointer"
        >
          Check programs
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-lg cursor-pointer"
        >
          Get in touch
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
