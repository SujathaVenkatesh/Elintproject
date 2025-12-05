import ClientStats from "@/Solutions/DiselRainMonitoring/ClientStats";
import DiselRainMontoring from "@/Solutions/DiselRainMonitoring/Hero";
import KeyPerformance from "@/Solutions/DiselRainMonitoring/KeyPerformance";
import GeneratorControl from "@/Solutions/DiselRainMonitoring/GeneratorControl";
import KeyFeatures from "@/Solutions/DiselRainMonitoring/KeyFeatures";
import SmartProductIntelligence from "@/Solutions/DiselRainMonitoring/SmartProductIntelligence";
import OverTheAirManagement from "@/Solutions/DiselRainMonitoring/OverTheAirManagement"; 
import DeploymentHeader from "@/Solutions/DiselRainMonitoring/DeploymentHeader"; 
import PreventDowntime from "@/Solutions/DiselRainMonitoring/PreventDowntime"; 
import GeneratorInsights from "@/Solutions/DiselRainMonitoring/GeneratorInsights";
import DGMonitoringSolution from "@/Solutions/DiselRainMonitoring/DGMonitoringSolution";
import FuelFlowMonitoring from "@/Solutions/DiselRainMonitoring/FuelFlowMonitoring";
import DGMonitoringFlow from "@/Solutions/DiselRainMonitoring/DGMonitoringUnified";
import CPCBEmission from "@/Solutions/DiselRainMonitoring/CPCBEmission";
import SmartEnablement from "@/Solutions/DiselRainMonitoring/SmartEnablement";
import SmartMonitoring from "@/Solutions/DiselRainMonitoring/SmartMonitoring";
import RentalDGs from "@/Solutions/DiselRainMonitoring/RentalDGs";
import GlobalControllers from "@/Solutions/DiselRainMonitoring/GlobalControllers";
import SmartDashboard from "@/Solutions/DiselRainMonitoring/SmartDashboard";
import FeaturedSolutions from "@/Solutions/DiselRainMonitoring/FeaturedSolutions";
import FeaturedProducts from "@/Solutions/DiselRainMonitoring/FeaturedProducts";
import IndustriesSection from "@/Solutions/DiselRainMonitoring/IndustriesSection";
import FAQSection from "@/Solutions/DiselRainMonitoring/FAQSection";

import React from "react";

const DiselMonitoringscreen = () => {
    return (
        <div>
            <DiselRainMontoring />
            <ClientStats />
            <KeyPerformance />
            <GeneratorControl />
            <KeyFeatures />
            <SmartProductIntelligence />
            <OverTheAirManagement />
            <DeploymentHeader />
            <PreventDowntime />
            <GeneratorInsights />
            <DGMonitoringSolution />
            <FuelFlowMonitoring />
            <DGMonitoringFlow />
            <CPCBEmission />
            <SmartEnablement />
            <SmartMonitoring />
            <RentalDGs />
            <GlobalControllers />
            <SmartDashboard />
            <FeaturedSolutions />
            <FeaturedProducts />
            <IndustriesSection />
            <FAQSection />
        </div>
    );
};

export default DiselMonitoringscreen;
