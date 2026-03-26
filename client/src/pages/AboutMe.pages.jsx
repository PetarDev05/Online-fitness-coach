const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-(--bg-light) dark:bg-black  text-(--text-light) dark:text-(--text-dark) transition-all duration-400 pt-20 pb-10"
    >
      <h1 className="text-(--heading-light) dark:text-(--heading-dark)  text-4xl md:text-5xl px-5">
        Meet Your Coach
      </h1>
      <div className="relative aspect-square w-full rounded-4xl max-w-65">
        <img
          src="/trainer.jpg"
          alt="trainer-image"
          className="absolute top-1/2 left-1/2 -translate-1/2 w-[90%] rounded-4xl z-10"
        />
        <div className="absolute w-full inset-0 transition-all duration-400 rounded-4xl bg-linear-to-br from-(--image-blue) dark:from-(--blue-dark) via-(--image-purple) dark:via-(--purple-dark) to-(--image-yellow) dark:to-(--yellow-dark) filter blur-md"></div>
      </div>
      <p className="max-w-150 text-justify px-5 text-sm sm:text-lg lg:text-xl">
        Hi, I'm Jamal — a certified fitness coach with over 6 years of
        experience helping people transform their bodies and build sustainable
        habits. I specialize in helping busy individuals lose fat, gain
        strength, and stay consistent with structured training and realistic
        nutrition plans. My approach is simple: no extremes, no shortcuts — just
        proven systems that deliver long-term results. Over the years, I've
        worked with 200+ clients, helping them build confidence, improve their
        health, and achieve real physical transformations.
      </p>
    </section>
  );
};

export default AboutMe;
