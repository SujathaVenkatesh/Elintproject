import ChallengesSection from "@/Solutions/OilfieldMontoring/ChallengesSection";
import CommunicationSection from "@/Solutions/OilfieldMontoring/CommunicationSection";
import ESPMonitoring from "@/Solutions/OilfieldMontoring/ESPMonitoring";
import GainSection from "@/Solutions/OilfieldMontoring/GainSection";
import GasLift from "@/Solutions/OilfieldMontoring/GasLift";
import OilfieldMontoring from "@/Solutions/OilfieldMontoring/Hero";
import ParametersMonitored from "@/Solutions/OilfieldMontoring/ParametersMonitored";
import Sec2oil from "@/Solutions/OilfieldMontoring/Sec2oil";
import SurfaceLevel from "@/Solutions/OilfieldMontoring/SurfaceLevel";
import Transform2Section from "@/Solutions/OilfieldMontoring/Transform2Section";
import TransformSection from "@/Solutions/OilfieldMontoring/TransformSection";
import WorksSection from "@/Solutions/OilfieldMontoring/WorksSection";
import MultiProtocol from "@/Solutions/OilfieldMontoring/MultiProtocol";
import VoyagerMax from "@/Solutions/OilfieldMontoring/VoyagerMax";
import DigitalSection from "@/Solutions/OilfieldMontoring/DigitalSection";
import React from "react";
import SmartDashboard from "@/Solutions/OilfieldMontoring/SmartDashboard";
import FeaturedSolutions from "@/Solutions/OilfieldMontoring/FeaturedSolutions";
import FaqSection from "@/Solutions/OilfieldMontoring/FaqSection";

const Oilfieldmontoringscreen = () => {
    return (
        <div>
            <OilfieldMontoring/>
            <Sec2oil/>
            <ChallengesSection/>
            <ESPMonitoring/>
            <WorksSection/>
            <ParametersMonitored/>
            <GainSection/>
            <CommunicationSection/>
            <SurfaceLevel/>
            <TransformSection/>
            <Transform2Section/>
            <GasLift/>
            <MultiProtocol/>
            <VoyagerMax/>
            <DigitalSection/>
            <SmartDashboard/>
            <FeaturedSolutions/>
            <FaqSection/>
        </div>
    );
};

export default Oilfieldmontoringscreen;
