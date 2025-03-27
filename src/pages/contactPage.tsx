import Form from "../components/Form";

const ContactPage = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex gap-2 mt-8  font-bold italic mb-16">
          <span className="text-white text-3xl md:text-5xl">CONTACT</span>{" "}
          <span className="text-yellow-500 text-3xl md:text-5xl">ZEUS</span>
        </div>

        {/* Map Image */}
        <div className="mb-8">
          <img
            src="/images/map.jpeg"
            alt="Location map"
            className="w-full h-auto"
          />
        </div>

        {/* Location Cards */}
        <div className="flex flex-wrap -mx-4">
          {/* Zeus Location */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="border border-gray-800 p-6">
              <h3 className="text-white text-xl font-bold mb-3">Zeus</h3>
              <p className="text-gray-400">
                1234 Ash Dr. San Jose, South Dakota 56789
              </p>
              <p className="text-gray-400">456-123-5555</p>
            </div>
          </div>

          {/* Cronus Location */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="border border-gray-800 p-6">
              <h3 className="text-white text-xl font-bold mb-3">Cronus</h3>
              <p className="text-gray-400">
                4545 Washington Ave. Manchester, Kentucky 12301
              </p>
              <p className="text-gray-400">123-456-5555</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
          <div className="max-w-2xl w-full flex flex-col items-center">
            <div className="text-center mb-8">
              <p className="text-yellow-500 text-sm font-medium tracking-wider mb-2">
                — SUCCESS STORIES —
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WHAT OUR MEMBERS SAY
              </h2>
              <p className="text-gray-400 max-w-lg">
                Aliquam aliquet pretium sagittis est. Eleifend netus diam sit
                malesuada. Arcu, gravida sit arcu.
              </p>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
