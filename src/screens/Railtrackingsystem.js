import WagonHero from "@/Solutions/Railtrackingsystem/Hero";
import WagonAbout from "@/Solutions/Railtrackingsystem/About";
import WagonFeatures from "@/Solutions/Railtrackingsystem/KeyFeature";
import WagonWithoutTracking from "@/Solutions/Railtrackingsystem/Tracking";
import WagonTrackingSection from "@/Solutions/Railtrackingsystem/Trackingsolution";
import WagonTrackingFeatures from "@/Solutions/Railtrackingsystem/TrackingFeatures";
import WagonMonitor from "@/Solutions/Railtrackingsystem/Monioring";
import HowItWorks from "@/Solutions/Railtrackingsystem/HowItWorks";

import React from "react";
import Dashboard from "@/Solutions/Railtrackingsystem/Dashboard";
import FeaturedSolutions from "@/Solutions/Railtrackingsystem/FeatureSolutions";
import FAQSection from "@/Solutions/Railtrackingsystem/FAQquestions";







const RailtrackingSystem = () => {
    return (
        <div>
            <WagonHero />
            <WagonAbout />
            <WagonFeatures />
            <WagonWithoutTracking />
            <WagonTrackingSection />
            <WagonTrackingFeatures />
            <WagonMonitor />
            <HowItWorks />
            <Dashboard />
            <FeaturedSolutions />
            <FAQSection />


        </div>
    );
};

export default RailtrackingSystem;