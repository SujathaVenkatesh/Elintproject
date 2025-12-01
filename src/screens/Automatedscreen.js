import FeaturedSolutions from "@/Solutions/Automatedweather/CardSection";
import FAQSection from "@/Solutions/Automatedweather/Faq";
import AutomatedHero from "@/Solutions/Automatedweather/Hero";
import StayConnectedSection from "@/Solutions/Automatedweather/Stayconnected";
import React from "react";

const Automatedscreen = () => {
    return (
        <div>
              <AutomatedHero/>
              <StayConnectedSection/>
              <FeaturedSolutions/>
              <FAQSection/>
        </div>
    );
};

export default Automatedscreen;
