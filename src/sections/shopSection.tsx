import ShopCard from "../components/shopCard";
import { card } from "../lib/types"; // Adjust the import path as needed
const ShopSection = () => {
  const shop: card[] = [
    {
      id: 1,
      name: "Group trainings",
      desc: "Tincidunt felis, suspendisse euismod eget. Aliquam in quis tempus.",
      image: "/images/stretch.jpeg",
      sessions: 7,
      price: 49.0,
      oldPrice: 60.0,
    },
    {
      id: 2,
      name: "PRIVATE TRAINING",
      desc: "Lectus volutpat, pulvinar diam non eu in et ut. A enim dignissim.",
      image: "/images/trainImage.jpeg",
      sessions: 5,
      price: 79.0,
    },
    {
      id: 3,
      name: "MEMBERSHIP",
      desc: "Adipiscing arcu ut ut dictum. Eget diam lacus egestas diam.",
      image: "/images/restImage.jpeg",
      sessions: 20,
      price: 99.0,
    },
  ];

  return (
    <section className="bg-black py-16 px-4 border-b-[0.1px] border-gray-400 ">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-2">
          <div className="w-8 h-0.5 bg-yellow-500 mr-3"></div>
          <span className="text-yellow-500 font-medium tracking-wide">
            SHOP
          </span>
        </div>

        <h2 className="text-white text-3xl md:text-4xl font-bold italic mb-12">
          PRICING OPTIONS THAT FIT YOUR
          <br />
          BUDGET AND GOALS
        </h2>

        {/* Categories */}
        <div className="flex flex-col md:flex-row items-start md:justify-between border border-gray-800 p-4 mb-8">
          <div className="text-gray-400">CATEGORIES:</div>
          <div className="flex flex-col md:flex-row md:gap-4 ">
            <button className="font-semibold hover:text-yellow-400 text-white">
              ALL
            </button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">
              GROUP TRAININGS
            </button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">
              PRIVATE TRAINING
            </button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">
              MEMBERSHIP
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap -mx-4">
          {shop.map((shop) => (
            <ShopCard shop={shop} key={shop.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
