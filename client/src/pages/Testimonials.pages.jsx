import TestimonialCard from "../components/TestimonialCard.components";

const Testimonials = () => {
  const testimonials = [
    {
      id: "01",
      color: "blue",
      name: "Michael Johnson",
      image: "/pearson-1.jpg",
      description:
        "I lost 10kg in 3 months and finally built a routine I can stick to. The plan was simple, clear, and easy to follow even with a busy schedule.",
    },
    {
      id: "02",
      color: "purple",
      name: "Daniel Smith",
      image: "/pearson-2.jpg",
      description:
        "Before this, I was going to the gym without any real progress. Now I have a structured plan and I’m seeing results every week.",
    },
    {
      id: "03",
      color: "yellow",
      name: "Chris Williams",
      image: "/pearson-3.jpg",
      description:
        "The biggest change for me was consistency. I finally understand how to train and eat properly without overcomplicating everything.",
    },
    {
      id: "04",
      color: "blue",
      name: "James Brown",
      image: "/pearson-4.webp",
      description:
        "I gained muscle and improved my strength significantly. The support and guidance made a huge difference.",
    },
    {
      id: "05",
      color: "purple",
      name: "Andrew Davis",
      image: "/pearson-5.jpg",
      description:
        "No extreme diets, no burnout — just a system that works. I feel stronger, more confident, and in control of my routine.",
    },
    {
      id: "06",
      color: "yellow",
      name: "Matthew Wilson",
      image: "/pearson-6.jpg",
      description:
        "What I liked the most is how personalized everything was. It didn’t feel generic — it felt built specifically for me.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-(--bg-light) dark:bg-black  text-(--text-light) dark:text-(--text-dark) transition-all duration-400 pt-20 pb-10"
    >
      <h1 className="text-(--heading-light) dark:text-(--heading-dark) text-4xl md:text-5xl px-5">
        Training experience beyond expectations
      </h1>
      <p className="max-w-150 text-sm sm:text-lg lg:text-xl px-5 text-center">
        Real people, real results. These are just some of the clients who
        followed a structured plan and stayed consistent — without extreme diets
        or unrealistic routines.
      </p>
      <div className="px-5 sm:px-10 max-w-200 grid grid-cols-1 min-[800px]:grid-cols-2 gap-5">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
