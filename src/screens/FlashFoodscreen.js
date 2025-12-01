import FeaturedSolutions from "@/Solutions/FlashFood/CardSection";
import FAQSection from "@/Solutions/FlashFood/Faq";
import Flashhero from "@/Solutions/FlashFood/Hero";
import StayConnectedSection from "@/Solutions/FlashFood/Stayconnected";
import TelecomHero from "@/Solutions/TeleccomTank/Hero";
import React from "react";

const FlashFoodscreen = () => {
    return (
        <div>
              <Flashhero/>
              <StayConnectedSection/>
              <FeaturedSolutions/>
              <FAQSection/>
        </div>
    );
};

export default FlashFoodscreen;
