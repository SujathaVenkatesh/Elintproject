import AutomatedRainGaugeSolution from "@/Solutions/AutomatedRain/Automatedraincagesoultions";
import WmoComplianceSection from "@/Solutions/AutomatedRain/Complaincesession";
import SmartFeaturesARG from "@/Solutions/AutomatedRain/Smartsessionarg";
import ArgCommunicationTechnologies from "@/Solutions/Automatedweather/Argcommunication";
import FeaturedSolutions from "@/Solutions/Automatedweather/CardSection";
import FAQSection from "@/Solutions/Automatedweather/Faq";
import AutomatedHero from "@/Solutions/Automatedweather/Hero";
import HowItWorksSection from "@/Solutions/Automatedweather/Howitswork";
import HowItWorksSection1 from "@/Solutions/Automatedweather/Howitsworks1";
import IndustriesSection from "@/Solutions/Automatedweather/Industries";
import OperationalDashboard from "@/Solutions/Automatedweather/Operationaldashboard";
import StayConnectedSection from "@/Solutions/Automatedweather/Stayconnected";
import React from "react";

const Automatedscreen = () => {
    return (
        <div>
            <AutomatedHero />
            <SmartFeaturesARG />
            <WmoComplianceSection />
            <AutomatedRainGaugeSolution />
            <HowItWorksSection/>
            <HowItWorksSection1/>
            {/* <IndustriesSection /> */}
            <ArgCommunicationTechnologies/>
            <OperationalDashboard />

            <FeaturedSolutions />
            <FAQSection />
        </div>
    );
};

export default Automatedscreen;
