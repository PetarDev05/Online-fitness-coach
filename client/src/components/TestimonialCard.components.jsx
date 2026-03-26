const TestimonialCard = ({testimonial}) => {
  return <div className={`w-full max-w-87.5 p-5 rounded-xl flex flex-col items-start justify-between gap-5 border border-(--card-border-light) dark:border-(--card-border-dark) transition-all duration-400 ${testimonial.color === "blue" ? "shadow-t-blue-light dark:shadow-t-blue-dark" : testimonial.color === "yellow" ? "shadow-t-yellow-light dark:shadow-t-yellow-dark" : "shadow-t-purple-light dark:shadow-t-purple-dark"}`}>
    <span className="text-md">{testimonial.description}</span>
    <div className="flex flex-row items-center justify-start gap-4">
      <img src={`${testimonial.image}`} alt="profile-picture" className="rounded-full aspect-square w-10" />
      <span className="text-sm font-semibold">- {testimonial.name} -</span>
    </div>
  </div>;
};

export default TestimonialCard;
