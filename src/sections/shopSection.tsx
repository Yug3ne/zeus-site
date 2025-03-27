const ShopSection = () => {
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
            <button className="font-semibold hover:text-yellow-400 text-white">ALL</button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">GROUP TRAININGS</button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">PRIVATE TRAINING</button>
            <button className="font-semibold hover:text-yellow-400 text-gray-400">MEMBERSHIP</button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-800 h-full">
              <img
                src="/images/stretch.jpeg"
                alt="Group Training"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  GROUP TRAININGS
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-yellow-500 text-xl font-bold">
                    $ 49.00 USD
                  </span>
                  <span className="text-gray-500 ml-2 line-through">
                    $ 60.00 USD
                  </span>
                  <span className="text-gray-400 ml-2">7 sessions</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Tincidunt felis, suspendisse euismod eget. Aliquam in quis
                  tempus.
                </p>
                <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-800 h-full">
              <img
                src="/images/trainImage.jpeg"
                alt="Private Training"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  PRIVATE TRAINING
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-yellow-500 text-xl font-bold">
                    $ 79.00 USD
                  </span>
                  <span className="text-gray-400 ml-2">5 sessions</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Lectus volutpat, pulvinar diam non eu in et ut. A enim
                  dignissim.
                </p>
                <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-800 h-full">
              <img
                src="/images/restImage.jpeg"
                alt="Membership"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  MEMBERSHIP
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-yellow-500 text-xl font-bold">
                    $ 99.00 USD
                  </span>
                  <span className="text-gray-400 ml-2">per month</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Adipiscing arcu ut ut dictum. Eget diam lacus egestas diam.
                </p>
                <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
