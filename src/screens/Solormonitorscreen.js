
import FeaturedSolutions from "@/Solutions/IndoorAirMonitoring/Cardsessions";
import FAQSection from "@/Solutions/RailwayMontoring/Faqsession";
import BenefitsSection from "@/Solutions/Solarpump/Benefits";
import Solarhero from "@/Solutions/Solarpump/Hero";
import BenefitsSection1 from "@/Solutions/Solarpump/Herobenefits";
import HowItWorks from "@/Solutions/Solarpump/Howitswork";
import SolarPumpMonitoring from "@/Solutions/Solarpump/SolarpumpMonitoring";
import SolarPumpGuidelines from "@/Solutions/Solarpump/solorpumpmontor";

import React from "react";

const SolarPumpMonitor = () => {
    return (
        <div>
            <Solarhero/>
            <BenefitsSection1/>
            <SolarPumpGuidelines/>
            <SolarPumpMonitoring/>
            <HowItWorks/>
            <BenefitsSection/>
            <FeaturedSolutions/>
            <FAQSection/>
            
           

        </div>
    );
};

export default SolarPumpMonitor;
