
import FeaturedSolutionsed from "@/Solutions/IBCMontor/Cardsessions";
import FAQSection4 from "@/Solutions/IBCMontor/FAQQsessions";
import FAQQuestions from "@/Solutions/IBCMontor/FAQQsessions";
import FeaturedSolutions from "@/Solutions/IBCMontor/FeaturedSolutions";
import Ibmhero from "@/Solutions/IBCMontor/Hero";
import HowItWorksSection from "@/Solutions/IBCMontor/Howitsworksession";
import UniversalFit from "@/Solutions/IBCMontor/Ibcworks";
import ElintAutomateSection from "@/Solutions/IBCMontor/Ibmautomation";
import IBMInterhero from "@/Solutions/IBCMontor/InterHero";
import IndustriesImageGroup from "@/Solutions/IBCMontor/Singleimage";
import Dashboard from "@/Solutions/IBCMontor/Smartdevice";
import SmartTechSolutions from "@/Solutions/IBCMontor/SmartMonitor";
import CommonChallenges from "@/Solutions/IBCMontor/TaskMonitor";
import WhatYouGain from "@/Solutions/IBCMontor/Whatgain";
import { HowItWorks } from "@/Solutions/IBCMontor/Whatsugain";
import React from "react";

const Ibmscreen = () => {
    return (
        <div>
            <Ibmhero />
            <IBMInterhero />
            <CommonChallenges />
            <SmartTechSolutions />
            <WhatYouGain/>
            <UniversalFit/>
            <HowItWorks/>
            <ElintAutomateSection/>
            <FeaturedSolutionsed/>
            <Dashboard/>
            <FeaturedSolutions/>
            <IndustriesImageGroup/>
            <FAQSection4 />

        </div>
    );
};

export default Ibmscreen;
