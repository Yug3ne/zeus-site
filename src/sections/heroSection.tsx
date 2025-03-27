import { Link } from "react-router";
import HeroCard from "../components/heroCard";

const HeroSection = () => {
  return (
    <section className=" flex flex-col gap-32 main">
      <section className="z-10 flex w-full flex-col justify-center  px-4 md:px-12 lg:px-24">
        
        <div className=" flex flex-col gap-2 mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl italic  font-bold text-white leading-tight">
            HELPING YOU REACH
            <br />
            HIGHER AND{" "}
            <span className="text-yellow-500 italic">
              ACHIEVE
              <br />
              MORE
            </span>
          </h1>

            <p className="text-white  text-lg md:text-xl max-w-xl">
              Get real results at Zeus with a plan tailored to your needs. Your
              fitness and health are important to us.
            </p>
      

          <div className="mt-8 md:mt-12">
            <Link
              to="/get-started"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-medium px-8 py-3 transition-colors"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row w-full justify-between border-b-[0.1px] border-gray-400">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </section>
  );
};

export default HeroSection;
