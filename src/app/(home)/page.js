import ExploreApartmentTypes from "./ExploreApartmentTypes";
import FeaturedProperties from "./FeaturedProperties";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowItWorks";
import PropertiesByCities from "./PropertiesByCities";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <div>
     <HeroSlider></HeroSlider>
     <HowItWorks></HowItWorks>
     <FeaturedProperties></FeaturedProperties>
     <ExploreApartmentTypes></ExploreApartmentTypes>
     <WhoWeAre></WhoWeAre>
     <PropertiesByCities></PropertiesByCities>
    </div>
  );
};

export default Home;
