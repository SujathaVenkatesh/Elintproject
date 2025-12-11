import React from "react";

// Data structure to simplify mobile mapping
const waterQualityFeatures = [
    {
        title: "pH Monitoring",
        desc: "Tracks water acidity/alkalinity continuously to avoid corrosive or harmful conditions.",
        icons: ["/wicon-1.png", "/wicon-2.png"],
    },
    {
        title: "TDS Monitoring",
        desc: "Monitors dissolved solids to prevent scaling, contamination, or filtration failure.",
        icons: ["/wicon-2.png", "/wicon-1.png"], // Reusing icons from the original structure
    },
    {
        title: "Chlorine Level Monitoring",
        desc: "Ensures microbial disinfection stays within safe limits—avoiding under- or over-chlorination.",
        icons: ["/wicon-3.png", "/wicon-4.png"],
    },
    {
        title: "Centralized Dashboards & Alerts",
        desc: "View quality data, receive AI-based alerts, and manage multiple sites from one unified dashboard.",
        icons: ["/wicon-4.png", "/wicon-3.png"], // Reusing icons
    },
];

// Helper Component for Mobile View
const MobileFeatureItem = ({ title, desc, icons }) => (
    <div className="flex flex-col items-center text-center px-4 py-6 border-b border-gray-200 last:border-b-0">
        <div className="flex justify-center gap-4 mb-4">
            {icons.map((src, index) => (
                <img key={index} src={src} className="w-[40px] h-[40px]" alt={`Icon ${index + 1}`} />
            ))}
        </div>
        <h3
            className="font-['Manrope'] text-[#333] leading-[1.4] text-[20px] font-semibold"
        >
            {title}
        </h3>
        <p
            className="text-[16px] text-[#666] leading-relaxed mt-2 max-w-sm"
        >
            {/* Removing <br /> tags for better mobile flow */}
            {desc.replace(/<br\s*\/?>/gi, ' ')}
        </p>
    </div>
);


