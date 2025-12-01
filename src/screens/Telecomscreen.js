import BatteryChallengesSection from "@/Solutions/TeleccomTank/Batterchallegesession";
import BenefitsSection from "@/Solutions/TeleccomTank/Benefitssestion";
import FeaturedSolutions from "@/Solutions/TeleccomTank/CardSection";
import FAQSection from "@/Solutions/TeleccomTank/Faq";
import TelecomHero from "@/Solutions/TeleccomTank/Hero";
import BatteryIntelligenceSection from "@/Solutions/TeleccomTank/herosession";
import ParameterMonitoringSection from "@/Solutions/TeleccomTank/Parametersession";
import StayConnectedSection from "@/Solutions/TeleccomTank/Stayconnectedsession";
import React from "react";

const Telecomscreen = () => {
    return (
        <div>
            <TelecomHero />
            <BatteryIntelligenceSection />
            <BatteryChallengesSection />
            <ParameterMonitoringSection/>
            {/* <BenefitsSection/> */}
            <StayConnectedSection/>
            <FeaturedSolutions/>
            <FAQSection/>
        </div>
    );
};

export default Telecomscreen;
