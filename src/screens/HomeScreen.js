import ResponsiveBig from "@/homepage/BigResponsive";
import DiscussSection from "@/homepage/discussection";
import ElintCloudSection from "@/homepage/elintcloud";
import HeroSection from "@/homepage/herosection";
import InnovationsGrid from "@/homepage/innovationgrid";
import InnovativeLoadingBar from "@/homepage/innovative";
import LatestNews from "@/homepage/LastestNews";
import ResponsiveIot from "@/homepage/lotResponsive";
import Carousel from "@/homepage/news";
import WhyChooseUs from "@/homepage/whychooseus";
import WorldMap from "@/homepage/Map";
import PartnerSections from "@/homepage/partnersection1";

import React from "react";
// import HeroSection from "./homepage/herosection";
// import WorldMap from "./homepage/Map";
// import LastestNews from "./homepage/LastestNews";
// import Iot from "./homepage/Iot";
// import PartnerSections from "./homepage/partnersection1";
// import DiscussSection from "./homepage/discussection";
// import WhyChooseUs from "./homepage/whychooseus";
// import InnovationsGrid from "./homepage/innovationgrid";
// import ElintCloudSection from "./homepage/elintcloud";
// import Carousel from "./homepage/news";
// import Big from "./homepage/Big";
// import InnovativeLoadingBar from "./homepage/innovative";
// import ResponsiveIot from "./homepage/lotResponsive";
// import { ConceptToSolutionSection } from "./homepage/Bigmobilescreen";
// import ResponsiveBig from "./homepage/BigResponsive";

const HomeScreen = () => {
  return (
    <div>
      {/* <HeroSection />
      <InnovativeLoadingBar />
      <InnovationsGrid />
      <ResponsiveIot/>
      <ResponsiveBig/>
      <WhyChooseUs/>
      <WorldMap />
      <Carousel />
      <LastestNews />
      <PartnerSections />
      <DiscussSection />
      <ElintCloudSection /> */}
<HeroSection/>

<InnovativeLoadingBar/>
<InnovationsGrid/>
<ResponsiveIot/>
<ResponsiveBig/>
<WhyChooseUs/>
<WorldMap/>
<Carousel/>
<LatestNews/>
<PartnerSections/>
<DiscussSection/>
<ElintCloudSection/>


    </div>
  );
};

export default HomeScreen;
