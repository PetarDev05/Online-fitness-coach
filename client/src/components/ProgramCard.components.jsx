import { TbTopologyStarRing3 } from "react-icons/tb";

const ProgramCard = ({ program }) => {
  return (
    <div
      className={`relative w-full p-7 flex flex-col items-center justify-between gap-5 border border-(--card-border-light) dark:border-(--card-border-dark) rounded-xl overflow-hidden ${program.id === "02" ? "shadow-pro-light dark:shadow-pro-dark" : "shadow-program-light dark:shadow-program-dark"}`}
    >
      {program.id === "02" && (
        <div className="w-50 h-50 transition-all duration-400 rounded-full filter mix-blend-multiply dark:mix-blend-normal blur-2xl bg-(--purple-light) dark:bg-(--purple-dark) absolute top-1/4 left-3/4 -translate-1/2"></div>
      )}
      {program.id === "02" && (
        <div className="w-50 h-50 transition-all duration-400 rounded-full filter mix-blend-multiply dark:mix-blend-normal blur-2xl bg-(--yellow-light) dark:bg-(--yellow-dark) absolute top-1/2 left-10 -translate-1/2"></div>
      )}
      {program.id === "02" && (
        <div className="w-50 h-50 transition-all duration-400 rounded-full filter mix-blend-multiply dark:mix-blend-normal blur-2xl bg-(--blue-light) dark:bg-(--blue-dark) absolute top-4/5 left-3/4 -translate-1/2"></div>
      )}
      <div className="w-full flex flex-row items-center justify-between z-10">
        <h3 className="text-(--heading-light) dark:text-(--heading-dark)">
          {program.name}
        </h3>
        <span
          id="price"
          className="text-(--primary-light) dark:text-(--primary-dark) text-3xl font-light"
        >
          ${program.priceMonthly}
        </span>
      </div>

      <hr className="w-full text-(--card-border-light) dark:text-(--card-border-dark) z-10" />
      <span className="text-sm z-10">{program.description}</span>
      <hr className="w-full text-(--card-border-light) dark:text-(--card-border-dark) z-10" />

      <ul className="w-full flex flex-col items-start gap-3 pl-2 z-10">
        {program.features.map((feature, i) => (
          <li
            key={i}
            className="w-full flex flex-row items-center gap-2 text-md"
          >
            <TbTopologyStarRing3 className="text-(--green)" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="w-full bg-(--primary-light) dark:bg-(--primary-dark) text-(--primary-dark) dark:text-(--primary-light) text-sm h-11 rounded-lg cursor-pointer flex items-center justify-center z-10"
      >
        Purchase plan
      </button>
    </div>
  );
};

export default ProgramCard;
