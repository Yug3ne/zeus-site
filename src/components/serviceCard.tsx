import { card } from "../lib/types";

const ServiceCard = ({service}:{service:card}) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-12">
      <img
        src={service.image}
        alt="Yoga class"
        className="w-full object-cover mb-6"
      />
      <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
      <p className="text-gray-400 mb-4">
        {service.desc}
      </p>
      <a href="#" className="text-yellow-500 font-bold">
        LEARN MORE →
      </a>
    </div>
  );
};

export default ServiceCard;
