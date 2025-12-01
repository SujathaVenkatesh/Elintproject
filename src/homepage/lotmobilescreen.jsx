'use client';

import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// --- Data Structure (Moved outside the component for clarity) ---

const tabs = [
    {
        id: 'telecom',
        label: 'Telecom',
        activeIcon: '/white1.png',
        inactiveIcon: '/black1.png',
        solutions: [
            {
                title: 'Telecom Monitoring Solution',
                description: 'Real-time monitoring to maximize uptime',
                backgroundImage: '/iot/tele1.png',
                features: [
                    'Ensure 100% tower uptime with uninterrupted power',
                    'Reduce diesel costs by up to 30% with IoT fuel monitoring',
                    'Gain real-time visibility anytime, anywhere',
                    'Secure towers with 24×7 smart surveillance alerts',
                    'Maximize uptime with proactive battery management'
                ]
            },
            {
                title: 'Fuel Monitoring Solution',
                description: 'Prevent loss with precise consumption tracking',
                backgroundImage: '/iot/tele2.png',
                features: [
                    'Eliminate fuel theft and unauthorized usage',
                    'Cut costs with IoT fuel management',
                    'Gain real-time visibility across tanks and sites',
                    'Improve planning with accurate consumption insights',
                    'Optimize fuel deliveries and reduce wastage'
                ]
            },
            // ... other telecom solutions
        ]
    },
    {
        id: 'diesel',
        label: 'Diesel Generator',
        activeIcon: '/white2.png',
        inactiveIcon: '/black2.png',
        solutions: [
            {
                title: 'Diesel Generator Monitoring',
                description: 'Boost efficiency with remote generator monitoring solution',
                backgroundImage: '/iot/die1.png',
                features: [
                    'Prevent downtime with generator monitoring',
                    'Detect anomalies early to extend generator lifespan',
                    'Improve efficiency with predictive maintenance',
                    'Manage DG remotely with start/stop control',
                    'Make decisions with centralized dashboards'
                ]
            },
            {
                title: 'Day Tank Automation',
                description: 'Automated, real-time fuel management for uninterrupted operations.',
                backgroundImage: '/iot/die2.png',
                features: [
                    'Avoid outages through real-time fuel monitoring',
                    'Automate valves and starters for tank operations',
                    'Reduce manual checks via scheduled fuel transfers',
                    'Detect issues early using predictive alerts',
                    'Scalable diesel tank automation'
                ]
            },
            // ... other diesel solutions
        ]
    },
    {
        id: 'meteorology',
        label: 'Meteorology',
        activeIcon: '/white3.png',
        inactiveIcon: '/black3.png',
        solutions: [
            {
                title: 'Automated Rain Gauge',
                description: 'Ensure accuracy with automated rain monitoring.',
                backgroundImage: '/iot/meto1.png',
                features: [
                    'Ensure accuracy with automated rain monitoring',
                    'Prevent flooding using real-time rainfall data',
                    'Plan operations with predictive weather insights',
                    'Reduce manual checks via remote data access',
                    'Optimize resource planning with centralized dashboards'
                ]
            },
            // ... other meteorology solutions
        ]
    },
    {
        id: 'water',
        label: 'Water',
        activeIcon: '/white4.png',
        inactiveIcon: '/black4.png',
        solutions: [
            {
                title: 'Water Process Automation',
                description: 'Smart automation for efficient and reliable water supply.',
                backgroundImage: '/iot/water1.png',
                features: [
                    'Maintain flow through water process automation',
                    'Cut energy waste with intelligent water control',
                    'Reduce errors by 25% in automated water management',
                    'Boost efficiency employing centralized monitoring',
                    'Ensure compliance through digital reporting'
                ]
            },
        ]
    },
    {
        id: 'mobility',
        label: 'Mobility',
        activeIcon: '/white5.png',
        inactiveIcon: '/black5.png',
        solutions: [
            {
                title: 'Wagon Tracking System',
                description: 'Intelligent rail tracking for faster, safer operations.',
                backgroundImage: '/iot/mob1.png',
                features: [
                    'Seamless fleet operations with real-time tracking',
                    'Monitor wagon performance with smart IoT insights',
                    'Full visibility across your wagon fleet',
                    'Anticipate delays with predictive alerts',
                    'Maximize logistics efficiency with actionable data'
                ]
            },
            // ... other mobility solutions
        ]
    },
    {
        id: 'smart-tank',
        label: 'Smart tank',
        activeIcon: '/white6.png',
        inactiveIcon: '/black6.png',
        solutions: [
            {
                title: 'IBC Chemical tank Monitoring',
                description: 'Prevent chemical shortages and avoid spills.',
                backgroundImage: '/iot/smart1.png',
                features: [
                    'Prevent chemical shortages with IBC tank monitoring',
                    'Avoid spills with automated tank alerts',
                    'Manage multiple tanks remotely',
                    'Optimize usage with chemical tank analytics',
                    'Scale monitoring with smart IBC solutions'
                ]
            },
            // ... other smart tank solutions
        ]
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        activeIcon: '/white7.png',
        inactiveIcon: '/black7.png',
        solutions: [
            {
                title: 'Gas Level Monitoring',
                description: 'Smarter oxygen monitoring that keeps patients and operations safe.',
                backgroundImage: '/iot/health1.png',
                features: [
                    'Prevent supply shortages with real-time gas monitoring',
                    'Detect abnormal oxygen levels instantly',
                    'Centralize oxygen tank monitoring across hospitals',
                    'Optimize oxygen usage with predictive insights',
                    'Enhance patient safety with automated alerts'
                ]
            },
            // ... other healthcare solutions
        ]
    },
    {
        id: 'industry4.0',
        label: 'Industry 4.0',
        activeIcon: '/white8.png',
        inactiveIcon: '/black8.png',
        solutions: [
            {
                title: 'Railway Station Monitoring',
                description: 'Stay in control of station assets with real-time railway IoT monitoring',
                backgroundImage: '/iot/indus1.png',
                features: [
                    'Real-time railway asset monitoring with IR NIYANTRAC',
                    'CRIS-integrated IoT dashboards',
                    'Predictive alerts for railway equipment and infrastructure',
                    'IFD device for centralized railway monitoring and control',
                    'Data-driven insights for smarter railway operations'
                ]
            },
            // ... other industry 4.0 solutions
        ]
    },
    {
        id: 'atm',
        label: 'ATM',
        activeIcon: '/white9.png',
        inactiveIcon: '/black9.png',
        solutions: [
            {
                title: 'ATM Monitoring Solution',
                description: 'Keep every ATM secure, efficient, and connected in real time',
                backgroundImage: '/iot/atm.png',
                features: [
                    'Monitor ATM performance across all sites in real time',
                    'HVAC monitoring for efficient environment control',
                    'Spot operational anomalies and security risks instantly',
                    'Use predictive insights to minimize downtime',
                    'IoT Enabled ATM monitoring for site control'
                ]
            },
        ]
    },
    {
        id: 'datacenter',
        label: 'Data Center',
        activeIcon: '/white10.png',
        inactiveIcon: '/black10.png',
        solutions: [
            {
                title: 'Data Center Monitoring',
                description: 'Achieve operational excellence with remote data center monitoring',
                backgroundImage: '/iot/data1.png',
                features: [
                    'Real-time server room monitoring with our IoT sensors',
                    'Efficient cooling through data center HVAC monitoring',
                    'Early detection of water leaks and environmental hazards',
                    'Centralized dashboards for remote data center visibility',
                    'Actionable analytics for proactive maintenance and uptime'
                ]
            },
        ]
    },
    {
        id: 'oil&gas',
        label: 'Oil & Gas',
        activeIcon: '/white11.png',
        inactiveIcon: '/black11.png',
        solutions: [
            {
                title: 'Oil field Production Monitoring',
                description: 'Keep operations efficient with real-time oilfield monitoring',
                backgroundImage: '/iot/oil.png',
                features: [
                    'Real-time oilfield monitoring for full well visibility',
                    'ESP health tracking to prevent unexpected failures',
                    'Gas lift optimization for improved pump efficiency',
                    'Centralized visibility with IoT-based ESP well monitoring',
                    'Early alerts for ESP and gas lift issues'
                ]
            },
        ]
    },
    {
        id: 'coldchain',
        label: 'Cold Chain',
        activeIcon: '/white12.png',
        inactiveIcon: '/black12.png',
        solutions: [
            {
                title: 'Cold Chain Monitoring System',
                description: 'Keep your cold storage efficient, safe, and always in control.',
                backgroundImage: '/iot/cold1.png',
                features: [
                    'Maintain precise temperatures with cold storage monitoring',
                    'Regulate humidity efficiently using smart HVAC systems',
                    'Maximize energy efficiency across cold storage facilities',
                    'Track multiple storage units digitally and efficiently',
                    'Ensure continuous, reliable cold chain operations'
                ]
            },
        ]
    },
    {
        id: 'utilities',
        label: 'Utilities',
        activeIcon: '/white13.png',
        inactiveIcon: '/black13.png',
        solutions: [
            {
                title: 'Transformer Monitoring System',
                description: 'Monitor, manage, and protect your transformers in real time',
                backgroundImage: '/iot/utilities.png',
                features: [
                    'Monitor transformer health in real time with IoT sensors',
                    'Detect insulation and oil issues early to prevent failures',
                    'Manage multiple transformers remotely across substations',
                    'Ensure uninterrupted power supply with smart transformer monitoring solution.',
                    'Track load, voltage, and temperature for efficient operation'
                ]
            },
        ]
    },
    {
        id: 'renewables',
        label: 'Renewables',
        activeIcon: '/white14.png',
        inactiveIcon: '/black14.png',
        solutions: [
            {
                title: 'Microgrid Monitoring',
                description: 'Manage your microgrid efficiently with real-time IoT monitoring',
                backgroundImage: '/renewable1.png',
                features: [
                    'Track operations in real time with IoT microgrid monitoring',
                    'Monitor energy flow, load balance, and power stability',
                    'Identify system inefficiencies and faults early.',
                    'Control multiple microgrid sites remotely and seamlessly',
                    'Optimize microgrid performance with smart monitoring'
                ]
            },
            {
                title: 'Solar Pump Monitoring',
                description: 'Keep your solar pumps running efficiently, 24/7',
                backgroundImage: '/renewable2.png',
                features: [
                    'Maximize irrigation efficiency with IoT solar pump monitoring',
                    'Track solar output and pump performance',
                    'Cut maintenance costs with operational insights.',
                    'Operate solar pumps efficiently across farms and sites',
                    'Ensure reliable water supply with smart pump control'
                ]
            },
        ]
    },
];

