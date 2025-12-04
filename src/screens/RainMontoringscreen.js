import BenefitsSection from "@/Solutions/RailwayMontoring/Benefitssession";
import FeaturedSolutions from "@/Solutions/RailwayMontoring/Cardsession";
import CentralizedDashboard from "@/Solutions/RailwayMontoring/Centralizedsession";
import CRISIntegration from "@/Solutions/RailwayMontoring/Crisintegration";
import EscalatorMonitoring from "@/Solutions/RailwayMontoring/EscalatorMonitoring";
import FAQSection from "@/Solutions/RailwayMontoring/Faqsession";
import RailwayMontoring from "@/Solutions/RailwayMontoring/Hero";
import HiddenRailwayChallenges from "@/Solutions/RailwayMontoring/Hiddenrailwaychangelles";
import HowItWorks from "@/Solutions/RailwayMontoring/Howitsworks";
import RailwayDescription from "@/Solutions/RailwayMontoring/Intersessions";
import IoTDeviceShowcase from "@/Solutions/RailwayMontoring/Iotdevicesession";
import LiftMonitoring from "@/Solutions/RailwayMontoring/LiftMonitorning";
import PlatformLightControl from "@/Solutions/RailwayMontoring/Platform";
import PumpMonitoring from "@/Solutions/RailwayMontoring/Pumpmonitoring";
import SolutionBenefits from "@/Solutions/RailwayMontoring/Solutionssession";
import Streetlight from "@/Solutions/RailwayMontoring/Streetlight";
import SubstationMontoring from "@/Solutions/RailwayMontoring/Substationmonitoring";
import React from "react";

const RainMontoringscreen = () => {
    return (
        <div>
           <RailwayMontoring/>
           <RailwayDescription/>
           <HiddenRailwayChallenges/>
           <LiftMonitoring/>
           <EscalatorMonitoring/>
           <PumpMonitoring/>
           <PlatformLightControl/>
           <Streetlight/>
           <SubstationMontoring/>
           <BenefitsSection/>
           <HowItWorks/>
           <SolutionBenefits/>
           <IoTDeviceShowcase/>
           <CRISIntegration/>
           <CentralizedDashboard/>
           <FeaturedSolutions/>
           <FAQSection/>
           
        </div>
    );
};

export default RainMontoringscreen;
