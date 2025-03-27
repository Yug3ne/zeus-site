const ServiceCard = () => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-12">
      <img
        src="/images/girlImage.jpg"
        alt="Yoga class"
        className="w-full object-cover mb-6"
      />
      <h3 className="text-2xl font-bold mb-4">YOGA CLASSES</h3>
      <p className="text-gray-400 mb-4">
        Our yoga classes focus on alignment, movement, and breathing techniques
        to help you enhance physical strength and mental clarity.
      </p>
      <a href="#" className="text-yellow-500 font-bold">
        LEARN MORE →
      </a>
    </div>
  );
};

export default ServiceCard;
