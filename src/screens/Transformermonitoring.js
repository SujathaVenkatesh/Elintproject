import React from "react";
import TransHero from "@/Solutions/TransformerMonitoring.jsx/hero";
import IntroSection from "@/Solutions/TransformerMonitoring.jsx/intoSection";
import ChallengesSection from "@/Solutions/TransformerMonitoring.jsx/Challenges";
import PreventFailures from "@/Solutions/TransformerMonitoring.jsx/Prevent Failures";
import HowItWorks from "@/Solutions/TransformerMonitoring.jsx/HowItsWork";
import TransformerBenefits from "@/Solutions/TransformerMonitoring.jsx/Transformerbenifits";
import Dashboard from "@/Solutions/TransformerMonitoring.jsx/Dashboard";
import FeaturedSolutions from "@/Solutions/TransformerMonitoring.jsx/Featuresolutions";
import FAQquestion from "@/Solutions/TransformerMonitoring.jsx/FAQquestion";




const TransformerMonitoring = () => {
    return (
        <div>
            <TransHero />
            <IntroSection />
            <ChallengesSection />
            <PreventFailures />
            <HowItWorks />
            <TransformerBenefits />
            <Dashboard />
            <FeaturedSolutions />
            <FAQquestion />
            
               


        </div>
    );
};

export default TransformerMonitoring;
