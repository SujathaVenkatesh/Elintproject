import IndustriesSection from "@/Solutions/Automatedweather/Industries";
import OperationalDashboard from "@/Solutions/Automatedweather/Stayconnected";
import BenefitsEarlyWarning from "@/Solutions/FlashFood/Benefits";
import HowItWorks from "@/Solutions/FlashFood/Bimage";
import FeaturedSolutions from "@/Solutions/FlashFood/CardSection";
import FloodPreparednessChallenges from "@/Solutions/FlashFood/Changless";
import DecisionSupportSystem from "@/Solutions/FlashFood/Decisionsupport";
import FAQSection from "@/Solutions/FlashFood/Faq";
import FloodKeyComponents from "@/Solutions/FlashFood/Floodkey";
import FloodMonitoringSolution from "@/Solutions/FlashFood/Floodmonitoring";
import EarlyWarningBanner from "@/Solutions/FlashFood/Hero";
import FloodAlertStrip from "@/Solutions/FlashFood/Interherosession";
import StayConnectedSection from "@/Solutions/FlashFood/Stayconnected";
import TelecomHero from "@/Solutions/TeleccomTank/Hero";
import React from "react";

const FlashFoodscreen = () => {
    return (
        <div>
            <EarlyWarningBanner />
            <FloodAlertStrip />
            <FloodPreparednessChallenges />
            {/* <FloodMonitoringSolution /> */}
            <FloodKeyComponents />
            <DecisionSupportSystem />
            <BenefitsEarlyWarning />
            <HowItWorks/>
            <OperationalDashboard />
            <FeaturedSolutions />
            <IndustriesSection />
            <FAQSection />
        </div>
    );
};

export default FlashFoodscreen;
