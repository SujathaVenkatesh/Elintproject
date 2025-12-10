import FuelBenefits from "@/Solutions/Mobilefuel/benefits";
import FeaturedSolutions from "@/Solutions/Mobilefuel/CardSession";
import FAQSection from "@/Solutions/Mobilefuel/Faq";
import MobileDispenserHero from "@/Solutions/Mobilefuel/Hero";
import Hero2session from "@/Solutions/Mobilefuel/Hero2session";
import FuelChallenges from "@/Solutions/Mobilefuel/mainsession";
import StayConnectedSection from "@/Solutions/Mobilefuel/StayConnected";
import WorkflowSection from "@/Solutions/Mobilefuel/workflow";
import MobileFuelSolution from "@/Solutions/Mobilefuel/MobileFuelSolution";
import FuelHero from "@/Solutions/Mobilefuel/Fuel";
import React from "react";

const Mobilefuelscreen = () => {
    return (
        <div>
            <MobileDispenserHero />
            <Hero2session />
            <FuelChallenges />
            <MobileFuelSolution />
            <FuelHero />
            <FuelBenefits/>
            <WorkflowSection/>
            <StayConnectedSection />
            <FeaturedSolutions />
            <FAQSection />


        </div>
    );
};

export default Mobilefuelscreen;
