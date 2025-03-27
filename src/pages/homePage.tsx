import AboutSection from "../sections/aboutSection";
import BlogSection from "../sections/blogSection";
import FaqSection from "../sections/faqSection";
import GroupSection from "../sections/groupSection";
import HeroSection from "../sections/heroSection";
import LocationSection from "../sections/locationSection";
import ServiceSection from "../sections/serviceSection";
import ShopSection from "../sections/shopSection";

const HomePage = () => {
  return (
    <section className="flex flex-col main">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <GroupSection />
      <ShopSection />
      <LocationSection />
      <FaqSection />
      <BlogSection />
    </section>
  );
};

export default HomePage;
