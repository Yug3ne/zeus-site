export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-6xl p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic  font-bold text-white leading-tight mb-4">
            HELPING YOU REACH
            <br />
            HIGHER AND{" "}
            <span className="text-yellow-500 italic">ACHIEVE MORE</span>
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Service 1 */}
            <div className="w-full md:w-1/2 px-4 mb-12">
              <img
                src="/images/girlImage.jpg"
                alt="Yoga class"
                className="w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">YOGA CLASSES</h3>
              <p className="text-gray-400 mb-4">
                Our yoga classes focus on alignment, movement, and breathing
                techniques to help you enhance physical strength and mental
                clarity.
              </p>
              <a href="#" className="text-yellow-500 font-bold">
                LEARN MORE →
              </a>
            </div>

            {/* Service 2 */}
            <div className="w-full md:w-1/2 px-4 mb-12">
              <img
                src="/images/trainers.jpg"
                alt="Group fitness class"
                className="w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">GROUP TRAINING</h3>
              <p className="text-gray-400 mb-4">
                Join our high-energy group training sessions designed to push
                your limits and achieve maximum results in a motivating team
                environment.
              </p>
              <a href="#" className="text-yellow-500 font-bold">
                LEARN MORE →
              </a>
            </div>

            {/* Service 3 */}
            <div className="w-full md:w-1/2 px-4 mb-12">
              <img
                src="/images/crossfit.jpg"
                alt="Personal training session"
                className="w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">PERSONAL TRAINING</h3>
              <p className="text-gray-400 mb-4">
                Our certified personal trainers create customized workout plans
                tailored to your specific goals, fitness level, and preferences.
              </p>
              <a href="#" className="text-yellow-500 font-bold">
                LEARN MORE →
              </a>
            </div>

            {/* Service 4 */}
            <div className="w-full md:w-1/2 px-4 mb-12">
              <img
                src="/images/boxing.jpg"
                alt="Boxing class"
                className="w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">BOXING</h3>
              <p className="text-gray-400 mb-4">
                Learn proper boxing techniques while getting an intense
                full-body workout that improves strength, agility, and
                cardiovascular health.
              </p>
              <a href="#" className="text-yellow-500 font-bold">
                LEARN MORE →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
