import React from "react";
import Hero from "@/Solutions/Mytank/Hero";
import MyIntro from "@/Solutions/Mytank/myintro";
import ChaosSection from "@/Solutions/Mytank/ChoasSession";
import ChaosSection1 from "@/Solutions/Mytank/Session4";
import SmartStarterSection from "@/Solutions/Mytank/Smartsessions";
import SmartStarterSlide from "@/Solutions/Mytank/Smartslider";
import UltralevelMaxSection from "@/Solutions/Mytank/Ultrasession";
import CloudConnectedIntelligenceSection from "@/Solutions/Mytank/CloudconnectedSession";
import BuildingTankHero from "@/Solutions/Mytank/Blindtalking";
import WaterQualityMonitoring from "@/Solutions/Mytank/Waterqualifying";
import WaterQualityMonitoringSection from "@/Solutions/Mytank/Waterqualifying";
import HowItWorksSection from "@/Solutions/Mytank/Howitworks";
import TankerLorryManagement from "@/Solutions/Mytank/Tankerloy";
import WaterUtilitySection from "@/Solutions/Mytank/Waterutilitysession";
import StayConnectedSection from "@/Solutions/Mytank/Stayconnected";
import FeaturedSolutions from "@/Solutions/Mytank/CardSection";
import FAQSection from "@/Solutions/Mytank/Faq";

const MyTank = () => {
    return (
        <div>
            <Hero />
            <MyIntro />
            <ChaosSection />
            <ChaosSection1 />
            <SmartStarterSection/>
            <SmartStarterSlide/>
            <UltralevelMaxSection/>
            <CloudConnectedIntelligenceSection/>
            <BuildingTankHero/>
            <WaterQualityMonitoringSection/>
            <HowItWorksSection/>
            <TankerLorryManagement/>
            <WaterUtilitySection/>
            <StayConnectedSection/>
            <FeaturedSolutions/>
            <FAQSection/>
        </div>
    );
};

export default MyTank;
