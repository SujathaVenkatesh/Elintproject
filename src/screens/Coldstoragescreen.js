import ColdChainChallenges from "@/Solutions/Coldstorage/Coldchainsession";
import Coldhero from "@/Solutions/Coldstorage/Coldhero";
import ColdStorageSolutions from "@/Solutions/Coldstorage/ ColdStorageMonitoring";
import AssetManagementSection from "@/Solutions/Coldstorage/AssetManagement";
import React from "react";
import HVACMonitoring from "@/Solutions/Coldstorage/HVACMonitoring";
import HowItWorks from "@/Solutions/Coldstorage/HowItWork";
import ColdChainMonitor from "@/Solutions/Coldstorage/ColdChainMonitor";



const Coldstoragescreen = () => {
    return (
        <div>
            <Coldhero/>
            <ColdChainChallenges/>
            <ColdStorageSolutions />
            <AssetManagementSection />
            <HVACMonitoring />
            <HowItWorks />
            <ColdChainMonitor />
        </div>
    );
};

export default Coldstoragescreen;
