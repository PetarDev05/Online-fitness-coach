import { useState } from "react";
import useSendEmail from "../hooks/useSendEmail.hooks.jsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-hot-toast";

const notify = (message) => toast(message);

const ContactForm = () => {
  const { isLoading, sendEmail } = useSendEmail();

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.message) {
      return;
    }
    const result = await sendEmail(input);
    notify(result);
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-120 p-7 flex flex-col items-center gap-7 rounded-xl z-20"
    >
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={input.name}
        className="w-full py-3 px-4 border border-(--border-light) dark:border-(--border-dark) rounded-lg outline-none text-(--primary-light) dark:text-(--primary-dark) focus:border focus:border-(--primary-light) dark:focus:border-(--primary-dark)"
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={input.email}
        className="w-full py-3 px-4 border border-(--border-light) dark:border-(--border-dark) rounded-lg outline-none text-(--primary-light) dark:text-(--primary-dark) focus:border focus:border-(--primary-light) dark:focus:border-(--primary-dark)"
        placeholder="E-mail"
      />
      <textarea
        name="message"
        id=""
        onChange={handleChange}
        value={input.message}
        className="w-full p-3 rounded-lg border border-(--border-light) dark:border-(--border-dark) outline-none focus:border text-(--primary-light) dark:text-(--primary-dark) focus:border-(--primary-light) dark:focus:border-(--primary-dark) min-h-30 resize-none"
        placeholder="Your message..."
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-sm py-3 rounded-lg cursor-pointer flex items-center justify-center"
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-2xl font-bold" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
