const FooterPillar = ({ pillar }) => {
  return (
    <ul className="flex flex-col items-center gap-5 text-(--primary-light) dark:text-(--primary-dark)">
      <li className="text-sm font-semibold">{pillar.title}</li>
      {pillar.items.map((item, i) => (
        <li key={i} className="text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterPillar;
