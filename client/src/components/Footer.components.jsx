import FooterPillar from "./FooterPillar.components";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      id: "01",
      title: "Features",
      items: [
        "Training Programs",
        "Daily Calls",
        "Nutrition Guides",
        "Monthly Gatherings",
      ],
    },
    {
      id: "02",
      title: "Contact",
      items: ["Email", "Instagram", "Support", "Consulatations"],
    },
    {
      id: "03",
      title: "Company",
      items: ["About", "Testimonials", "Careers", "Blog"],
    },
    {
      id: "04",
      title: "Programs",
      items: ["Online Coaching", "Fat Loss", "Muscle Building", "Custom Plans"],
    },
  ];

  return (
    <footer className="w-full py-20 px-10 flex flex-row items-center justify-center gap-20 bg-(--bg-light) dark:bg-(--bg-dark) backdrop-blur-xl border-t border-(--nav-border-light) dark:border-(--nav-border-dark) z-25 transition-all duration-400">
      <div className="flex flex-col items-center gap-5 text-(--primary-light) dark:text-(--primary-dark)">
        <span className="font-semibold">Follow me on:</span>
        <div className="flex flex-row items-center gap-3">
          <FiInstagram className="text-2xl cursor-pointer" />
          <FaFacebook className="text-2xl cursor-pointer" />
          <BsTwitterX className="text-2xl cursor-pointer" />
          <FaLinkedin className="text-2xl cursor-pointer" />
        </div>
      </div>
      {footerData.map((pillar) => (
        <FooterPillar key={pillar.id} pillar={pillar} />
      ))}
    </footer>
  );
};

export default Footer;
