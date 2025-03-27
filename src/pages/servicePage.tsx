import ServiceCard from "../components/serviceCard";
import { card } from "../lib/types";

export default function ServicesPage() {

   const service: card[] = [
      {
        id: 1,
        name:"YOGA CLASSES",
        image: "/images/girlImage.jpg",
        desc: "Our yoga classes focus on alignment, movement, and breathing techniques to help you enhance physical strength and mental clarity.",
      },
      {
        id: 2,
        name:"GROUP TRAINING",
        image: "/images/trainers.jpg",
        desc: "Join our high-energy group training sessions designed to push your limits and achieve maximum results in a motivating team environment.",
      },
      {
        id: 3,
        name:"PERSONAL TRAINING",
        image: "/images/crossfit.jpg",
        desc: "Our certified personal trainers create customized workout plans tailored to your specific goals, fitness level, and preferences.",
      },
      {
        id: 4,
        name:"BOXING",
        image: "/images/boxing.jpg",
        desc: "Learn proper boxing techniques while getting an intense full-body workout that improves strength, agility, and cardiovascular health.",
      },
    ];

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
            
            {
              service.map((service) =>(
                <ServiceCard service={service} key={service.id}/>
              ))
            }
            
          </div>
        </div>
      </section>
    </main>
  );
}
