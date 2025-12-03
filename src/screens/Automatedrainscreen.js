import ArgCommunicationTechnologies from "@/Solutions/AutomatedRain/Argcommuncations";
import AutomatedRainGaugeSolution from "@/Solutions/AutomatedRain/Automatedraincagesoultions";
import OperationalDashboard from "@/Solutions/AutomatedRain/automeredraindesktop";
import FeaturedSolutions from "@/Solutions/AutomatedRain/CardSection";
import WmoComplianceSection from "@/Solutions/AutomatedRain/Complaincesession";
import FAQSection from "@/Solutions/AutomatedRain/Faq";
import AutomatedrainHero from "@/Solutions/AutomatedRain/Hero";
import HowItWorksSection from "@/Solutions/AutomatedRain/Howitsrain";
import IndustriesSection from "@/Solutions/AutomatedRain/Industries";
import IndustryChallenges from "@/Solutions/AutomatedRain/Industry";
import KeyComponentsSection from "@/Solutions/AutomatedRain/Keycomponentsession";
import SmartGaugeStrip from "@/Solutions/AutomatedRain/Smartcage";
import SmartFeaturesARG from "@/Solutions/AutomatedRain/Smartsessionarg";
import StayConnectedSection from "@/Solutions/AutomatedRain/Stayconnected";
import React from "react";

const Automatedrainscreen = () => {
    return (
        <div>
            <AutomatedrainHero />
            <SmartGaugeStrip />
            <SmartFeaturesARG />
            <WmoComplianceSection />
            <IndustryChallenges />
            <AutomatedRainGaugeSolution />
            {/* <KeyComponentsSection /> */}
            <HowItWorksSection />
            <ArgCommunicationTechnologies />
            <IndustriesSection/>
            <OperationalDashboard/>
            <FeaturedSolutions />
            <FAQSection />
        </div>
    );
};

export default Automatedrainscreen;
