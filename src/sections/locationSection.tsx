const LocationSection = () => {
  return (
    <section className="bg-black py-16 px-4 border-b-[0.1px] border-gray-400">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Map Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/map.jpeg"
            alt="Gym locations map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location Info */}
        <div className="w-full h-[700px] md:w-1/2 md:pl-12">
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-yellow-500 mr-3"></div>
            <span className="text-yellow-500 font-medium tracking-wide">
              LOCATION
            </span>
          </div>

          <h2 className="text-white text-4xl font-bold italic mt-2 mb-6">
            FIND YOUR GYM
          </h2>

          <p className="text-gray-400 mb-8">
            Ut magna amet, a malesuada. Nibh in interdum at sem senectus
            pulvinar aliquam orci. Adipiscing
          </p>

          {/* Location Cards */}
          <div className="space-y-6">
            <div className="border border-gray-800 p-6">
              <h3 className="text-white text-xl font-bold mb-3">Zeus</h3>
              <p className="text-gray-400">
                1234 Ash Dr. San Jose, South Dakota 56789
              </p>
              <p className="text-gray-400">456-123-5555</p>
            </div>

            <div className="border border-gray-800 p-6">
              <h3 className="text-white text-xl font-bold mb-3">Cronus</h3>
              <p className="text-gray-400">
                4545 Washington Ave. Manchester, Kentucky 12301
              </p>
              <p className="text-gray-400">123-456-5555</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
