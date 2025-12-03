import OilfieldMontoring from "@/Solutions/OilfieldMontoring/Hero";
import AirCoolerMonitoring from "@/Solutions/SmartBlast/Aircoolermontoring";
import BlastPotMonitoring from "@/Solutions/SmartBlast/Blastpostmontoring";
import CloudAnalytics from "@/Solutions/SmartBlast/CloudFeature";
import CompressorMonitoringSection from "@/Solutions/SmartBlast/ComporessorMonitoring";
import FAQSection from "@/Solutions/SmartBlast/Faq";
import FeaturedSolutions from "@/Solutions/SmartBlast/FeaturesSoltuions";
import HeroSection from "@/Solutions/SmartBlast/Hero";
import HiddenCostSection from "@/Solutions/SmartBlast/Hiddensession";
import InfoSection from "@/Solutions/SmartBlast/Infosession";
import KeyBenefits from "@/Solutions/SmartBlast/Keybenefits";
import MonitoringSection from "@/Solutions/SmartBlast/Monitoring";
import OperationalDashboard from "@/Solutions/SmartBlast/Optionalsession";
import TailEndPressureFlow from "@/Solutions/SmartBlast/Trainendplessure";
import React from "react";

const Smartblastscreen = () => {
    return (
        <div>
            <HeroSection />
            <InfoSection />
            <HiddenCostSection />
            <KeyBenefits />
            <MonitoringSection />
            <CompressorMonitoringSection />
            {/* <AirCoolerMonitoring /> */}
            <BlastPotMonitoring />
            <TailEndPressureFlow />
            <CloudAnalytics />
            <OperationalDashboard/>
            <FeaturedSolutions/>
             <FAQSection/>

        </div>
    );
};

export default Smartblastscreen;
