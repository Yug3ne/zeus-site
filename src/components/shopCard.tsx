import { card } from "../lib/types";

const ShopCard = ({shop}: {shop:card}) => {
  return (
    
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="border border-gray-800 h-full">
          <img
            src={shop.image}
            alt="Group Training"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-white text-xl font-bold mb-2">
            {shop.name}
            </h3>
            <div className="flex items-baseline mb-4">
              <span className="text-yellow-500 text-xl font-bold">
                {shop.price} USD
              </span>
              <span className="text-gray-500 ml-2 line-through">
                {shop.oldPrice}USD
              </span>
              <span className="text-gray-400 ml-2">{shop.sessions} session</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {shop.desc}
            </p>
            <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default ShopCard;
