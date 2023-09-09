import ExploreApartmentTypes from "./ExploreApartmentTypes";
import FeaturedProperties from "./FeaturedProperties";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowItWorks";
import OurMainFocus from "./OurMainFocus";
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
     <OurMainFocus></OurMainFocus>
    </div>
  );
};

export default Home;
