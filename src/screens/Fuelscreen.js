
import SolutionSection from "@/Solutions/FuelLevelMonitoring/6cardsession";
import FuelInfoSection from "@/Solutions/FuelLevelMonitoring/Bannerhero";
import FeaturedSolutions from "@/Solutions/FuelLevelMonitoring/CardSection";
import FAQSection from "@/Solutions/FuelLevelMonitoring/Faq";
import FuelHero from "@/Solutions/FuelLevelMonitoring/Hero";
import NonNegotiableSection from "@/Solutions/FuelLevelMonitoring/Infosession";
import HowItWorksSection from "@/Solutions/FuelLevelMonitoring/namesessions";
import SmartFeaturesSection from "@/Solutions/FuelLevelMonitoring/Smartfuelsession";
import HiddenChallengesSection from "@/Solutions/FuelLevelMonitoring/sshape";
import StayConnectedSection from "@/Solutions/FuelLevelMonitoring/Stayconnected";
import React from "react";

const FuelTank = () => {
    return (
        <div>
           <FuelHero/>
           <FuelInfoSection/>
           <NonNegotiableSection/>
           <SolutionSection/>
           {/* <HiddenChallengesSection/> */}
           <HowItWorksSection/>
           <SmartFeaturesSection/>

           <StayConnectedSection/>
           <FeaturedSolutions/>
           <FAQSection/>
        </div>
    );
};

export default FuelTank;
