import FuelBenefits from "@/Solutions/UrbanSolutions/Benefitssession";
import FeaturedSolutions from "@/Solutions/UrbanSolutions/Cardsessions";
import WmoComplianceSection from "@/Solutions/UrbanSolutions/Compliancesessions";
import FAQSection from "@/Solutions/UrbanSolutions/Faq";
import WeatheronMaxSpecs from "@/Solutions/UrbanSolutions/featured";
import EarlyWarningBanner from "@/Solutions/UrbanSolutions/Hero";
import UrbanFloodHero from "@/Solutions/UrbanSolutions/imagesessions";
import InfoSection from "@/Solutions/UrbanSolutions/Interhero";
import UrbanFloodChallenges from "@/Solutions/UrbanSolutions/Urbanflood";
import UrbanFloodWarning from "@/Solutions/UrbanSolutions/Urbanflooring";
import React from "react";

const Urbanscreen = () => {
    return (
        <div>
            <EarlyWarningBanner />
            <InfoSection />
            <WmoComplianceSection />
            <UrbanFloodWarning />
            <FuelBenefits />
            {/* <UrbanFloodChallenges /> */}
            <UrbanFloodHero />
            <WeatheronMaxSpecs/>
            <FeaturedSolutions />
            <FAQSection />

        </div>
    );
};

export default Urbanscreen;