export default function WaterQualityMonitoring() {
    // The original feature structure is used only for desktop
    const desktopRow1 = {
        left: {
            title: "pH Monitoring",
            desc: "Tracks water acidity/alkalinity continuously to\n<br />avoid corrosive or harmful conditions.",
            icon1: "/wicon-1.png",
        },
        right: {
            title: "TDS Monitoring",
            desc: "Monitors dissolved solids to prevent scaling,\n<br />contamination, or filtration failure.",
            icon1: "/wicon-2.png",
        }
    };

    const desktopRow2 = {
        left: {
            title: "Chlorine Level Monitoring",
            desc: "Ensures microbial disinfection stays within safe\n<br />limits—avoiding under- or over-chlorination.",
            icon1: "/wicon-3.png",
        },
        right: {
            title: "Centralized Dashboards & Alerts",
            desc: "View quality data, receive AI-based alerts, and manage\n<br />multiple sites from one unified dashboard.",
            icon1: "/wicon-4.png",
        }
    };

    return (
        <section className="w-full py-10 md:py-20 bg-white font-['Manrope']"> {/* Reduced mobile padding */}
            {/* TITLE */}
            <h2
                className="text-center  font-['Manrope'] text-[#333] leading-[1.4]
                    text-[19px]
                    sm:text-[20px]
                    md:text-[21px]
                    lg:text-[22px]
                    xl:text-[25px]
                    2xl:max-[1920px]:text-[33px]
                    min-[1920px]:!text-[46px] mb-8 md:mb-10 tracking-tight"
            >
                Water Quality Monitoring
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                
                {/* ---------------- MOBILE CONTENT (Visible below md) ---------------- */}
                <div className="md:hidden flex flex-col gap-0">
                    {waterQualityFeatures.map((feature, index) => (
                        <MobileFeatureItem 
                            key={index} 
                            title={feature.title} 
                            desc={feature.desc} 
                            icons={feature.icons} 
                        />
                    ))}
                </div>


                {/* ---------------- DESKTOP CONTENT (Hidden below md) ---------------- */}
                <div className="hidden md:flex md:flex-col md:gap-10">

                    {/* ---------------- ROW 1 ---------------- */}
                    <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-x-5">
                        {/* LEFT CONTENT */}
                        <div className="text-right">
                            <h3
                                className=" font-['Manrope'] text-[#333] leading-[1.4]
                                    text-[19px]
                                    sm:text-[20px]
                                    md:text-[21px]
                                    lg:text-[22px]
                                    xl:text-[25px]
                                    2xl:max-[1920px]:text-[30px]
                                    min-[1920px]:!text-[32px]"
                            >
                                {desktopRow1.left.title}
                            </h3>
                            <p
                                className=" text-[14px] text-[#666]
                                    sm:text-[15px]
                                    md:text-[16px]
                                    lg:text-[17px]
                                    xl:text-[18px]
                                    2xl:max-[1920px]:text-[20px]
                                    min-[1920px]:!text-[22px] leading-relaxed mt-2"
                            >
                                Tracks water acidity/alkalinity continuously to
                                <br />
                                avoid corrosive or harmful conditions.
                            </p>
                        </div>

                        {/* ICON 1 */}
                        <div className="flex justify-center">
                            <img src="/wicon-1.png" className="w-[50px] h-[50px]" />
                        </div>

                        {/* ICON 2 */}
                        <div className="flex justify-center">
                            <img src="/wicon-2.png" className="w-[50px] h-[50px]" />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="text-left">
                            <h3
                                className="font-['Manrope'] text-[#333] leading-[1.4]
                                    text-[19px]
                                    sm:text-[20px]
                                    md:text-[21px]
                                    lg:text-[22px]
                                    xl:text-[25px]
                                    2xl:max-[1920px]:text-[30px]
                                    min-[1920px]:!text-[32px]"
                            >
                                {desktopRow1.right.title}
                            </h3>
                            <p
                                className="text-[14px] text-[#666]
                                    sm:text-[15px]
                                    md:text-[16px]
                                    lg:text-[17px]
                                    xl:text-[18px]
                                    2xl:max-[1920px]:text-[20px]
                                    min-[1920px]:!text-[22px] leading-relaxed mt-2"
                            >
                                Monitors dissolved solids to prevent scaling,
                                <br />
                                contamination, or filtration failure.
                            </p>
                        </div>
                    </div>

                    {/* ---------------- ROW 2 ---------------- */}
                    <div className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-x-5">
                        {/* LEFT CONTENT */}
                        <div className="text-right">
                            <h3
                                className="font-['Manrope'] text-[#333] leading-[1.4]
                                    text-[19px]
                                    sm:text-[20px]
                                    md:text-[21px]
                                    lg:text-[22px]
                                    xl:text-[25px]
                                    2xl:max-[1920px]:text-[30px]
                                    min-[1920px]:!text-[32px]"
                            >
                                {desktopRow2.left.title}
                            </h3>
                            <p
                                className="text-[14px] text-[#666]
                                    sm:text-[15px]
                                    md:text-[16px]
                                    lg:text-[17px]
                                    xl:text-[18px]
                                    2xl:max-[1920px]:text-[20px]
                                    min-[1920px]:!text-[22px] leading-relaxed mt-2"
                            >
                                Ensures microbial disinfection stays within safe
                                <br />
                                limits—avoiding under- or over-chlorination.
                            </p>
                        </div>

                        {/* ICON 1 */}
                        <div className="flex justify-center">
                            <img src="/wicon-3.png" className="w-[50px] h-[50px]" />
                        </div>

                        {/* ICON 2 */}
                        <div className="flex justify-center">
                            <img src="/wicon-4.png" className="w-[50px] h-[50px]" />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="text-left">
                            <h3
                                className="font-['Manrope'] text-[#333] leading-[1.4]
                                    text-[19px]
                                    sm:text-[20px]
                                    md:text-[21px]
                                    lg:text-[22px]
                                    xl:text-[25px]
                                    2xl:max-[1920px]:text-[30px]
                                    min-[1920px]:!text-[32px]"
                            >
                                {desktopRow2.right.title}
                            </h3>
                            <p
                                className="text-[14px] text-[#666]
                                    sm:text-[15px]
                                    md:text-[16px]
                                    lg:text-[17px]
                                    xl:text-[18px]
                                    2xl:max-[1920px]:text-[20px]
                                    min-[1920px]:!text-[22px] leading-relaxed mt-2"
                            >
                                View quality data, receive AI-based alerts, and manage
                                <br />
                                multiple sites from one unified dashboard.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}