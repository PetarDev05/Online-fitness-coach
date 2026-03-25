import ContactForm from "../components/ContactForm.components.jsx";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center gap-7 bg-(--bg-light) dark:bg-black  text-(--text-light) dark:text-(--text-dark) transition-all duration-400">
      <div className="w-80 h-80 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--purple-light) dark:bg-(--purple-dark) absolute top-2/3 left-1/2 -translate-1/2"></div>
      <div className="w-80 h-80 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--blue-light) dark:bg-(--blue-dark) absolute top-2/5 left-3/5 -translate-1/2"></div>
      <div className="w-80 h-80 transition-all duration-400 rounded-full filter mix-blend-multiply  dark:mix-blend-normal blur-2xl bg-(--yellow-light) dark:bg-(--yellow-dark) absolute top-2/5 left-2/5 -translate-1/2"></div>
      <h1 className="text-(--heading-light) dark:text-(--heading-dark) z-20">Apply for Coaching</h1>
      <p className="max-w-150 text-center z-20">Fill out the form below and I will get back to you within 24 hours to discuss your goals and the best plan for you.</p>
      <ContactForm />
    </section>
  );
};

export default Contact;
