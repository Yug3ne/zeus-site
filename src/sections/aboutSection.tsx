import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section className="bg-black py-16 md:py-24 border-b-[0.1px] border-gray-400 ">

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center  mx-auto px-4 md:px-8 lg:px-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-yellow-500 mr-3"></div>
              <span className="text-yellow-500 font-medium tracking-wide">
                WELCOME
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight italic">
              DEDICATED TO IGNITING YOUR PASSION FOR HEALTH
            </h2>

            <p className="text-gray-400 md:pr-8">
              Ut magna amet, a malesuada. Nibh in interdum at sem senectus
              pulvinar aliquam orci. Adipiscing malesuada urna sed urna in nunc
              volutpat ipsum. Dictumst nunc et velit sed curabitur lobortis
              viverra sapien.
            </p>

            <div className="pt-4">
              <Link
                to="#"
                className="inline-block border border-white/80 text-white hover:bg-white hover:text-black font-medium px-8 py-3 transition-colors"
              >
                ABOUT US
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className=" md:h-[450px] lg:h-[500px]">
            <img
              src="/images/stretch.jpeg"
              alt="Fitness training session"
              className="object-cover "
            />
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
