import ProgramCard from "../components/ProgramCard.components";

const Programs = () => {
  const programs = [
    {
      id: "01",
      name: "Starter",
      priceMonthly: 59,
      priceYearly: 590,
      description:
        "Complete coaching experience with personalized training and ongoing support.",
      features: [
        "Personalized workout plan",
        "Custom nutrition guidance",
        "Weekly check-ins",
        "Progress tracking",
        "Direct coach support",
      ],
    },
    {
      id: "02",
      name: "Professional",
      priceMonthly: 79,
      priceYearly: 790,
      description:
        "Structured plan focused on sustainable fat loss and building healthy habits.",
      features: [
        "Fat loss training program",
        "Simple nutrition plan",
        "Habit tracking system",
        "Progress monitoring",
        "Email support",
      ],
    },
    {
      id: "03",
      name: "Premium",
      priceMonthly: 99,
      priceYearly: 990,
      description:
        "Designed to help you build muscle, increase strength, and improve performance.",
      features: [
        "Hypertrophy training plan",
        "Strength progression system",
        "Nutrition for muscle gain",
        "Workout tracking",
        "Monthly check-ins",
      ],
    },
  ];

  return (
    <section
      id="programs"
      className="relative w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-(--bg-light) dark:bg-black text-(--text-light) dark:text-(--text-dark) transition-all duration-400 py-20"
    >
      <h1 className="text-(--heading-light) dark:text-(--heading-dark) text-4xl md:text-5xl px-5">
        Pricing is simple with no hidden fees
      </h1>
      <p className="max-w-150 text-sm sm:text-lg lg:text-xl px-5 text-center z-20">
        Choose the program that best fits your experience level, as well as your
        training and fitness goals
      </p>
      <div className="px-5 sm:px-10 grid grid-cols-1 min-[1140px]:grid-cols-3 gap-10">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
