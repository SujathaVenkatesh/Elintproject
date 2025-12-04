
import FeaturedSolutions from "@/Solutions/IndoorAirMonitoring/Cardsessions";
import CentralizedDashboard from "@/Solutions/IndoorAirMonitoring/Centralizedsession";
import CertifiedIAQSensors from "@/Solutions/IndoorAirMonitoring/CertifiedAqsensor";
import ClinicalEnvironments from "@/Solutions/IndoorAirMonitoring/Environment";
import FAQSection2 from "@/Solutions/IndoorAirMonitoring/FAQSessions";
import IndoorAirHero from "@/Solutions/IndoorAirMonitoring/Hero";
import HiddenMedicalRisks from "@/Solutions/IndoorAirMonitoring/HiddenairMonitoring";
import IAQHowItWorks from "@/Solutions/IndoorAirMonitoring/Howitsworks";
import IndoorDescription from "@/Solutions/IndoorAirMonitoring/Intersessions";
import KeyBenefits from "@/Solutions/IndoorAirMonitoring/Keybenefits";
import SmartIAQMonitoring from "@/Solutions/IndoorAirMonitoring/SmartIotMonitoring";
import Hero from "@/Solutions/Mytank/Hero";
import React from "react";

const Indoorairmonitoringscreen = () => {
    return (
        <div>
            <IndoorAirHero />
            <IndoorDescription/>
            <SmartIAQMonitoring />
            <HiddenMedicalRisks />
            <KeyBenefits />
            <ClinicalEnvironments/>
            <CertifiedIAQSensors/>
            <IAQHowItWorks/>
            <CentralizedDashboard/>
            <FeaturedSolutions/>
            <FAQSection2/>

        </div>
    );
};

export default Indoorairmonitoringscreen;
