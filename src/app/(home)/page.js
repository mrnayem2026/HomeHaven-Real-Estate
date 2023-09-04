import ExploreApartmentTypes from "./ExploreApartmentTypes";
import FeaturedProperties from "./FeaturedProperties";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div>
     <HeroSlider></HeroSlider>
     <HowItWorks></HowItWorks>
     <FeaturedProperties></FeaturedProperties>
     <ExploreApartmentTypes></ExploreApartmentTypes>
    </div>
  );
};

export default Home;
