import ExploreApartmentTypes from "./ExploreApartmentTypes";
import FeaturedProperties from "./FeaturedProperties";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowItWorks";
import OurMainFocus from "./OurMainFocus";
import PropertiesByCities from "./PropertiesByCities";
import RealEstateInquiryForm from "./RealEstateInquiryForm";
import TrustedByCompany from "./TrustedByCompany";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <>
      <HeroSlider></HeroSlider>
      <HowItWorks></HowItWorks>
      <FeaturedProperties></FeaturedProperties>
      <ExploreApartmentTypes></ExploreApartmentTypes>
      <WhoWeAre></WhoWeAre>
      <PropertiesByCities></PropertiesByCities>
      <OurMainFocus></OurMainFocus>
      <RealEstateInquiryForm></RealEstateInquiryForm>
      <TrustedByCompany></TrustedByCompany>
    </>
  );
};

export default Home;
