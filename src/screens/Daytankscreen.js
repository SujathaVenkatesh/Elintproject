
import React from "react";
import Hero from "@/Solutions/DayTank/Hero";
import Intro from "@/Solutions/DayTank/Intro";
import IntelligenceSection from "@/Solutions/DayTank/Keyfeatures";
import AutomationFuelSection from "@/Solutions/DayTank/Automationsession";
import ManualTankChallenges from "@/Solutions/DayTank/Manuetankchallange";
import GainByAutomation from "@/Solutions/DayTank/GainSection";
import SmartStarterSection from "@/Solutions/DayTank/Smartsession";
import HazardZonesSection from "@/Solutions/DayTank/Hardersession";
import RadarSensorSection from "@/Solutions/DayTank/Randorsession";
import HeroSections from "@/Solutions/DayTank/Herosession";
import SensorSection from "@/Solutions/DayTank/Session7";
import StayConnectedSection from "@/Solutions/DayTank/Stayconnectedsesion";
import SensorSection1 from "@/Solutions/DayTank/Session8";
import SolutionCard from "@/Solutions/DayTank/Cardsession";
import AccordionItem from "@/Solutions/DayTank/Faq";
import BannerBelowSection from "@/Solutions/DayTank/Herosession";
import Poweroutage from "@/Solutions/DayTank/Poweroutage";

const DayTank = () => {
    return (
        <div>
            <Hero />
            <BannerBelowSection />
            <IntelligenceSection />
            <AutomationFuelSection />
            <ManualTankChallenges />
            <Poweroutage />
            <GainByAutomation />
            <SmartStarterSection />
            <HazardZonesSection />
            <RadarSensorSection />
            <SensorSection />
            <SensorSection1 />
            <StayConnectedSection />
            <SolutionCard />
            <AccordionItem />
        </div>
    );
};

export default DayTank;
