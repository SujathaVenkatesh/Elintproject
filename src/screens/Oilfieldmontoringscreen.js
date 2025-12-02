import ChallengesSection from "@/Solutions/OilfieldMontoring/ChallengesSection";
import ESPMonitoring from "@/Solutions/OilfieldMontoring/ESPMonitoring";
import OilfieldMontoring from "@/Solutions/OilfieldMontoring/Hero";
import Sec2oil from "@/Solutions/OilfieldMontoring/Sec2oil";
import React from "react";

const Oilfieldmontoringscreen = () => {
    return (
        <div>
            <OilfieldMontoring/>
            <Sec2oil/>
            <ChallengesSection/>
            <ESPMonitoring/>
        </div>
    );
};

export default Oilfieldmontoringscreen;
