const BlogSection = () => {
  return (
    <section className="bg-black py-16 px-4 border-b-[0.1px] border-gray-400">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-6 h-0.5 bg-yellow-500 mr-3"></div>
          <span className="text-yellow-500">BLOG</span>
        </div>

        <h2 className="text-white text-4xl font-bold mb-12">BLOG & EVENTS</h2>

        {/* Blog Cards */}
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border overflow-hidden border-gray-800">
              <img
                src="/images/benchPress.jpg"
                alt="Person lifting weights"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-gray-500 mb-2">May 3, 2021</div>
                <h3 className="text-white text-xl font-bold mb-6">
                  HOW WE GET MOTIVATED BEFORE CLASS
                </h3>
                <a
                  href="#"
                  className="inline-block border border-white text-white px-6 py-2 hover:bg-[#e7e1e1] hover:text-black"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border overflow-hidden border-gray-800">
              <img
                src="/images/box.jpg"
                alt="Boxing match"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-gray-500 mb-2">May 3, 2021</div>
                <h3 className="text-white text-xl font-bold mb-6">
                  5 REASONS WHY BOXING WILL HELP YOU REACH YOUR FITNESS GOALS
                </h3>
                <a
                  href="#"
                  className="inline-block border border-white text-white px-6 py-2 hover:bg-[#e7e1e1] hover:text-black"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className=" overflow-hidden border border-gray-800">
              <img
                src="/images/femaleBoxer.jpg"
                alt="Woman resting after workout"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-gray-500 mb-2">May 3, 2021</div>
                <h3 className="text-white text-xl font-bold mb-6">
                  THE MENTAL HEALTH BENEFITS OF BOXING
                </h3>
                <a
                  href="#"
                  className="inline-block border border-white text-white px-6 py-2 hover:bg-[#e7e1e1] hover:text-black"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
