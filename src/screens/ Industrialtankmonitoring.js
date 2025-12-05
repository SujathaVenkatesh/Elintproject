
import React from "react";
import IndustrialHero from "@/Solutions/ IndustrialTankMonitoring/Hero";
import Challenges from "@/Solutions/ IndustrialTankMonitoring/Challenges";
import HowItWorks from "@/Solutions/ IndustrialTankMonitoring/How It Works";
import IndustrialFeatures from "@/Solutions/ IndustrialTankMonitoring/Industrial Features";
import StayConnectedSection from "@/Solutions/ IndustrialTankMonitoring/stayConnectedSection";
import FeaturedSolutions from "@/Solutions/ IndustrialTankMonitoring/FeaturedSolutions";
import IndustriesSection from "@/Solutions/ IndustrialTankMonitoring/industrialsection";
import TankMonitoringDashboard from "@/Solutions/ IndustrialTankMonitoring/Tank Monitoring Dashboard";
import IntroSection from "@/Solutions/ IndustrialTankMonitoring/IntroSection";




const IndustrialMonitoring = () => {
    return (
        <div>
                <IndustrialHero />
                <IntroSection />
                <Challenges />
                <IndustrialFeatures />
                <HowItWorks />
                <StayConnectedSection />
                <TankMonitoringDashboard />
                <FeaturedSolutions />
                <IndustriesSection />


        </div>
    );
};

export default IndustrialMonitoring;
