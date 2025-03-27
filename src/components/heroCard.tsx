import { card } from "../lib/types";
const HeroCard = ({ card }: { card: card }) => {
  return (
    <div className="flex flex-col text-white border-r-[0.1px] border-t-[0.1px] border-b-[0.1px] border-gray-300 p-8 hover:bg-[#252121e1] ">
      <span className="flex items-center gap-4">
        <img src={card.image} alt="" />
        <h1 className="text-white font-bold text-3xl italic">{card.name}</h1>
      </span>
      <p>{card.desc}</p>
    </div>
  );
};

export default HeroCard;
