const GroupSection = () => {
  return (
    <section className="bg-black py-16 border-b-[0.1px] border-gray-400">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center">
          <div className="w-6 h-0.5 bg-yellow-500"></div>
          <span className="text-yellow-500 font-medium mx-3">GROUP</span>
          <div className="w-6 h-0.5 bg-yellow-500"></div>
        </div>

        <h2 className="text-white text-4xl font-bold italic mt-6">
          ENERGY IS FOR EVERYONE
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-16 max-w-6xl mx-auto">
        <div className="w-1/4 flex flex-col items-center text-center px-4 border-r border-gray-800">
          <div className="w-16 h-16 relative mb-6">
            <img
              src="/icons/theRide.svg"
              alt="Exercise Bike"
              width={64}
              height={64}
              className="text-yellow-500"
            />
          </div>
          <h3 className="text-white text-xl font-bold mb-3">THE RIDE</h3>
          <p className="text-gray-400 text-sm">
            Viverra nulla vel ultricies in sit. Eu ullamcorper fringilla platea
            natoque.
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center text-center px-4 border-r border-gray-800">
          <div className="w-16 h-16 relative mb-6">
            <img
              src="/icons/meditate.svg"
              alt="Meditation"
              width={64}
              height={64}
              className="text-yellow-500"
            />
          </div>
          <h3 className="text-white text-xl font-bold mb-3">MIND BODY BURN</h3>
          <p className="text-gray-400 text-sm">
            Semper augue dictumst eros mattis in leo elit venena ultrices.
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center text-center px-4 border-r border-gray-800">
          <div className="w-16 h-16 relative mb-6">
            <img
              src="/icons/cardio.svg"
              alt="Dance"
              width={64}
              height={64}
              className="text-yellow-500"
            />
          </div>
          <h3 className="text-white text-xl font-bold mb-3">CARDIO & DANCE</h3>
          <p className="text-gray-400 text-sm">
            Neque quam morbi euismod cras ullamcorper nibh purus lacinia.
          </p>
        </div>

        <div className="w-1/4 flex flex-col items-center text-center px-4">
          <div className="w-16 h-16 relative mb-6">
            <img
              src="/icons/actionSports.svg"
              alt="Weights"
              width={64}
              height={64}
              className="text-yellow-500"
            />
          </div>
          <h3 className="text-white text-xl font-bold mb-3">ACTION SPORTS</h3>
          <p className="text-gray-400 text-sm">
            In amet a donec amet dolor, viverra urna tempor. Ultrices et risus
            amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
