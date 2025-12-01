
import SolutionSection from "@/Solutions/FuelLevelMonitoring/6cardsession";
import FuelInfoSection from "@/Solutions/FuelLevelMonitoring/Bannerhero";
import FuelHero from "@/Solutions/FuelLevelMonitoring/Hero";
import NonNegotiableSection from "@/Solutions/FuelLevelMonitoring/Infosession";
import HowItWorksSection from "@/Solutions/FuelLevelMonitoring/namesessions";
import SmartFeaturesSection from "@/Solutions/FuelLevelMonitoring/Smartfuelsession";
import HiddenChallengesSection from "@/Solutions/FuelLevelMonitoring/sshape";
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
           
        </div>
    );
};

export default FuelTank;
