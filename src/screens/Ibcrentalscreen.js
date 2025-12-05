import IntroSection from "@/Solutions/IBCRental/Ibcinterhero";
import Ibcrentalhero from "@/Solutions/IBCRental/Ibcrentalhero";
import IbcrentalChallenges from "@/Solutions/IBCRental/Ibcsmartchanlleges";
import KeyFeaturesLifeScience from "@/Solutions/IBCRental/Ibcsmarttech";
import UniversalFit from "@/Solutions/IBCRental/Ibcuniversal";
import IbcrentalParameters from "@/Solutions/IBCRental/Parameters";
import React from "react";


const Ibcrental = () => {
    return (
        <div>
            <Ibcrentalhero />
            <IntroSection />
            <IbcrentalChallenges />
            <KeyFeaturesLifeScience />
            <UniversalFit />
            <IbcrentalParameters />

        </div>
    );
};

export default Ibcrental;
