import FeaturedSolutions from "@/Solutions/AutomatedRain/CardSection";
import FAQSection from "@/Solutions/AutomatedRain/Faq";
import AutomatedrainHero from "@/Solutions/AutomatedRain/Hero";
import StayConnectedSection from "@/Solutions/AutomatedRain/Stayconnected";
import React from "react";

const Automatedrainscreen = () => {
    return (
        <div>
              <AutomatedrainHero/>
              <StayConnectedSection/>
              <FeaturedSolutions/>
              <FAQSection/>
        </div>
    );
};

export default Automatedrainscreen;
