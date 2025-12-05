
import FAQSection2 from "@/Solutions/IndoorAirMonitoring/FAQSessions";
import HospitalOxygenMonitoring from "@/Solutions/Oxygenlevel/Benefitssession";
import GRMSBenefits from "@/Solutions/Oxygenlevel/GRMbenefits";
import OxygenHero from "@/Solutions/Oxygenlevel/Hero";
import OxygenDescription from "@/Solutions/Oxygenlevel/Intersession";
import OxygenCommandChain from "@/Solutions/Oxygenlevel/Oxygen";
import OxygenUnmonitoredThreats from "@/Solutions/Oxygenlevel/Oxygenmonitoring";
import OxygenUsageSection from "@/Solutions/Oxygenlevel/Oxygenusagesessions";
import React from "react";

const Oxygenscreen = () => {
    return (
        <div>
            <OxygenHero/>
            <OxygenDescription/>
            <HospitalOxygenMonitoring />
            <OxygenUnmonitoredThreats/>
            
            <GRMSBenefits/>
            <OxygenCommandChain/>
            <OxygenUsageSection/>
            <FAQSection2/>
        </div>
    );
};

export default Oxygenscreen;
