
import Ibmhero from "@/Solutions/IBCMontor/Hero";
import IBMInterhero from "@/Solutions/IBCMontor/InterHero";
import SmartTechSolutions from "@/Solutions/IBCMontor/SmartMonitor";
import CommonChallenges from "@/Solutions/IBCMontor/TaskMonitor";
import FAQSection2 from "@/Solutions/IndoorAirMonitoring/FAQSessions";
import React from "react";

const Ibmscreen = () => {
    return (
        <div>
            <Ibmhero/>
             <IBMInterhero/>
             <CommonChallenges/>
             <SmartTechSolutions/>
            <FAQSection2/>

        </div>
    );
};

export default Ibmscreen;