// --- Component Implementation ---

export const IoTSolutionsSection = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState('');

    const tabContainerRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const currentCategory = tabs[currentTab];
    const currentSolution = currentCategory.solutions[currentSlide];

    // Auto-scroll the active tab into view
    useEffect(() => {
        if (tabContainerRef.current) {
            const activeTabButton = tabContainerRef.current.children[currentTab];
            if (activeTabButton) {
                activeTabButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
        }
    }, [currentTab]);

    const animateSlide = useCallback((direction, callback) => {
        setIsAnimating(true);
        setAnimationDirection(direction);

        setTimeout(() => {
            callback();
            setTimeout(() => {
                setIsAnimating(false);
                setAnimationDirection('');
            }, 50); // Short delay to reset animation class after state change
        }, 300); // Must match CSS transition/animation duration
    }, []);

    const handleNextSlide = useCallback(() => {
        if (isAnimating) return;

        animateSlide('slide-left', () => {
            if (currentSlide < currentCategory.solutions.length - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else {
                if (currentTab < tabs.length - 1) {
                    setCurrentTab((prev) => prev + 1);
                    setCurrentSlide(0);
                }
            }
        });
    }, [currentSlide, currentCategory.solutions.length, currentTab, isAnimating, animateSlide]);

    const handlePrevSlide = useCallback(() => {
        if (isAnimating) return;

        animateSlide('slide-right', () => {
            if (currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            } else {
                if (currentTab > 0) {
                    setCurrentTab((prev) => prev - 1);
                    const prevCategory = tabs[currentTab - 1];
                    setCurrentSlide(prevCategory.solutions.length - 1);
                }
            }
        });
    }, [currentSlide, currentTab, isAnimating, animateSlide]);

    const handleTabClick = (index) => {
        if (isAnimating) return;

        const direction = index > currentTab ? 'slide-left' : 'slide-right';
        animateSlide(direction, () => {
            setCurrentTab(index);
            setCurrentSlide(0);
        });
    };

    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                handleNextSlide();
            } else {
                handlePrevSlide();
            }
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrevSlide();
            } else if (e.key === 'ArrowRight') {
                handleNextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNextSlide, handlePrevSlide]);

    // Animation utility classes
    const getSlideAnimationClass = () => {
        if (!isAnimating) return '';
        return animationDirection === 'slide-left' ? 'slide-out-left' : 'slide-out-right';
    };

    const getNewSlideAnimationClass = () => {
        if (!isAnimating) return '';
        return animationDirection === 'slide-left' ? 'slide-in-left' : 'slide-in-right';
    };

    return (
        <section className="w-full bg-white overflow-hidden py-10 lg:py-20">
            <div className="relative w-full">
                <style jsx global>{`
                    /* hide scrollbar for the tabs scroller */
                    .iots-tabs::-webkit-scrollbar { display: none; }
                    .iots-tabs { -ms-overflow-style: none; scrollbar-width: none; }

                    /* Custom Filters for professional icon look */
                    .filter-blue {
                        filter: brightness(0) saturate(100%) invert(44%) sepia(95%) saturate(2725%)
                        hue-rotate(188deg) brightness(95%) contrast(96%);
                    }
                    .filter-black {
                        filter: brightness(0) saturate(100%);
                    }

                    /* Slide animations */
                    .slide-content {
                        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                    }
                    .slide-out-left {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    .slide-out-right {
                        transform: translateX(100%);
                        opacity: 0;
                    }

                    @keyframes slideInFromRight {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideInFromLeft {
                        from { transform: translateX(-100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }

                    .slide-in-left { animation: slideInFromRight 0.3s ease-in-out forwards; }
                    .slide-in-right { animation: slideInFromLeft 0.3s ease-in-out forwards; }

                    .current-content {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        pointer-events: none;
                        z-index: 10;
                    }
                    .new-content {
                        position: relative;
                        z-index: 20;
                    }
                    .iots-nav-arrow {
                        z-index: 60;
                        pointer-events: auto;
                    }
                `}</style>

                {/* Title */}
                <div className="flex flex-col items-center px-4">
                    <h2 className="text-2xl lg:text-3xl  text-center text-gray-800 mb-8 lg:mb-12 max-w-4xl mx-auto">
                        Explore How IoT Solutions Transform Operations
                    </h2>
                </div>

                <article
                    className="relative w-full min-h-[450px] lg:min-h-[500px] bg-white translate-y-[-1rem] transition-opacity duration-500 ease-in-out"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="flex flex-col items-center px-4">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto">

                            {/* Category Tabs Section */}
                            <div className="absolute top-[-43px] left-0 right-0 bg-white overflow-hidden">
                                <div
                                    ref={tabContainerRef}
                                    className="flex items-center gap-3 lg:gap-5 overflow-x-auto px-4 py-3 iots-tabs overflow-y-hidden"
                                >
                                    {tabs.map((category, index) => (
                                        <button
                                            key={`category-${index}`}
                                            onClick={() => handleTabClick(index)}
                                            className={`inline-flex items-center gap-2 flex-shrink-0 transition-all text-sm lg:text-base font-medium
                                                ${index === currentTab
                                                    ? "bg-white shadow-lg rounded-xl px-4 py-2.5" // Active, prominent look
                                                    : "bg-transparent hover:bg-gray-50 rounded-xl px-4 py-2.5" // Inactive, neat look
                                                }
                                            `}
                                        >
                                            <img
                                                className={`w-4 h-4 lg:w-5 lg:h-5 transition
                                                    ${index === currentTab ? "filter-blue" : "filter-black"}
                                                `}
                                                alt={category.label}
                                                src={index === currentTab ? category.activeIcon : category.inactiveIcon}
                                            />
                                            <span
                                                className={`font-semibold whitespace-nowrap leading-none
                                                    ${index === currentTab ? "text-[#3ca0ef]" : "text-gray-600"}
                                                `}
                                            >
                                                {category.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Container with Animation */}
                            <div className="slide-container min-h-[350px] lg:min-h-[400px] relative mt-10">

                                {/* Navigation Arrows */}
                                <div className="absolute top-[80px] lg:top-[100px] right-[-15px] w-6 h-6 iots-nav-arrow">
                                    <button
                                        onClick={handleNextSlide}
                                        disabled={isAnimating}
                                        aria-label="Next solution"
                                        className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 active:scale-95 transition"
                                    >
                                        <FaArrowRight className="text-white text-xs" />
                                    </button>
                                </div>

                                <div className="absolute top-[80px] lg:top-[100px] left-[-15px] w-6 h-6 iots-nav-arrow">
                                    <button
                                        onClick={handlePrevSlide}
                                        disabled={isAnimating}
                                        aria-label="Previous solution"
                                        className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 active:scale-95 transition"
                                    >
                                        <FaArrowLeft className="text-white text-xs" />
                                    </button>
                                </div>

                                {/* Current Content - Fades out for smooth transition */}
                                {isAnimating && (
                                    <div className={`current-content slide-content ${getSlideAnimationClass()}`}>
                                        {/* Invisible duplicate to maintain layout height during animation */}
                                    </div>
                                )}

                                {/* New Content - Slides in */}
                                <div className={`new-content slide-content ${getNewSlideAnimationClass()}`}>
                                    
                                    <div className="flex flex-col items-center">
                                        {/* Solution Image Area */}
                                        <div className="relative flex justify-center w-full">
                                            {/* Image */}
                                            <img
                                                className="w-[250px] h-[164px] lg:w-[350px] lg:h-[230px] object-cover rounded-xl shadow-lg border border-gray-100"
                                                alt={`${currentCategory.label} solution: ${currentSolution.title}`}
                                                src={currentSolution.backgroundImage}
                                            />

                                            {/* Number Badge */}
                                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 lg:w-9 lg:h-9 bg-white rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                                                <span className="font-manrope font-extrabold text-[#1e4d72] text-sm lg:text-base leading-none">
                                                    {currentSlide + 1}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Solution Card (Title/Description) */}
                                        <div className="mt-[-20px] relative mx-auto w-11/12 sm:w-8/12 lg:w-96 bg-white rounded-lg border border-gray-200 shadow-xl p-4 lg:p-5 z-20">
                                            <div className="flex flex-col gap-1 lg:gap-2 items-center">
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <h3 className="font-semibold text-lg text-[#1694f5] leading-tight text-center">
                                                        {currentSolution.title}
                                                    </h3>
                                                    <FaArrowRight className="text-[#1694f5] text-xs" />
                                                </div>
                                                <p className="font-medium text-gray-600 text-sm text-center">
                                                    {currentSolution.description || ''}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Benefits List */}
                                        <div className="mt-4 mx-auto w-11/12 sm:w-9/12 lg:w-11/12 max-w-xl bg-gray-50 rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-inner">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                                                {currentSolution.features.map((benefit, index) => (
                                                    <li
                                                        key={`benefit-${index}`}
                                                        className="flex items-start gap-2 text-sm lg:text-base text-gray-800"
                                                    >
                                                        <span className="text-blue-500 font-bold mt-1 text-sm">✓</span>
                                                        <span className="font-medium">
                                                            {benefit}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};