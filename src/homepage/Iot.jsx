// // // 'use client'
// // // import React, { useState } from 'react'

// // // const Iot = () => {
// // //   const [activeTab, setActiveTab] = useState('telecom');

// // //   const tabs = [
// // //     { 
// // //       id: 'telecom', 
// // //       label: 'Telecom',
// // //       activeIcon: '/white1.png', // Active state icon
// // //       inactiveIcon: '/black1.png' // Inactive state icon
// // //     },
// // //     { 
// // //       id: 'diesel', 
// // //       label: 'Diesel Generator',
// // //       activeIcon: '/white2.png',
// // //       inactiveIcon: '/black2.png'
// // //     },
// // //     { 
// // //       id: 'meteorology', 
// // //       label: 'Meteorology',
// // //       activeIcon: '/white3.png',
// // //       inactiveIcon: '/black3.png'
// // //     },
// // //     { 
// // //       id: 'water', 
// // //       label: 'Water',
// // //       activeIcon: '/white4.png',
// // //       inactiveIcon: '/black4.png'
// // //     }
// // //   ];

// // //   return (
// // //     <div className=" mt-24 mx-auto px-4 sm:px-6 lg:px-52 py-8 h-screen">
// // //       {/* Heading */}
// // //       <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
// // //         Explore How IoT Solutions Transform Operations
// // //       </h1>
      
// // //       {/* Tabs */}
// // //       <div className="w-full">
// // //         <div className="flex space-x-1 border-b border-gray-200">
// // //           {tabs.map((tab) => (
// // //             <button
// // //               key={tab.id}
// // //               className={`w-full py-4 text-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
// // //                 activeTab === tab.id
// // //                   ? 'bg-[#4D8FD1] text-white border-blue-500'
// // //                   : 'bg-[#F0F1F2] text-black hover:text-gray-900 hover:bg-gray-100'
// // //               }`}
// // //               onClick={() => setActiveTab(tab.id)}
// // //             >
// // //               <img 
// // //                 src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon} 
// // //                 alt={`${tab.label} icon`}
// // //                 className="w-7 h-7 object-contain"
// // //               />
// // //               {tab.label}
// // //             </button>
// // //           ))}
// // //         </div>
        
// // //         {/* Tab Content */}
// // //         <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
// // //           {activeTab === 'telecom' && (
// // //             <div className="space-y-4">
// // //               <h3 className="text-2xl font-semibold text-gray-800">Telecom Solutions</h3>
// // //               <p className="text-gray-600 text-lg">
// // //                 IoT solutions for telecommunications infrastructure and operations including 
// // //                 network monitoring, equipment management, and predictive maintenance.
// // //               </p>
// // //             </div>
// // //           )}
          
// // //           {activeTab === 'diesel' && (
// // //             <div className="space-y-4">
// // //               <h3 className="text-2xl font-semibold text-gray-800">Diesel Generator Monitoring</h3>
// // //               <p className="text-gray-600 text-lg">
// // //                 Real-time monitoring and management of diesel generators with remote control,
// // //                 fuel level tracking, and performance analytics.
// // //               </p>
// // //             </div>
// // //           )}
          
// // //           {activeTab === 'meteorology' && (
// // //             <div className="space-y-4">
// // //               <h3 className="text-2xl font-semibold text-gray-800">Meteorology Applications</h3>
// // //               <p className="text-gray-600 text-lg">
// // //                 Advanced weather monitoring and environmental data collection solutions 
// // //                 for accurate forecasting and climate analysis.
// // //               </p>
// // //             </div>
// // //           )}
          
// // //           {activeTab === 'water' && (
// // //             <div className="space-y-4">
// // //               <h3 className="text-2xl font-semibold text-gray-800">Water Management</h3>
// // //               <p className="text-gray-600 text-lg">
// // //                 Smart water monitoring and distribution systems with leak detection, 
// // //                 quality monitoring, and consumption analytics.
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Iot

// // // 'use client'
// // // import React, { useState } from 'react'

// // // const Iot = () => {
// // //   const [activeTab, setActiveTab] = useState('telecom');
// // //   const [startIndex, setStartIndex] = useState(0);
// // //   const [activeSolution, setActiveSolution] = useState(0);

// // //  const tabs = [
// // //   { 
// // //     id: 'telecom', 
// // //     label: 'Telecom',
// // //     activeIcon: '/white1.png',
// // //     inactiveIcon: '/black1.png',
// // //     solutions: [
// // //       {
// // //         title: 'Telecom Monitoring Solution',
// // //         description: 'Real-time monitoring to maximize uptime',
// // //         detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
// // //         backgroundImage: '/e1.jpg'
// // //       },
// // //       {
// // //         title: 'Fuel Monitoring Solution',
// // //         description: 'Prevent loss with precise consumption tracking',
// // //         detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
// // //         backgroundImage: '/fuel-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Battery Monitoring Solution',
// // //         description: 'Protect uptime with proactive battery health checks',
// // //         detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
// // //         backgroundImage: '/battery-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Mobile Fuel Dispenser',
// // //         description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
// // //         detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
// // //         backgroundImage: '/mobile-fuel.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'IoT solutions for telecommunications infrastructure and operations including network monitoring, equipment management, and predictive maintenance.'
// // //   },
// // //   { 
// // //     id: 'diesel', 
// // //     label: 'Diesel Generator',
// // //     activeIcon: '/white2.png',
// // //     inactiveIcon: '/black2.png',
// // //     solutions: [
// // //       {
// // //         title: 'Generator Monitoring Solution',
// // //         description: 'Real-time monitoring of generator performance',
// // //         detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
// // //         backgroundImage: '/generator-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Fuel Level Tracking',
// // //         description: 'Accurate fuel consumption monitoring',
// // //         detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
// // //         backgroundImage: '/fuel-tracking.jpg'
// // //       },
// // //       {
// // //         title: 'Maintenance Alerts',
// // //         description: 'Proactive maintenance scheduling',
// // //         detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
// // //         backgroundImage: '/maintenance-alerts.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Real-time monitoring and management of diesel generators with remote control, fuel level tracking, and performance analytics.'
// // //   },
// // //   { 
// // //     id: 'meteorology', 
// // //     label: 'Meteorology',
// // //     activeIcon: '/white3.png',
// // //     inactiveIcon: '/black3.png',
// // //     solutions: [
// // //       {
// // //         title: 'Weather Station Monitoring',
// // //         description: 'Real-time weather data collection',
// // //         detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
// // //         backgroundImage: '/weather-station.jpg'
// // //       },
// // //       {
// // //         title: 'Environmental Sensors',
// // //         description: 'Comprehensive environmental monitoring',
// // //         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
// // //         backgroundImage: '/environmental-sensors.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Advanced weather monitoring and environmental data collection solutions for accurate forecasting and climate analysis.'
// // //   },
// // //   { 
// // //     id: 'water', 
// // //     label: 'Water',
// // //     activeIcon: '/white4.png',
// // //     inactiveIcon: '/black4.png',
// // //     solutions: [
// // //       {
// // //         title: 'Water Quality Monitoring',
// // //         description: 'Real-time water quality assessment',
// // //         detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
// // //         backgroundImage: '/water-quality.jpg'
// // //       },
// // //       {
// // //         title: 'Leak Detection System',
// // //         description: 'Early detection of water leaks',
// // //         detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
// // //         backgroundImage: '/leak-detection.jpg'
// // //       },
// // //       {
// // //         title: 'Smart Metering',
// // //         description: 'Automated water consumption tracking',
// // //         detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
// // //         backgroundImage: '/smart-metering.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Smart water monitoring and distribution systems with leak detection, quality monitoring, and consumption analytics.'
// // //   },
// // //   { 
// // //     id: 'mobility', 
// // //     label: 'Mobility',
// // //     activeIcon: '/white5.png',
// // //     inactiveIcon: '/black5.png',
// // //     solutions: [
// // //       {
// // //         title: 'Fleet Management',
// // //         description: 'Real-time vehicle tracking and management',
// // //         detailedContent: 'Comprehensive fleet management with GPS tracking, route optimization, and driver behavior monitoring.',
// // //         backgroundImage: '/fleet-management.jpg'
// // //       },
// // //       {
// // //         title: 'Smart Parking',
// // //         description: 'Intelligent parking space management',
// // //         detailedContent: 'Smart parking solutions with space detection, reservation systems, and payment automation.',
// // //         backgroundImage: '/smart-parking.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'IoT solutions for smart transportation, fleet management, and connected vehicles with real-time tracking and optimization.'
// // //   },
// // //   { 
// // //     id: 'smart-tank', 
// // //     label: 'Smart Tank',
// // //     activeIcon: '/white6.png',
// // //     inactiveIcon: '/black6.png',
// // //     solutions: [
// // //       {
// // //         title: 'Tank Level Monitoring',
// // //         description: 'Real-time liquid level tracking',
// // //         detailedContent: 'Advanced tank level monitoring systems with ultrasonic sensors and real-time inventory management.',
// // //         backgroundImage: '/tank-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Automated Inventory Management',
// // //         description: 'Smart inventory control and alerts',
// // //         detailedContent: 'Automated inventory tracking with predictive refill alerts and consumption analytics.',
// // //         backgroundImage: '/inventory-management.jpg'
// // //       },
// // //       {
// // //         title: 'Leak Detection & Prevention',
// // //         description: 'Early leak detection and containment',
// // //         detailedContent: 'Comprehensive leak detection systems with automatic shutoff and emergency response protocols.',
// // //         backgroundImage: '/tank-leak-detection.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Intelligent tank monitoring solutions for industrial and commercial applications with real-time level tracking and automated management.'
// // //   },
// // //   { 
// // //     id: 'healthcare', 
// // //     label: 'Healthcare',
// // //     activeIcon: '/white7.png',
// // //     inactiveIcon: '/black7.png',
// // //     solutions: [
// // //       {
// // //         title: 'Medical Equipment Monitoring',
// // //         description: 'Real-time equipment status tracking',
// // //         detailedContent: 'Continuous monitoring of medical equipment performance, usage patterns, and maintenance needs.',
// // //         backgroundImage: '/medical-equipment.jpg'
// // //       },
// // //       {
// // //         title: 'Patient Monitoring Systems',
// // //         description: 'Remote patient health tracking',
// // //         detailedContent: 'IoT-enabled patient monitoring with vital signs tracking and emergency alert systems.',
// // //         backgroundImage: '/patient-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Pharmacy Inventory Management',
// // //         description: 'Smart medication tracking',
// // //         detailedContent: 'Automated pharmacy inventory management with expiry tracking and restock alerts.',
// // //         backgroundImage: '/pharmacy-inventory.jpg'
// // //       },
// // //       {
// // //         title: 'Hospital Asset Tracking',
// // //         description: 'Real-time medical equipment location',
// // //         detailedContent: 'GPS and RFID-based asset tracking for hospital equipment and supplies.',
// // //         backgroundImage: '/hospital-assets.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Healthcare IoT solutions for patient monitoring, medical equipment tracking, and hospital operations optimization.'
// // //   },
// // //   { 
// // //     id: 'industry-4', 
// // //     label: 'Industry 4.0',
// // //     activeIcon: '/white8.png',
// // //     inactiveIcon: '/black8.png',
// // //     solutions: [
// // //       {
// // //         title: 'Smart Factory Automation',
// // //         description: 'Automated production line monitoring',
// // //         detailedContent: 'Comprehensive factory automation with real-time production tracking and quality control.',
// // //         backgroundImage: '/smart-factory.jpg'
// // //       },
// // //       {
// // //         title: 'Predictive Maintenance',
// // //         description: 'AI-driven equipment maintenance',
// // //         detailedContent: 'Predictive maintenance systems using machine learning to prevent equipment failures.',
// // //         backgroundImage: '/predictive-maintenance.jpg'
// // //       },
// // //       {
// // //         title: 'Digital Twin Solutions',
// // //         description: 'Virtual replica of physical assets',
// // //         detailedContent: 'Digital twin technology for simulation, testing, and optimization of industrial processes.',
// // //         backgroundImage: '/digital-twin.jpg'
// // //       },
// // //       {
// // //         title: 'Industrial Robotics Monitoring',
// // //         description: 'Real-time robot performance tracking',
// // //         detailedContent: 'Continuous monitoring of industrial robots with performance analytics and maintenance scheduling.',
// // //         backgroundImage: '/robotics-monitoring.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Industry 4.0 solutions for smart manufacturing, automation, and digital transformation of industrial processes.'
// // //   },
// // //   { 
// // //     id: 'atm', 
// // //     label: 'ATM',
// // //     activeIcon: '/white9.png',
// // //     inactiveIcon: '/black9.png',
// // //     solutions: [
// // //       {
// // //         title: 'ATM Cash Monitoring',
// // //         description: 'Real-time cash level tracking',
// // //         detailedContent: 'Smart cash monitoring systems with predictive refill alerts and cash optimization.',
// // //         backgroundImage: '/atm-cash.jpg'
// // //       },
// // //       {
// // //         title: 'ATM Security Monitoring',
// // //         description: 'Comprehensive security surveillance',
// // //         detailedContent: 'Multi-layered security monitoring with intrusion detection and emergency response.',
// // //         backgroundImage: '/atm-security.jpg'
// // //       },
// // //       {
// // //         title: 'ATM Network Management',
// // //         description: 'Centralized ATM operations',
// // //         detailedContent: 'Centralized management of ATM networks with performance monitoring and remote diagnostics.',
// // //         backgroundImage: '/atm-network.jpg'
// // //       },
// // //       {
// // //         title: 'Transaction Analytics',
// // //         description: 'Smart transaction monitoring',
// // //         detailedContent: 'Advanced transaction analytics with pattern recognition and fraud detection.',
// // //         backgroundImage: '/transaction-analytics.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'IoT solutions for ATM monitoring, security, cash management, and network operations optimization.'
// // //   },
// // //   { 
// // //     id: 'data-center', 
// // //     label: 'Data Center',
// // //     activeIcon: '/white10.png',
// // //     inactiveIcon: '/black10.png',
// // //     solutions: [
// // //       {
// // //         title: 'Server Room Monitoring',
// // //         description: 'Comprehensive server environment tracking',
// // //         detailedContent: 'Real-time monitoring of server room conditions including temperature, humidity, and power consumption.',
// // //         backgroundImage: '/server-room.jpg'
// // //       },
// // //       {
// // //         title: 'Cooling System Optimization',
// // //         description: 'Smart cooling management',
// // //         detailedContent: 'Intelligent cooling system control with energy optimization and predictive maintenance.',
// // //         backgroundImage: '/cooling-system.jpg'
// // //       },
// // //       {
// // //         title: 'Power Usage Monitoring',
// // //         description: 'Real-time energy consumption tracking',
// // //         detailedContent: 'Comprehensive power monitoring with consumption analytics and efficiency optimization.',
// // //         backgroundImage: '/power-usage.jpg'
// // //       },
// // //       {
// // //         title: 'Security & Access Control',
// // //         description: 'Multi-layer security monitoring',
// // //         detailedContent: 'Advanced security systems with access control, surveillance, and intrusion detection.',
// // //         backgroundImage: '/datacenter-security.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Data center monitoring solutions for infrastructure management, energy optimization, and security compliance.'
// // //   },
// // //   { 
// // //     id: 'oil', 
// // //     label: 'Oil & Gas',
// // //     activeIcon: '/white11.png',
// // //     inactiveIcon: '/black11.png',
// // //     solutions: [
// // //       {
// // //         title: 'Pipeline Monitoring',
// // //         description: 'Real-time pipeline integrity tracking',
// // //         detailedContent: 'Comprehensive pipeline monitoring with pressure, flow rate, and leak detection systems.',
// // //         backgroundImage: '/pipeline-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Refinery Process Optimization',
// // //         description: 'Smart refinery operations',
// // //         detailedContent: 'IoT-enabled refinery process optimization with real-time analytics and control systems.',
// // //         backgroundImage: '/refinery.jpg'
// // //       },
// // //       {
// // //         title: 'Offshore Platform Monitoring',
// // //         description: 'Remote offshore operations',
// // //         detailedContent: 'Remote monitoring of offshore platforms with equipment tracking and environmental conditions.',
// // //         backgroundImage: '/offshore-platform.jpg'
// // //       },
// // //       {
// // //         title: 'Tank Farm Management',
// // //         description: 'Bulk storage optimization',
// // //         detailedContent: 'Smart tank farm management with inventory tracking and automated operations.',
// // //         backgroundImage: '/tank-farm.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Oil and gas IoT solutions for upstream, midstream, and downstream operations with safety and efficiency optimization.'
// // //   },
// // //   { 
// // //     id: 'cold-chain', 
// // //     label: 'Cold Chain',
// // //     activeIcon: '/white12.png',
// // //     inactiveIcon: '/black12.png',
// // //     solutions: [
// // //       {
// // //         title: 'Temperature Monitoring',
// // //         description: 'Real-time temperature tracking',
// // //         detailedContent: 'Continuous temperature monitoring with alerts for deviations and compliance reporting.',
// // //         backgroundImage: '/temperature-monitoring.jpg'
// // //       },
// // //       {
// // //         title: 'Cold Storage Management',
// // //         description: 'Smart refrigeration control',
// // //         detailedContent: 'Intelligent cold storage management with energy optimization and inventory tracking.',
// // //         backgroundImage: '/cold-storage.jpg'
// // //       },
// // //       {
// // //         title: 'Transportation Monitoring',
// // //         description: 'In-transit condition tracking',
// // //         detailedContent: 'Real-time monitoring of temperature-sensitive goods during transportation.',
// // //         backgroundImage: '/cold-transport.jpg'
// // //       },
// // //       {
// // //         title: 'Quality Assurance',
// // //         description: 'Product quality compliance',
// // //         detailedContent: 'Comprehensive quality assurance with condition monitoring and compliance documentation.',
// // //         backgroundImage: '/quality-assurance.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Cold chain monitoring solutions for temperature-sensitive products with quality assurance and compliance management.'
// // //   },
// // //   { 
// // //     id: 'utilities', 
// // //     label: 'Utilities',
// // //     activeIcon: '/white13.png',
// // //     inactiveIcon: '/black13.png',
// // //     solutions: [
// // //       {
// // //         title: 'Smart Grid Management',
// // //         description: 'Intelligent power distribution',
// // //         detailedContent: 'Smart grid solutions with real-time monitoring, load balancing, and outage management.',
// // //         backgroundImage: '/smart-grid.jpg'
// // //       },
// // //       {
// // //         title: 'Water Distribution Monitoring',
// // //         description: 'Smart water network management',
// // //         detailedContent: 'Comprehensive water distribution monitoring with pressure management and leak detection.',
// // //         backgroundImage: '/water-distribution.jpg'
// // //       },
// // //       {
// // //         title: 'Gas Pipeline Monitoring',
// // //         description: 'Natural gas distribution tracking',
// // //         detailedContent: 'Real-time gas pipeline monitoring with flow control and safety systems.',
// // //         backgroundImage: '/gas-pipeline.jpg'
// // //       },
// // //       {
// // //         title: 'Utility Asset Management',
// // //         description: 'Infrastructure lifecycle tracking',
// // //         detailedContent: 'Complete utility asset management with maintenance scheduling and performance analytics.',
// // //         backgroundImage: '/utility-assets.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Utility sector IoT solutions for smart grid, water distribution, and infrastructure management.'
// // //   },
// // //   { 
// // //     id: 'renewables', 
// // //     label: 'Renewables',
// // //     activeIcon: '/white14.png',
// // //     inactiveIcon: '/black14.png',
// // //     solutions: [
// // //       {
// // //         title: 'Solar Farm Monitoring',
// // //         description: 'Photovoltaic system optimization',
// // //         detailedContent: 'Comprehensive solar farm monitoring with performance analytics and maintenance alerts.',
// // //         backgroundImage: '/solar-farm.jpg'
// // //       },
// // //       {
// // //         title: 'Wind Turbine Monitoring',
// // //         description: 'Turbine performance tracking',
// // //         detailedContent: 'Real-time wind turbine monitoring with vibration analysis and predictive maintenance.',
// // //         backgroundImage: '/wind-turbine.jpg'
// // //       },
// // //       {
// // //         title: 'Energy Storage Management',
// // //         description: 'Battery system optimization',
// // //         detailedContent: 'Smart energy storage management with charge optimization and lifecycle tracking.',
// // //         backgroundImage: '/energy-storage.jpg'
// // //       },
// // //       {
// // //         title: 'Renewable Energy Analytics',
// // //         description: 'Production and consumption insights',
// // //         detailedContent: 'Advanced analytics for renewable energy production, consumption, and grid integration.',
// // //         backgroundImage: '/renewable-analytics.jpg'
// // //       }
// // //     ],
// // //     rightContent: 'Renewable energy IoT solutions for solar, wind, and energy storage systems with performance optimization.'
// // //   }
// // // ];

// // //   const tabsPerView = 4;

// // //   const nextTab = () => {
// // //     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
// // //     const nextIndex = (currentIndex + 1) % tabs.length;
// // //     setActiveTab(tabs[nextIndex].id);
// // //     setActiveSolution(0);
    
// // //     if (nextIndex >= startIndex + tabsPerView) {
// // //       setStartIndex(startIndex + 1);
// // //     }
// // //   };

// // //   const prevTab = () => {
// // //     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
// // //     const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
// // //     setActiveTab(tabs[prevIndex].id);
// // //     setActiveSolution(0);
    
// // //     if (prevIndex < startIndex) {
// // //       setStartIndex(startIndex - 1);
// // //     }
// // //   };

// // //   const handleTabClick = (tabId) => {
// // //     const clickedIndex = tabs.findIndex(tab => tab.id === tabId);
// // //     setActiveTab(tabId);
// // //     setActiveSolution(0);
    
// // //     if (clickedIndex >= startIndex + tabsPerView) {
// // //       setStartIndex(clickedIndex - tabsPerView + 1);
// // //     } else if (clickedIndex < startIndex) {
// // //       setStartIndex(clickedIndex);
// // //     }
// // //   };

// // //   const handleSolutionClick = (index) => {
// // //     setActiveSolution(index);
// // //   };

// // //   const visibleTabs = tabs.slice(startIndex, startIndex + tabsPerView);
// // //   const activeTabData = tabs.find(tab => tab.id === activeTab);

// // //   return (
// // //     <div className="mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
// // //       {/* Heading */}
// // //       <h1 className="text-3xl sm:text-[48px] font-bold text-center text-gray-900 mb-8 sm:mb-12">
// // //         Explore How IoT Solutions Transform Operations
// // //       </h1>
      
// // //       {/* Tabs Container */}
// // //       <div className="w-full max-w-[90rem] mx-auto mb-4">
// // //         <div className="flex space-x-1 border-b border-gray-200">
// // //           {visibleTabs.map((tab) => (
// // //             <button
// // //               key={tab.id}
// // //               className={`w-full py-3 sm:py-4 text-sm sm:text-[20.27px]  transition-all duration-200 flex items-center justify-center gap-2 ${
// // //                 activeTab === tab.id
// // //                   ? 'bg-[#4D8FD1] text-white border-blue-500 shadow-md'
// // //                   : 'bg-[#F0F1F2] text-black hover:text-gray-900 hover:bg-gray-100'
// // //               }`}
// // //               onClick={() => handleTabClick(tab.id)}
// // //             >
// // //               <img 
// // //                 src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon} 
// // //                 alt={`${tab.label} icon`}
// // //                 className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
// // //               />
// // //               <span className="hidden sm:inline">{tab.label}</span>
// // //               <span className="inline sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
      
// // //       {/* Main Content Area with Two Columns */}
// // //       <div className="flex items-center justify-center gap-4 w-full">
// // //         {/* Left Arrow */}
// // //         <button
// // //           onClick={prevTab}
// // //           disabled={startIndex === 0 && activeTab === tabs[0].id}
// // //           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-3 shadow-md transition-all duration-200 ${
// // //             startIndex === 0 && activeTab === tabs[0].id 
// // //               ? 'opacity-50 cursor-not-allowed' 
// // //               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
// // //           }`}
// // //         >
// // //           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // //           </svg>
// // //         </button>

// // //         {/* Two Column Content Area */}
// // //         <div className="w-full max-w-[90rem] bg-white shadow-lg min-h-[400px]">
// // //           <div className="flex flex-col lg:flex-row gap-2 px-6 mt-6">
// // //             {/* Left Column - Solutions List */}
// // //             <div className="w-full lg:w-[25%] inline-flex flex-col justify-start items-start gap-3">
// // //               {activeTabData?.solutions?.map((solution, index) => (
// // //                 <div 
// // //                   key={index}
// // //                   data-property-1={activeSolution === index ? "Variant2" : "Default"}
// // //                   className="self-stretch flex flex-col justify-start items-start gap-5 cursor-pointer"
// // //                   onClick={() => handleSolutionClick(index)}
// // //                 >
// // //                   <div className="w-full flex flex-col justify-start items-start gap-4">
// // //                     <div className="self-stretch inline-flex  items-start">
// // //                       <div className={`w-72 h-10 justify-center text-[21.12px] font-normal font-['Manrope'] leading-7 ${
// // //                         activeSolution === index ? 'text-sky-500' : 'text-black'
// // //                       }`}>
// // //                         {solution.title}
// // //                       </div>
// // //                      <div className="w-3 h-5">
// // //   <img 
// // //     src={activeSolution === index ? "/Bluevector.png" : "/Blackvector.png"} 
// // //     alt="icon"
// // //     className="w-full h-full object-contain origin-top-left "
// // //   />
// // // </div>
// // //                     </div>
// // //                     <div className={`w-80 h-9 justify-center text-[14.84px] font-medium font-['Manrope'] leading-5 ${
// // //                       activeSolution === index ? 'text-slate-600' : 'text-neutral-700'
// // //                     }`}>
// // //                       {solution.description}
// // //                     </div>
// // //                   </div>
// // //                  <div className={`self-stretch h-0 ${
// // //   activeSolution === index 
// // //     ? 'border-[0.80px] border-transparent [border-image:linear-gradient(90deg,_rgba(22,148,246,0)_0%,_rgba(22,148,246,0.51)_51%,_rgba(22,148,246,0)_100%)_1]' 
// // //     : 'outline outline-1 outline-offset-[-0.50px] outline-neutral-300'
// // // }`}></div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Right Column - Background Image with Content Overlay */}
// // //             <div 
// // //               className="w-full lg:w-full relative h-[500px] lg:h-[600px]  overflow-hidden  "
// // //               style={{
// // //                 backgroundImage: `url(${activeTabData?.solutions?.[activeSolution]?.backgroundImage })`
// // //               }}
// // //             >
// // //               {/* Dark overlay for better text readability */}
// // //               {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div> */}
              
// // //               {/* Content Overlay - Left Side */}
// // //               <div className="relative h-full w-full lg:w-[450px] py-8 px-2 flex flex-col justify-between   bg-white/90 text-[#232C33]">
// // //                 <div className="space-y-6">
// // //                   {/* Title Badge */}
// // //                  <div className="flex justify-center">
// // //   <div className="inline-block bg-white/95 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">
// // //     <h3 className="text-xl font-bold text-gray-900">
// // //       {activeTabData?.solutions?.[activeSolution]?.title}
// // //     </h3>
// // //   </div>
// // // </div>

// // //                   {/* Key Features List */}
// // //                   <div className="space-y-4">
// // //                     <ul className="space-y-3">
// // //                       <li className="flex items-start gap-3">
// // //                         <span className="text-[#4D8FD1] text-lg mt-1">▸</span>
// // //                         <span className="text-[#232C33] text-base leading-relaxed font-medium">
// // //                           Ensure 100% tower uptime with uninterrupted power
// // //                         </span>
// // //                       </li>
// // //                       <li className="flex items-start gap-3">
// // //                         <span className="text-[#4D8FD1] text-lg mt-1">▸</span>
// // //                         <span className="text-[#232C33] text-base leading-relaxed font-medium">
// // //                           Reduce diesel costs by up to 30% with IoT fuel monitoring
// // //                         </span>
// // //                       </li>
// // //                       <li className="flex items-start gap-3">
// // //                         <span className="text-[#4D8FD1] text-lg mt-1">▸</span>
// // //                         <span className="text-[#232C33] text-base leading-relaxed font-medium">
// // //                           Gain real-time visibility anytime, anywhere
// // //                         </span>
// // //                       </li>
// // //                       <li className="flex items-start gap-3">
// // //                         <span className="text-[#4D8FD1] text-lg mt-1">▸</span>
// // //                         <span className="text-[#232C33] text-base leading-relaxed font-medium">
// // //                           Secure towers with 24×7 smart surveillance alerts
// // //                         </span>
// // //                       </li>
// // //                       <li className="flex items-start gap-3">
// // //                         <span className="text-[#4D8FD1] text-lg mt-1">▸</span>
// // //                         <span className="text-[#232C33] text-base leading-relaxed font-medium">
// // //                           Maximize uptime with proactive battery management
// // //                         </span>
// // //                       </li>
// // //                     </ul>
// // //                   </div>
// // //                 </div>

// // //                 {/* Bottom CTA */}
// // //                <div className="flex justify-center">
// // //   <div className="flex items-center gap-4 pt-6 border-t border-white/30">
// // //     <span className="text-[14px] font-medium">Explore the<br/> approach</span>
// // //     <button className="bg-[#4D8FD1] hover:bg-[#3d7bb8] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2">
// // //       Learn More
// // //       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //       </svg>
// // //     </button>
// // //   </div>
// // // </div>
// // //               </div>

// // //               {/* Number badge in top-right corner */}
// // //               <div className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
// // //                 <span className="text-xl font-bold text-gray-800">{activeSolution + 1}</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Arrow */}
// // //         <button
// // //           onClick={nextTab}
// // //           disabled={startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id}
// // //           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-3 shadow-md transition-all duration-200 ${
// // //             startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id
// // //               ? 'opacity-50 cursor-not-allowed'
// // //               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
// // //           }`}
// // //         >
// // //           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Mobile Navigation Dots */}
// // //       <div className="flex justify-center mt-6 sm:hidden">
// // //         <div className="flex space-x-2">
// // //           {tabs.map((_, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => {
// // //                 setActiveTab(tabs[index].id);
// // //                 setActiveSolution(0);
// // //                 if (index >= startIndex + tabsPerView) {
// // //                   setStartIndex(Math.max(0, index - tabsPerView + 1));
// // //                 } else if (index < startIndex) {
// // //                   setStartIndex(index);
// // //                 }
// // //               }}
// // //               className={`w-2 h-2 rounded-full transition-all duration-200 ${
// // //                 activeTab === tabs[index].id ? 'bg-[#4D8FD1] scale-125' : 'bg-gray-300'
// // //               }`}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Iot

// // 'use client'
// // import React, { useState } from 'react'

// // const Iot = () => {
// //   const [activeTab, setActiveTab] = useState('telecom');
// //   const [startIndex, setStartIndex] = useState(0);
// //   const [activeSolution, setActiveSolution] = useState(0);

// //  const tabs = [
// //   { 
// //     id: 'telecom', 
// //     label: 'Telecom',
// //     activeIcon: '/white1.png',
// //     inactiveIcon: '/black1.png',
// //     solutions: [
// //       {
// //         title: 'Telecom Monitoring Solution',
// //         description: 'Real-time monitoring to maximize uptime',
// //         detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
// //         backgroundImage: '/e1.jpg'
// //       },
// //       {
// //         title: 'Fuel Monitoring Solution',
// //         description: 'Prevent loss with precise consumption tracking',
// //         detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
// //         backgroundImage: '/fuel-monitoring.jpg'
// //       },
// //       {
// //         title: 'Battery Monitoring Solution',
// //         description: 'Protect uptime with proactive battery health checks',
// //         detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
// //         backgroundImage: '/battery-monitoring.jpg'
// //       },
// //       {
// //         title: 'Mobile Fuel Dispenser',
// //         description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
// //         detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
// //         backgroundImage: '/mobile-fuel.jpg'
// //       }
// //     ],
// //     rightContent: 'IoT solutions for telecommunications infrastructure and operations including network monitoring, equipment management, and predictive maintenance.'
// //   },
// //   { 
// //     id: 'diesel', 
// //     label: 'Diesel Generator',
// //     activeIcon: '/white2.png',
// //     inactiveIcon: '/black2.png',
// //     solutions: [
// //       {
// //         title: 'Generator Monitoring Solution',
// //         description: 'Real-time monitoring of generator performance',
// //         detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
// //         backgroundImage: '/generator-monitoring.jpg'
// //       },
// //       {
// //         title: 'Fuel Level Tracking',
// //         description: 'Accurate fuel consumption monitoring',
// //         detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
// //         backgroundImage: '/fuel-tracking.jpg'
// //       },
// //       {
// //         title: 'Maintenance Alerts',
// //         description: 'Proactive maintenance scheduling',
// //         detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
// //         backgroundImage: '/maintenance-alerts.jpg'
// //       }
// //     ],
// //     rightContent: 'Real-time monitoring and management of diesel generators with remote control, fuel level tracking, and performance analytics.'
// //   },
// //   { 
// //     id: 'meteorology', 
// //     label: 'Meteorology',
// //     activeIcon: '/white3.png',
// //     inactiveIcon: '/black3.png',
// //     solutions: [
// //       {
// //         title: 'Weather Station Monitoring',
// //         description: 'Real-time weather data collection',
// //         detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
// //         backgroundImage: '/weather-station.jpg'
// //       },
// //       {
// //         title: 'Environmental Sensors',
// //         description: 'Comprehensive environmental monitoring',
// //         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
// //         backgroundImage: '/environmental-sensors.jpg'
// //       }
// //     ],
// //     rightContent: 'Advanced weather monitoring and environmental data collection solutions for accurate forecasting and climate analysis.'
// //   },
// //   { 
// //     id: 'water', 
// //     label: 'Water',
// //     activeIcon: '/white4.png',
// //     inactiveIcon: '/black4.png',
// //     solutions: [
// //       {
// //         title: 'Water Quality Monitoring',
// //         description: 'Real-time water quality assessment',
// //         detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
// //         backgroundImage: '/water-quality.jpg'
// //       },
// //       {
// //         title: 'Leak Detection System',
// //         description: 'Early detection of water leaks',
// //         detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
// //         backgroundImage: '/leak-detection.jpg'
// //       },
// //       {
// //         title: 'Smart Metering',
// //         description: 'Automated water consumption tracking',
// //         detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
// //         backgroundImage: '/smart-metering.jpg'
// //       }
// //     ],
// //     rightContent: 'Smart water monitoring and distribution systems with leak detection, quality monitoring, and consumption analytics.'
// //   },
// //   { 
// //     id: 'mobility', 
// //     label: 'Mobility',
// //     activeIcon: '/white5.png',
// //     inactiveIcon: '/black5.png',
// //     solutions: [
// //       {
// //         title: 'Fleet Management',
// //         description: 'Real-time vehicle tracking and management',
// //         detailedContent: 'Comprehensive fleet management with GPS tracking, route optimization, and driver behavior monitoring.',
// //         backgroundImage: '/fleet-management.jpg'
// //       },
// //       {
// //         title: 'Smart Parking',
// //         description: 'Intelligent parking space management',
// //         detailedContent: 'Smart parking solutions with space detection, reservation systems, and payment automation.',
// //         backgroundImage: '/smart-parking.jpg'
// //       }
// //     ],
// //     rightContent: 'IoT solutions for smart transportation, fleet management, and connected vehicles with real-time tracking and optimization.'
// //   },
// //   { 
// //     id: 'smart-tank', 
// //     label: 'Smart Tank',
// //     activeIcon: '/white6.png',
// //     inactiveIcon: '/black6.png',
// //     solutions: [
// //       {
// //         title: 'Tank Level Monitoring',
// //         description: 'Real-time liquid level tracking',
// //         detailedContent: 'Advanced tank level monitoring systems with ultrasonic sensors and real-time inventory management.',
// //         backgroundImage: '/tank-monitoring.jpg'
// //       },
// //       {
// //         title: 'Automated Inventory Management',
// //         description: 'Smart inventory control and alerts',
// //         detailedContent: 'Automated inventory tracking with predictive refill alerts and consumption analytics.',
// //         backgroundImage: '/inventory-management.jpg'
// //       },
// //       {
// //         title: 'Leak Detection & Prevention',
// //         description: 'Early leak detection and containment',
// //         detailedContent: 'Comprehensive leak detection systems with automatic shutoff and emergency response protocols.',
// //         backgroundImage: '/tank-leak-detection.jpg'
// //       }
// //     ],
// //     rightContent: 'Intelligent tank monitoring solutions for industrial and commercial applications with real-time level tracking and automated management.'
// //   },
// //   { 
// //     id: 'healthcare', 
// //     label: 'Healthcare',
// //     activeIcon: '/white7.png',
// //     inactiveIcon: '/black7.png',
// //     solutions: [
// //       {
// //         title: 'Medical Equipment Monitoring',
// //         description: 'Real-time equipment status tracking',
// //         detailedContent: 'Continuous monitoring of medical equipment performance, usage patterns, and maintenance needs.',
// //         backgroundImage: '/medical-equipment.jpg'
// //       },
// //       {
// //         title: 'Patient Monitoring Systems',
// //         description: 'Remote patient health tracking',
// //         detailedContent: 'IoT-enabled patient monitoring with vital signs tracking and emergency alert systems.',
// //         backgroundImage: '/patient-monitoring.jpg'
// //       },
// //       {
// //         title: 'Pharmacy Inventory Management',
// //         description: 'Smart medication tracking',
// //         detailedContent: 'Automated pharmacy inventory management with expiry tracking and restock alerts.',
// //         backgroundImage: '/pharmacy-inventory.jpg'
// //       },
// //       {
// //         title: 'Hospital Asset Tracking',
// //         description: 'Real-time medical equipment location',
// //         detailedContent: 'GPS and RFID-based asset tracking for hospital equipment and supplies.',
// //         backgroundImage: '/hospital-assets.jpg'
// //       }
// //     ],
// //     rightContent: 'Healthcare IoT solutions for patient monitoring, medical equipment tracking, and hospital operations optimization.'
// //   },
// //   { 
// //     id: 'industry-4', 
// //     label: 'Industry 4.0',
// //     activeIcon: '/white8.png',
// //     inactiveIcon: '/black8.png',
// //     solutions: [
// //       {
// //         title: 'Smart Factory Automation',
// //         description: 'Automated production line monitoring',
// //         detailedContent: 'Comprehensive factory automation with real-time production tracking and quality control.',
// //         backgroundImage: '/smart-factory.jpg'
// //       },
// //       {
// //         title: 'Predictive Maintenance',
// //         description: 'AI-driven equipment maintenance',
// //         detailedContent: 'Predictive maintenance systems using machine learning to prevent equipment failures.',
// //         backgroundImage: '/predictive-maintenance.jpg'
// //       },
// //       {
// //         title: 'Digital Twin Solutions',
// //         description: 'Virtual replica of physical assets',
// //         detailedContent: 'Digital twin technology for simulation, testing, and optimization of industrial processes.',
// //         backgroundImage: '/digital-twin.jpg'
// //       },
// //       {
// //         title: 'Industrial Robotics Monitoring',
// //         description: 'Real-time robot performance tracking',
// //         detailedContent: 'Continuous monitoring of industrial robots with performance analytics and maintenance scheduling.',
// //         backgroundImage: '/robotics-monitoring.jpg'
// //       }
// //     ],
// //     rightContent: 'Industry 4.0 solutions for smart manufacturing, automation, and digital transformation of industrial processes.'
// //   },
// //   { 
// //     id: 'atm', 
// //     label: 'ATM',
// //     activeIcon: '/white9.png',
// //     inactiveIcon: '/black9.png',
// //     solutions: [
// //       {
// //         title: 'ATM Cash Monitoring',
// //         description: 'Real-time cash level tracking',
// //         detailedContent: 'Smart cash monitoring systems with predictive refill alerts and cash optimization.',
// //         backgroundImage: '/atm-cash.jpg'
// //       },
// //       {
// //         title: 'ATM Security Monitoring',
// //         description: 'Comprehensive security surveillance',
// //         detailedContent: 'Multi-layered security monitoring with intrusion detection and emergency response.',
// //         backgroundImage: '/atm-security.jpg'
// //       },
// //       {
// //         title: 'ATM Network Management',
// //         description: 'Centralized ATM operations',
// //         detailedContent: 'Centralized management of ATM networks with performance monitoring and remote diagnostics.',
// //         backgroundImage: '/atm-network.jpg'
// //       },
// //       {
// //         title: 'Transaction Analytics',
// //         description: 'Smart transaction monitoring',
// //         detailedContent: 'Advanced transaction analytics with pattern recognition and fraud detection.',
// //         backgroundImage: '/transaction-analytics.jpg'
// //       }
// //     ],
// //     rightContent: 'IoT solutions for ATM monitoring, security, cash management, and network operations optimization.'
// //   },
// //   { 
// //     id: 'data-center', 
// //     label: 'Data Center',
// //     activeIcon: '/white10.png',
// //     inactiveIcon: '/black10.png',
// //     solutions: [
// //       {
// //         title: 'Server Room Monitoring',
// //         description: 'Comprehensive server environment tracking',
// //         detailedContent: 'Real-time monitoring of server room conditions including temperature, humidity, and power consumption.',
// //         backgroundImage: '/server-room.jpg'
// //       },
// //       {
// //         title: 'Cooling System Optimization',
// //         description: 'Smart cooling management',
// //         detailedContent: 'Intelligent cooling system control with energy optimization and predictive maintenance.',
// //         backgroundImage: '/cooling-system.jpg'
// //       },
// //       {
// //         title: 'Power Usage Monitoring',
// //         description: 'Real-time energy consumption tracking',
// //         detailedContent: 'Comprehensive power monitoring with consumption analytics and efficiency optimization.',
// //         backgroundImage: '/power-usage.jpg'
// //       },
// //       {
// //         title: 'Security & Access Control',
// //         description: 'Multi-layer security monitoring',
// //         detailedContent: 'Advanced security systems with access control, surveillance, and intrusion detection.',
// //         backgroundImage: '/datacenter-security.jpg'
// //       }
// //     ],
// //     rightContent: 'Data center monitoring solutions for infrastructure management, energy optimization, and security compliance.'
// //   },
// //   { 
// //     id: 'oil', 
// //     label: 'Oil & Gas',
// //     activeIcon: '/white11.png',
// //     inactiveIcon: '/black11.png',
// //     solutions: [
// //       {
// //         title: 'Pipeline Monitoring',
// //         description: 'Real-time pipeline integrity tracking',
// //         detailedContent: 'Comprehensive pipeline monitoring with pressure, flow rate, and leak detection systems.',
// //         backgroundImage: '/pipeline-monitoring.jpg'
// //       },
// //       {
// //         title: 'Refinery Process Optimization',
// //         description: 'Smart refinery operations',
// //         detailedContent: 'IoT-enabled refinery process optimization with real-time analytics and control systems.',
// //         backgroundImage: '/refinery.jpg'
// //       },
// //       {
// //         title: 'Offshore Platform Monitoring',
// //         description: 'Remote offshore operations',
// //         detailedContent: 'Remote monitoring of offshore platforms with equipment tracking and environmental conditions.',
// //         backgroundImage: '/offshore-platform.jpg'
// //       },
// //       {
// //         title: 'Tank Farm Management',
// //         description: 'Bulk storage optimization',
// //         detailedContent: 'Smart tank farm management with inventory tracking and automated operations.',
// //         backgroundImage: '/tank-farm.jpg'
// //       }
// //     ],
// //     rightContent: 'Oil and gas IoT solutions for upstream, midstream, and downstream operations with safety and efficiency optimization.'
// //   },
// //   { 
// //     id: 'cold-chain', 
// //     label: 'Cold Chain',
// //     activeIcon: '/white12.png',
// //     inactiveIcon: '/black12.png',
// //     solutions: [
// //       {
// //         title: 'Temperature Monitoring',
// //         description: 'Real-time temperature tracking',
// //         detailedContent: 'Continuous temperature monitoring with alerts for deviations and compliance reporting.',
// //         backgroundImage: '/temperature-monitoring.jpg'
// //       },
// //       {
// //         title: 'Cold Storage Management',
// //         description: 'Smart refrigeration control',
// //         detailedContent: 'Intelligent cold storage management with energy optimization and inventory tracking.',
// //         backgroundImage: '/cold-storage.jpg'
// //       },
// //       {
// //         title: 'Transportation Monitoring',
// //         description: 'In-transit condition tracking',
// //         detailedContent: 'Real-time monitoring of temperature-sensitive goods during transportation.',
// //         backgroundImage: '/cold-transport.jpg'
// //       },
// //       {
// //         title: 'Quality Assurance',
// //         description: 'Product quality compliance',
// //         detailedContent: 'Comprehensive quality assurance with condition monitoring and compliance documentation.',
// //         backgroundImage: '/quality-assurance.jpg'
// //       }
// //     ],
// //     rightContent: 'Cold chain monitoring solutions for temperature-sensitive products with quality assurance and compliance management.'
// //   },
// //   { 
// //     id: 'utilities', 
// //     label: 'Utilities',
// //     activeIcon: '/white13.png',
// //     inactiveIcon: '/black13.png',
// //     solutions: [
// //       {
// //         title: 'Smart Grid Management',
// //         description: 'Intelligent power distribution',
// //         detailedContent: 'Smart grid solutions with real-time monitoring, load balancing, and outage management.',
// //         backgroundImage: '/smart-grid.jpg'
// //       },
// //       {
// //         title: 'Water Distribution Monitoring',
// //         description: 'Smart water network management',
// //         detailedContent: 'Comprehensive water distribution monitoring with pressure management and leak detection.',
// //         backgroundImage: '/water-distribution.jpg'
// //       },
// //       {
// //         title: 'Gas Pipeline Monitoring',
// //         description: 'Natural gas distribution tracking',
// //         detailedContent: 'Real-time gas pipeline monitoring with flow control and safety systems.',
// //         backgroundImage: '/gas-pipeline.jpg'
// //       },
// //       {
// //         title: 'Utility Asset Management',
// //         description: 'Infrastructure lifecycle tracking',
// //         detailedContent: 'Complete utility asset management with maintenance scheduling and performance analytics.',
// //         backgroundImage: '/utility-assets.jpg'
// //       }
// //     ],
// //     rightContent: 'Utility sector IoT solutions for smart grid, water distribution, and infrastructure management.'
// //   },
// //   { 
// //     id: 'renewables', 
// //     label: 'Renewables',
// //     activeIcon: '/white14.png',
// //     inactiveIcon: '/black14.png',
// //     solutions: [
// //       {
// //         title: 'Solar Farm Monitoring',
// //         description: 'Photovoltaic system optimization',
// //         detailedContent: 'Comprehensive solar farm monitoring with performance analytics and maintenance alerts.',
// //         backgroundImage: '/solar-farm.jpg'
// //       },
// //       {
// //         title: 'Wind Turbine Monitoring',
// //         description: 'Turbine performance tracking',
// //         detailedContent: 'Real-time wind turbine monitoring with vibration analysis and predictive maintenance.',
// //         backgroundImage: '/wind-turbine.jpg'
// //       },
// //       {
// //         title: 'Energy Storage Management',
// //         description: 'Battery system optimization',
// //         detailedContent: 'Smart energy storage management with charge optimization and lifecycle tracking.',
// //         backgroundImage: '/energy-storage.jpg'
// //       },
// //       {
// //         title: 'Renewable Energy Analytics',
// //         description: 'Production and consumption insights',
// //         detailedContent: 'Advanced analytics for renewable energy production, consumption, and grid integration.',
// //         backgroundImage: '/renewable-analytics.jpg'
// //       }
// //     ],
// //     rightContent: 'Renewable energy IoT solutions for solar, wind, and energy storage systems with performance optimization.'
// //   }
// // ];

// //   const tabsPerView = 4;

// //   const nextTab = () => {
// //     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
// //     const nextIndex = (currentIndex + 1) % tabs.length;
// //     setActiveTab(tabs[nextIndex].id);
// //     setActiveSolution(0);
    
// //     if (nextIndex >= startIndex + tabsPerView) {
// //       setStartIndex(startIndex + 1);
// //     }
// //   };

// //   const prevTab = () => {
// //     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
// //     const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
// //     setActiveTab(tabs[prevIndex].id);
// //     setActiveSolution(0);
    
// //     if (prevIndex < startIndex) {
// //       setStartIndex(startIndex - 1);
// //     }
// //   };

// //   const handleTabClick = (tabId) => {
// //     const clickedIndex = tabs.findIndex(tab => tab.id === tabId);
// //     setActiveTab(tabId);
// //     setActiveSolution(0);
    
// //     if (clickedIndex >= startIndex + tabsPerView) {
// //       setStartIndex(clickedIndex - tabsPerView + 1);
// //     } else if (clickedIndex < startIndex) {
// //       setStartIndex(clickedIndex);
// //     }
// //   };

// //   const handleSolutionClick = (index) => {
// //     setActiveSolution(index);
// //   };

// //   const visibleTabs = tabs.slice(startIndex, startIndex + tabsPerView);
// //   const activeTabData = tabs.find(tab => tab.id === activeTab);

// //   return (
// //     <div className="mt-16 sm:mt-20 lg:mt-36 mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 min-h-screen">
// //       {/* Heading */}
// //       <h1 className="text-2xl sm:text-3xl 2xl:text-[36px] lg:text-[48px]  text-center text-gray-900 mb-6 sm:mb-8 lg:mb-12 px-2">
// //         Explore How IoT Solutions Transform Operations
// //       </h1>
      
// //       {/* Tabs Container */}
// //       <div className="w-full max-w-[70rem] xl:max-w-[90rem] mx-auto mb-3 sm:mb-4">
// //         <div className="flex space-x-1 border-b border-gray-200">
// //           {visibleTabs.map((tab) => (
// //             <button
// //               key={tab.id}
// //               className={`w-full py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base xl:text-[20.27px] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
// //                 activeTab === tab.id
// //                   ? 'bg-[#4D8FD1] text-white border-blue-500 shadow-md'
// //                   : 'bg-[#F0F1F2] text-black hover:text-gray-900 hover:bg-gray-100'
// //               }`}
// //               onClick={() => handleTabClick(tab.id)}
// //             >
// //               <img 
// //                 src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon} 
// //                 alt={`${tab.label} icon`}
// //                 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 object-contain flex-shrink-0"
// //               />
// //               <span className="hidden xs:inline sm:inline text-xs sm:text-sm lg:text-base xl:text-[20.27px]">
// //                 {tab.label}
// //               </span>
// //               {/* <span className="inline xs:hidden text-[10px] sm:text-xs">
// //                 {tab.label.split(' ')[0]}
// //               </span> */}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Main Content Area with Two Columns */}
// //       <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 w-full px-2 sm:px-0">
// //         {/* Left Arrow */}
// //         <button
// //           onClick={prevTab}
// //           disabled={startIndex === 0 && activeTab === tabs[0].id}
// //           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-2 sm:p-3 shadow-md transition-all duration-200 ${
// //             startIndex === 0 && activeTab === tabs[0].id 
// //               ? 'opacity-50 cursor-not-allowed' 
// //               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
// //           }`}
// //         >
// //           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //           </svg>
// //         </button>

// //         {/* Two Column Content Area */}
// //         <div className="w-full max-w-[70rem] xl:max-w-[90rem] bg-white shadow-lg min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
// //           <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-6 mt-4 sm:mt-6">
// //             {/* Left Column - Solutions List */}
// //             <div className="w-full lg:w-[25%] xl:w-[30%] inline-flex flex-col justify-start items-start gap-2 sm:gap-3 lg:gap-4">
// //               {activeTabData?.solutions?.map((solution, index) => (
// //                 <div 
// //                   key={index}
// //                   className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4 lg:gap-5 cursor-pointer w-full"
// //                   onClick={() => handleSolutionClick(index)}
// //                 >
// //                   <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-3 lg:gap-4">
// //                     <div className="self-stretch inline-flex items-center justify-between w-full">
// //                       <div className={`flex-1 text-sm sm:text-base lg:text-lg xl:text-[21.12px] font-normal leading-5 sm:leading-6 lg:leading-7 ${
// //                         activeSolution === index ? 'text-sky-500' : 'text-black'
// //                       }`}>
// //                         {solution.title}
// //                       </div>
// //                       <div className="w-2 h-3 sm:w-3 sm:h-4 lg:w-3 lg:h-5 flex-shrink-0 ml-2">
// //                         <img 
// //                           src={activeSolution === index ? "/Bluevector.png" : "/Blackvector.png"} 
// //                           alt="icon"
// //                           className="w-full h-full object-contain"
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className={`w-full text-xs sm:text-sm lg:text-[14.84px] font-medium leading-4 sm:leading-5 ${
// //                       activeSolution === index ? 'text-slate-600' : 'text-neutral-700'
// //                     }`}>
// //                       {solution.description}
// //                     </div>
// //                   </div>
// //                   <div className={`self-stretch h-0 w-full ${
// //                     activeSolution === index 
// //                       ? 'border-[0.80px] border-transparent [border-image:linear-gradient(90deg,_rgba(22,148,246,0)_0%,_rgba(22,148,246,0.51)_51%,_rgba(22,148,246,0)_100%)_1]' 
// //                       : 'outline outline-1 outline-offset-[-0.50px] outline-neutral-300'
// //                   }`}></div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Right Column - Background Image with Content Overlay */}
// //             <div 
// //               className="w-full lg:w-[75%] xl:w-[70%] relative h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] overflow-hidden bg-cover bg-center"
// //               style={{
// //                 backgroundImage: `url(${activeTabData?.solutions?.[activeSolution]?.backgroundImage || '/e1.jpg'})`
// //               }}
// //             >
// //               {/* Content Overlay - Left Side */}
// //               <div className="relative h-full w-full lg:max-w-[400px] xl:max-w-[450px] py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 flex flex-col justify-between bg-white/90 text-[#232C33]">
// //                 <div className="space-y-3 sm:space-y-4 lg:space-y-6">
// //                   {/* Title Badge */}
// //                   <div className="flex justify-center">
// //                     <div className="inline-block bg-white/95 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg backdrop-blur-sm">
// //                       <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 text-center">
// //                         {activeTabData?.solutions?.[activeSolution]?.title}
// //                       </h3>
// //                     </div>
// //                   </div>

// //                   {/* Key Features List */}
// //                   <div className="space-y-2 sm:space-y-3 lg:space-y-4">
// //                     <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
// //                       <li className="flex items-start gap-2 sm:gap-3">
// //                         <span className="text-[#4D8FD1] text-sm sm:text-base lg:text-lg mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
// //                         <span className="text-[#232C33] text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
// //                           Ensure 100% tower uptime with uninterrupted power
// //                         </span>
// //                       </li>
// //                       <li className="flex items-start gap-2 sm:gap-3">
// //                         <span className="text-[#4D8FD1] text-sm sm:text-base lg:text-lg mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
// //                         <span className="text-[#232C33] text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
// //                           Reduce diesel costs by up to 30% with IoT fuel monitoring
// //                         </span>
// //                       </li>
// //                       <li className="flex items-start gap-2 sm:gap-3">
// //                         <span className="text-[#4D8FD1] text-sm sm:text-base lg:text-lg mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
// //                         <span className="text-[#232C33] text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
// //                           Gain real-time visibility anytime, anywhere
// //                         </span>
// //                       </li>
// //                       <li className="flex items-start gap-2 sm:gap-3">
// //                         <span className="text-[#4D8FD1] text-sm sm:text-base lg:text-lg mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
// //                         <span className="text-[#232C33] text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
// //                           Secure towers with 24×7 smart surveillance alerts
// //                         </span>
// //                       </li>
// //                       <li className="flex items-start gap-2 sm:gap-3">
// //                         <span className="text-[#4D8FD1] text-sm sm:text-base lg:text-lg mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
// //                         <span className="text-[#232C33] text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
// //                           Maximize uptime with proactive battery management
// //                         </span>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>

// //                 {/* Bottom CTA */}
// //                 <div className="flex justify-center">
// //                   <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 lg:pt-6 border-t border-white/30">
// //                     <span className="text-xs sm:text-sm font-medium text-center">
// //                       Explore the<br/> approach
// //                     </span>
// //                     <button className="bg-[#4D8FD1] hover:bg-[#3d7bb8] text-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
// //                       Learn More
// //                       <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Number badge in top-right corner */}
// //               <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg">
// //                 <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800">{activeSolution + 1}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={nextTab}
// //           disabled={startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id}
// //           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-2 sm:p-3 shadow-md transition-all duration-200 ${
// //             startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id
// //               ? 'opacity-50 cursor-not-allowed'
// //               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
// //           }`}
// //         >
// //           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //           </svg>
// //         </button>
// //       </div>

      
// //     </div>
// //   )
// // }

// // export default Iot

// 'use client'
// import React, { useState } from 'react'

// const Iot = () => {
//   const [activeTab, setActiveTab] = useState('telecom');
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeSolution, setActiveSolution] = useState(0);

//    const tabs = [
//   { 
//     id: 'telecom', 
//     label: 'Telecom',
//     activeIcon: '/white1.png',
//     inactiveIcon: '/black1.png',
//     solutions: [
//       {
//         title: 'Telecom Monitoring Solution',
//         description: 'Real-time monitoring to maximize uptime',
//         detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
//         backgroundImage: '/e1.jpg'
//       },
//       {
//         title: 'Fuel Monitoring Solution',
//         description: 'Prevent loss with precise consumption tracking',
//         detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
//         backgroundImage: '/fuel-monitoring.jpg'
//       },
//       {
//         title: 'Battery Monitoring Solution',
//         description: 'Protect uptime with proactive battery health checks',
//         detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
//         backgroundImage: '/battery-monitoring.jpg'
//       },
//       {
//         title: 'Mobile Fuel Dispenser',
//         description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
//         detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
//         backgroundImage: '/mobile-fuel.jpg'
//       }
//     ],
//     rightContent: 'IoT solutions for telecommunications infrastructure and operations including network monitoring, equipment management, and predictive maintenance.'
//   },
//   { 
//     id: 'diesel', 
//     label: 'Diesel Generator',
//     activeIcon: '/white2.png',
//     inactiveIcon: '/black2.png',
//     solutions: [
//       {
//         title: 'Diesel Generator Monitoring',
//         description: 'Boost efficiency with remote generator monitoring solution',
//         detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
//         backgroundImage: '/generator-monitoring.jpg'
//       },
//       {
//         title: 'Day Tank Automation',
//         description: 'Automated, real-time fuel management for uninterrupted operations.',
//         detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
//         backgroundImage: '/fuel-tracking.jpg'
//       },
//       {
//         title: 'Rental DG Monitoring',
//         description: 'Optimize your DG rentals with smart monitoring',
//         detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
//         backgroundImage: '/maintenance-alerts.jpg'
//       },
//       {
//         title: 'Diesel Level Monitoring',
//         description: 'Smart diesel monitoring to keep operations running smoothly.',
//         detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
//         backgroundImage: '/maintenance-alerts.jpg'
//       }
//     ],
//     rightContent: 'Real-time monitoring and management of diesel generators with remote control, fuel level tracking, and performance analytics.'
//   },
//   { 
//     id: 'meteorology', 
//     label: 'Meteorology',
//     activeIcon: '/white3.png',
//     inactiveIcon: '/black3.png',
//     solutions: [
//       {
//         title: 'Automated Rain Gauge',
//         // description: 'Real-time weather data collection',
//         detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
//         backgroundImage: '/weather-station.jpg'
//       },
//       {
//         title: 'Automated Weather Station',
//         // description: 'Comprehensive environmental monitoring',
//         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//         backgroundImage: '/environmental-sensors.jpg'
//       },
//       {
//         title: 'DWLR With Telemetry',
//         // description: 'Comprehensive environmental monitoring',
//         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//         backgroundImage: '/environmental-sensors.jpg'
//       },
//       {
//         title: 'Flash Flood Early Warning System',
//         // description: 'Comprehensive environmental monitoring',
//         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//         backgroundImage: '/environmental-sensors.jpg'
//       },
//       {
//         title: 'Urban Flood Early Warning System',
//         // description: 'Comprehensive environmental monitoring',
//         detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//         backgroundImage: '/environmental-sensors.jpg'
//       }
//     ],
//     rightContent: 'Advanced weather monitoring and environmental data collection solutions for accurate forecasting and climate analysis.'
//   },
//   { 
//     id: 'water', 
//     label: 'Water',
//     activeIcon: '/white4.png',
//     inactiveIcon: '/black4.png',
//     solutions: [
//       {
//         title: 'Water Process Automation',
//         description: 'Smart automation for efficient and reliable water supply.',
//         detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//         backgroundImage: '/water-quality.jpg'
//       },
//       {
//         title: 'Waste Water Monitoring',
//         description: 'Detect and prevent wastewater disruptions in real time',
//         detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//         backgroundImage: '/leak-detection.jpg'
//       },
//       {
//         title: 'Municipal Sump Automation',
//         description: 'Automate sump operations and stop overflows instantly.',
//         detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
//         backgroundImage: '/smart-metering.jpg'
//       }
//     ],
//     rightContent: 'Smart water monitoring and distribution systems with leak detection, quality monitoring, and consumption analytics.'
//   },
//   { 
//     id: 'mobility', 
//     label: 'Mobility',
//     activeIcon: '/white5.png',
//     inactiveIcon: '/black5.png',
//     solutions: [
//       {
//         title: 'Fleet Management',
//         description: 'Real-time vehicle tracking and management',
//         detailedContent: 'Comprehensive fleet management with GPS tracking, route optimization, and driver behavior monitoring.',
//         backgroundImage: '/fleet-management.jpg'
//       },
//       {
//         title: 'Smart Parking',
//         description: 'Intelligent parking space management',
//         detailedContent: 'Smart parking solutions with space detection, reservation systems, and payment automation.',
//         backgroundImage: '/smart-parking.jpg'
//       }
//     ],
//     rightContent: 'IoT solutions for smart transportation, fleet management, and connected vehicles with real-time tracking and optimization.'
//   },
//   { 
//     id: 'smart-tank', 
//     label: 'Smart Tank',
//     activeIcon: '/white6.png',
//     inactiveIcon: '/black6.png',
//     solutions: [
//       {
//         title: 'Tank Level Monitoring',
//         description: 'Real-time liquid level tracking',
//         detailedContent: 'Advanced tank level monitoring systems with ultrasonic sensors and real-time inventory management.',
//         backgroundImage: '/tank-monitoring.jpg'
//       },
//       {
//         title: 'Automated Inventory Management',
//         description: 'Smart inventory control and alerts',
//         detailedContent: 'Automated inventory tracking with predictive refill alerts and consumption analytics.',
//         backgroundImage: '/inventory-management.jpg'
//       },
//       {
//         title: 'Leak Detection & Prevention',
//         description: 'Early leak detection and containment',
//         detailedContent: 'Comprehensive leak detection systems with automatic shutoff and emergency response protocols.',
//         backgroundImage: '/tank-leak-detection.jpg'
//       }
//     ],
//     rightContent: 'Intelligent tank monitoring solutions for industrial and commercial applications with real-time level tracking and automated management.'
//   },
//   { 
//     id: 'healthcare', 
//     label: 'Healthcare',
//     activeIcon: '/white7.png',
//     inactiveIcon: '/black7.png',
//     solutions: [
//       {
//         title: 'Medical Equipment Monitoring',
//         description: 'Real-time equipment status tracking',
//         detailedContent: 'Continuous monitoring of medical equipment performance, usage patterns, and maintenance needs.',
//         backgroundImage: '/medical-equipment.jpg'
//       },
//       {
//         title: 'Patient Monitoring Systems',
//         description: 'Remote patient health tracking',
//         detailedContent: 'IoT-enabled patient monitoring with vital signs tracking and emergency alert systems.',
//         backgroundImage: '/patient-monitoring.jpg'
//       },
//       {
//         title: 'Pharmacy Inventory Management',
//         description: 'Smart medication tracking',
//         detailedContent: 'Automated pharmacy inventory management with expiry tracking and restock alerts.',
//         backgroundImage: '/pharmacy-inventory.jpg'
//       },
//       {
//         title: 'Hospital Asset Tracking',
//         description: 'Real-time medical equipment location',
//         detailedContent: 'GPS and RFID-based asset tracking for hospital equipment and supplies.',
//         backgroundImage: '/hospital-assets.jpg'
//       }
//     ],
//     rightContent: 'Healthcare IoT solutions for patient monitoring, medical equipment tracking, and hospital operations optimization.'
//   },
//   { 
//     id: 'industry-4', 
//     label: 'Industry 4.0',
//     activeIcon: '/white8.png',
//     inactiveIcon: '/black8.png',
//     solutions: [
//       {
//         title: 'Smart Factory Automation',
//         description: 'Automated production line monitoring',
//         detailedContent: 'Comprehensive factory automation with real-time production tracking and quality control.',
//         backgroundImage: '/smart-factory.jpg'
//       },
//       {
//         title: 'Predictive Maintenance',
//         description: 'AI-driven equipment maintenance',
//         detailedContent: 'Predictive maintenance systems using machine learning to prevent equipment failures.',
//         backgroundImage: '/predictive-maintenance.jpg'
//       },
//       {
//         title: 'Digital Twin Solutions',
//         description: 'Virtual replica of physical assets',
//         detailedContent: 'Digital twin technology for simulation, testing, and optimization of industrial processes.',
//         backgroundImage: '/digital-twin.jpg'
//       },
//       {
//         title: 'Industrial Robotics Monitoring',
//         description: 'Real-time robot performance tracking',
//         detailedContent: 'Continuous monitoring of industrial robots with performance analytics and maintenance scheduling.',
//         backgroundImage: '/robotics-monitoring.jpg'
//       }
//     ],
//     rightContent: 'Industry 4.0 solutions for smart manufacturing, automation, and digital transformation of industrial processes.'
//   },
//   { 
//     id: 'atm', 
//     label: 'ATM',
//     activeIcon: '/white9.png',
//     inactiveIcon: '/black9.png',
//     solutions: [
//       {
//         title: 'ATM Cash Monitoring',
//         description: 'Real-time cash level tracking',
//         detailedContent: 'Smart cash monitoring systems with predictive refill alerts and cash optimization.',
//         backgroundImage: '/atm-cash.jpg'
//       },
//       {
//         title: 'ATM Security Monitoring',
//         description: 'Comprehensive security surveillance',
//         detailedContent: 'Multi-layered security monitoring with intrusion detection and emergency response.',
//         backgroundImage: '/atm-security.jpg'
//       },
//       {
//         title: 'ATM Network Management',
//         description: 'Centralized ATM operations',
//         detailedContent: 'Centralized management of ATM networks with performance monitoring and remote diagnostics.',
//         backgroundImage: '/atm-network.jpg'
//       },
//       {
//         title: 'Transaction Analytics',
//         description: 'Smart transaction monitoring',
//         detailedContent: 'Advanced transaction analytics with pattern recognition and fraud detection.',
//         backgroundImage: '/transaction-analytics.jpg'
//       }
//     ],
//     rightContent: 'IoT solutions for ATM monitoring, security, cash management, and network operations optimization.'
//   },
//   { 
//     id: 'data-center', 
//     label: 'Data Center',
//     activeIcon: '/white10.png',
//     inactiveIcon: '/black10.png',
//     solutions: [
//       {
//         title: 'Server Room Monitoring',
//         description: 'Comprehensive server environment tracking',
//         detailedContent: 'Real-time monitoring of server room conditions including temperature, humidity, and power consumption.',
//         backgroundImage: '/server-room.jpg'
//       },
//       {
//         title: 'Cooling System Optimization',
//         description: 'Smart cooling management',
//         detailedContent: 'Intelligent cooling system control with energy optimization and predictive maintenance.',
//         backgroundImage: '/cooling-system.jpg'
//       },
//       {
//         title: 'Power Usage Monitoring',
//         description: 'Real-time energy consumption tracking',
//         detailedContent: 'Comprehensive power monitoring with consumption analytics and efficiency optimization.',
//         backgroundImage: '/power-usage.jpg'
//       },
//       {
//         title: 'Security & Access Control',
//         description: 'Multi-layer security monitoring',
//         detailedContent: 'Advanced security systems with access control, surveillance, and intrusion detection.',
//         backgroundImage: '/datacenter-security.jpg'
//       }
//     ],
//     rightContent: 'Data center monitoring solutions for infrastructure management, energy optimization, and security compliance.'
//   },
//   { 
//     id: 'oil', 
//     label: 'Oil & Gas',
//     activeIcon: '/white11.png',
//     inactiveIcon: '/black11.png',
//     solutions: [
//       {
//         title: 'Pipeline Monitoring',
//         description: 'Real-time pipeline integrity tracking',
//         detailedContent: 'Comprehensive pipeline monitoring with pressure, flow rate, and leak detection systems.',
//         backgroundImage: '/pipeline-monitoring.jpg'
//       },
//       {
//         title: 'Refinery Process Optimization',
//         description: 'Smart refinery operations',
//         detailedContent: 'IoT-enabled refinery process optimization with real-time analytics and control systems.',
//         backgroundImage: '/refinery.jpg'
//       },
//       {
//         title: 'Offshore Platform Monitoring',
//         description: 'Remote offshore operations',
//         detailedContent: 'Remote monitoring of offshore platforms with equipment tracking and environmental conditions.',
//         backgroundImage: '/offshore-platform.jpg'
//       },
//       {
//         title: 'Tank Farm Management',
//         description: 'Bulk storage optimization',
//         detailedContent: 'Smart tank farm management with inventory tracking and automated operations.',
//         backgroundImage: '/tank-farm.jpg'
//       }
//     ],
//     rightContent: 'Oil and gas IoT solutions for upstream, midstream, and downstream operations with safety and efficiency optimization.'
//   },
//   { 
//     id: 'cold-chain', 
//     label: 'Cold Chain',
//     activeIcon: '/white12.png',
//     inactiveIcon: '/black12.png',
//     solutions: [
//       {
//         title: 'Temperature Monitoring',
//         description: 'Real-time temperature tracking',
//         detailedContent: 'Continuous temperature monitoring with alerts for deviations and compliance reporting.',
//         backgroundImage: '/temperature-monitoring.jpg'
//       },
//       {
//         title: 'Cold Storage Management',
//         description: 'Smart refrigeration control',
//         detailedContent: 'Intelligent cold storage management with energy optimization and inventory tracking.',
//         backgroundImage: '/cold-storage.jpg'
//       },
//       {
//         title: 'Transportation Monitoring',
//         description: 'In-transit condition tracking',
//         detailedContent: 'Real-time monitoring of temperature-sensitive goods during transportation.',
//         backgroundImage: '/cold-transport.jpg'
//       },
//       {
//         title: 'Quality Assurance',
//         description: 'Product quality compliance',
//         detailedContent: 'Comprehensive quality assurance with condition monitoring and compliance documentation.',
//         backgroundImage: '/quality-assurance.jpg'
//       }
//     ],
//     rightContent: 'Cold chain monitoring solutions for temperature-sensitive products with quality assurance and compliance management.'
//   },
//   { 
//     id: 'utilities', 
//     label: 'Utilities',
//     activeIcon: '/white13.png',
//     inactiveIcon: '/black13.png',
//     solutions: [
//       {
//         title: 'Smart Grid Management',
//         description: 'Intelligent power distribution',
//         detailedContent: 'Smart grid solutions with real-time monitoring, load balancing, and outage management.',
//         backgroundImage: '/smart-grid.jpg'
//       },
//       {
//         title: 'Water Distribution Monitoring',
//         description: 'Smart water network management',
//         detailedContent: 'Comprehensive water distribution monitoring with pressure management and leak detection.',
//         backgroundImage: '/water-distribution.jpg'
//       },
//       {
//         title: 'Gas Pipeline Monitoring',
//         description: 'Natural gas distribution tracking',
//         detailedContent: 'Real-time gas pipeline monitoring with flow control and safety systems.',
//         backgroundImage: '/gas-pipeline.jpg'
//       },
//       {
//         title: 'Utility Asset Management',
//         description: 'Infrastructure lifecycle tracking',
//         detailedContent: 'Complete utility asset management with maintenance scheduling and performance analytics.',
//         backgroundImage: '/utility-assets.jpg'
//       }
//     ],
//     rightContent: 'Utility sector IoT solutions for smart grid, water distribution, and infrastructure management.'
//   },
//   { 
//     id: 'renewables', 
//     label: 'Renewables',
//     activeIcon: '/white14.png',
//     inactiveIcon: '/black14.png',
//     solutions: [
//       {
//         title: 'Solar Farm Monitoring',
//         description: 'Photovoltaic system optimization',
//         detailedContent: 'Comprehensive solar farm monitoring with performance analytics and maintenance alerts.',
//         backgroundImage: '/solar-farm.jpg'
//       },
//       {
//         title: 'Wind Turbine Monitoring',
//         description: 'Turbine performance tracking',
//         detailedContent: 'Real-time wind turbine monitoring with vibration analysis and predictive maintenance.',
//         backgroundImage: '/wind-turbine.jpg'
//       },
//       {
//         title: 'Energy Storage Management',
//         description: 'Battery system optimization',
//         detailedContent: 'Smart energy storage management with charge optimization and lifecycle tracking.',
//         backgroundImage: '/energy-storage.jpg'
//       },
//       {
//         title: 'Renewable Energy Analytics',
//         description: 'Production and consumption insights',
//         detailedContent: 'Advanced analytics for renewable energy production, consumption, and grid integration.',
//         backgroundImage: '/renewable-analytics.jpg'
//       }
//     ],
//     rightContent: 'Renewable energy IoT solutions for solar, wind, and energy storage systems with performance optimization.'
//   }
// ];

//   const tabsPerView = 4;

//   const nextTab = () => {
//     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
//     const nextIndex = (currentIndex + 1) % tabs.length;
//     setActiveTab(tabs[nextIndex].id);
//     setActiveSolution(0);
    
//     if (nextIndex >= startIndex + tabsPerView) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const prevTab = () => {
//     const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
//     const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
//     setActiveTab(tabs[prevIndex].id);
//     setActiveSolution(0);
    
//     if (prevIndex < startIndex) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   const handleTabClick = (tabId) => {
//     const clickedIndex = tabs.findIndex(tab => tab.id === tabId);
//     setActiveTab(tabId);
//     setActiveSolution(0);
    
//     if (clickedIndex >= startIndex + tabsPerView) {
//       setStartIndex(clickedIndex - tabsPerView + 1);
//     } else if (clickedIndex < startIndex) {
//       setStartIndex(clickedIndex);
//     }
//   };

//   const handleSolutionClick = (index) => {
//     setActiveSolution(index);
//   };

//   const visibleTabs = tabs.slice(startIndex, startIndex + tabsPerView);
//   const activeTabData = tabs.find(tab => tab.id === activeTab);

//   return (
//     <div className="mt-12 sm:mt-16 lg:mt-28 mx-auto px-2.5 sm:px-3 lg:px-5 xl:px-6 py-5 sm:py-6  min-h-screen">
//       {/* Heading - scaled down by ~20% */}
//       <h1 className="text-xl sm:text-2xl 2xl:text-[29px] lg:text-[38px] text-center text-[#333333] mb-5 sm:mb-6 lg:mb-10 px-1.5">
//         Explore How IoT Solutions Transform Operations
//       </h1>
      
//       {/* Tabs Container - scaled down max-width */}
//       <div className="w-full max-w-[56rem] xl:max-w-[75rem] mx-auto mb-2.5 sm:mb-3">
//         <div className="flex space-x-1 border-b border-gray-200">
//           {visibleTabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`w-full py-1.5 sm:py-2.5 lg:py-3 text-[10px] sm:text-xs lg:text-sm xl:text-[16px] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 ${
//                 activeTab === tab.id
//                   ? 'bg-[#4D8FD1] text-white border-blue-500 shadow-md'
//                   : 'bg-[#F0F1F2] text-[#000000] hover:text-gray-900 hover:bg-gray-100'
//               }`}
//               onClick={() => handleTabClick(tab.id)}
//             >
//               <img 
//                 src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon} 
//                 alt={`${tab.label} icon`}
//                 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-5.5 xl:h-5.5 object-contain flex-shrink-0"
//               />
//               <span className="hidden xs:inline sm:inline text-[10px] sm:text-xs lg:text-sm xl:text-[16px]">
//                 {tab.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
      
//       {/* Main Content Area with Two Columns */}
//       <div className="flex items-center justify-center  gap-1.5 sm:gap-2.5 lg:gap-3 w-full px-1.5 sm:px-0">
//         {/* Left Arrow - scaled down */}
//         <button
//           onClick={prevTab}
//           disabled={startIndex === 0 && activeTab === tabs[0].id}
//           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-1.5 sm:p-2.5  transition-all duration-200 ${
//             startIndex === 0 && activeTab === tabs[0].id 
//               ? 'opacity-50 cursor-not-allowed' 
//               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
//           }`}
//         >
//           <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Two Column Content Area - scaled down */}
//         <div className="w-full max-w-[56rem] xl:max-w-[77rem] bg-white  min-h-[240px] ">
//           <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 lg:gap-5 px-2.5 sm:px-3 lg:px-5 mt-3 sm:mt-5">
//             {/* Left Column - Solutions List */}
//           <div className="w-full lg:w-[15%] xl:w-[20%] inline-flex flex-col justify-start items-start gap-1.5 sm:gap-2.5 lg:gap-3 mr-7">
//   {activeTabData?.solutions?.map((solution, index) => (
//     <div 
//       key={index}
//       className="group self-stretch flex flex-col justify-start items-start gap-2.5 sm:gap-3 lg:gap-4 cursor-pointer w-full"
//     >
//       <div className="w-full flex flex-col justify-start items-start gap-1.5 sm:gap-2.5 lg:gap-3">
        
//         {/* Title + Arrow */}
//         <div className="self-stretch inline-flex items-center justify-between w-full">
//           <div
//             className="flex-1 text-xs sm:text-sm lg:text-base xl:text-[17px] font-normal leading-4 sm:leading-5 lg:leading-6
//                        text-[#000000] group-hover:text-[#1694F6]">
//             {solution.title}
//           </div>

//           <div className="w-1.5 h-2.5 sm:w-2.5 sm:h-3 lg:w-2.5 lg:h-4 flex-shrink-0 ml-1.5">
//             <img 
//               src="/Blackvector.png"
//               alt="icon"
//               className="w-full h-full object-contain group-hover:hidden"
//             />
//             <img 
//               src="/Bluevector.png"
//               alt="icon"
//               className="w-full h-full object-contain hidden group-hover:block"
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div
//           className="w-full text-[10px] sm:text-xs lg:text-[12px] font-medium leading-3 sm:leading-4
//                      text-[#434343] group-hover:text-[#385C78]"
//         >
//           {solution.description}
//         </div>
//       </div>

//       {/* Line underline */}
//       <div
//         className="self-stretch h-0 w-full
//                    outline outline-1 outline-offset-[-0.50px] outline-neutral-300
//                    group-hover:border-[0.80px] group-hover:border-transparent
//                    group-hover:[border-image:linear-gradient(90deg,_rgba(22,148,246,0)_0%,_rgba(22,148,246,0.51)_51%,_rgba(22,148,246,0)_100%)_1]"
//       ></div>
//     </div>
//   ))}
// </div>


//             {/* Right Column - Background Image with Content Overlay - scaled down heights */}
//             <div 
//               className="w-full lg:w-[75%] xl:w-[77%] relative h-[380px]  overflow-hidden bg-cover"
//               style={{
//                 backgroundImage: `url(${activeTabData?.solutions?.[activeSolution]?.backgroundImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'})`
//               }}
//             >
//               {/* Content Overlay - Left Side - scaled down */}
//               <div className="relative h-[380] w-full lg:max-w-[320px] xl:max-w-[350px] py-3 sm:py-5 lg:py-6 px-2.5 sm:px-3 lg:px-2 ml-4 flex flex-col justify-between bg-white/95 text-[#232C33]">
//                 <div className="space-y-2.5 sm:space-y-3 lg:space-y-5">
//                   {/* Title Badge */}
//                   <div className="flex justify-center">
//                     <div className="inline-block bg-white/95 px-2 sm:px-1 py-1 sm:py-1 rounded-[2] shadow-sm backdrop-blur-sm">
//                       <h3 className="text-sm sm:text-base lg:text-[24] xl:text-[21.12]  text-[#000000] text-center">
//                         {activeTabData?.solutions?.[activeSolution]?.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Key Features List - scaled down */}
//                   <div className="space-y-1.5 sm:space-y-2.5 lg:space-y-3">
//                     <ul className="space-y-1 sm:space-y-1 lg:space-y-0">
//                       <li className="flex items-start gap-1 sm:gap-1.5">
//                         <span className="text-[#4D8FD1] text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
//                         <span className="text-[#232C33]  text-xs space-y-1 font-medium ">
//                           Ensure 100% tower uptime with uninterrupted power
//                         </span>
//                       </li>
//                       <li className="flex items-start gap-1 sm:gap-1.5">
//                         <span className="text-[#4D8FD1] text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
//                         <span className="text-[#232C33]  text-xs space-y-1 font-medium">
//                           Reduce diesel costs by up to 30% with IoT fuel monitoring
//                         </span>
//                       </li>
//                       <li className="flex items-start gap-1 sm:gap-1.5">
//                         <span className="text-[#4D8FD1] text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
//                         <span className="text-[#232C33]  text-xs space-y-1 font-medium">
//                           Gain real-time visibility anytime, anywhere
//                         </span>
//                       </li>
//                       <li className="flex items-start gap-1 sm:gap-1.5">
//                         <span className="text-[#4D8FD1] text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
//                         <span className="text-[#232C33]  text-xs space-y-1 font-medium">
//                           Secure towers with 24×7 smart surveillance alerts
//                         </span>
//                       </li>
//                       <li className="flex items-start gap-1 sm:gap-1.5">
//                         <span className="text-[#4D8FD1] text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
//                         <span className="text-[#232C33]  text-xs space-y-1 font-medium">
//                           Maximize uptime with proactive battery management
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Bottom CTA - scaled down */}
//                 <div className="flex justify-center">
//                   <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 pt-2.5 sm:pt-3 lg:pt-5 border-t border-white/30">
//                    <div className="flex items-center justify-center gap-2">
//   <span className="text-[10px] sm:text-xs font-medium text-justify text-[#272727]">
//     Explore the<br/> approach
//   </span>
//   <img 
//     src="/Arrow3.png" 
//     alt="icon" 
//     className="w-4 h-4 sm:w-7 sm:h-9"
//   />
// </div>
//                     <button className="bg-[#1694F6] hover:bg-[#3d7bb8] shadow-sm text-white px-2.5 sm:px-3 lg:px-2 py-1 sm:py-1.5  font-medium transition-colors duration-200 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs">
//                       Learn More
//                       {/* <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg> */}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Number badge in top-right corner - scaled down */}
//               <div className="absolute top-2.5 sm:top-3 lg:top-5 right-2.5 sm:right-3 lg:right-5 bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center shadow-lg">
//                 <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-800">{activeSolution + 1}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Arrow - scaled down */}
//         <button
//           onClick={nextTab}
//           disabled={startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id}
//           className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-1.5 sm:p-2.5 shadow-md transition-all duration-200 ${
//             startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id
//               ? 'opacity-50 cursor-not-allowed'
//               : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
//           }`}
//         >
//           <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Iot

'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Iot = () => {
  const [activeTab, setActiveTab] = useState('telecom');
  const [startIndex, setStartIndex] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);

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
          detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
          backgroundImage: '/iot/tele1.png',
          features: [
            'Ensure 100% tower uptime with uninterrupted power',
            'Real-time network performance monitoring',
            'Predictive maintenance for telecom equipment',
            'Remote configuration and management',
            'Comprehensive dashboard with analytics'
          ]
        },
        {
          title: 'Fuel Monitoring Solution',
          description: 'Prevent loss with precise consumption tracking',
          detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
          backgroundImage: '/iot/tele2.png',
          features: [
            'Reduce diesel costs by up to 30% with IoT fuel monitoring',
            'Real-time fuel level tracking and alerts',
            'Theft detection and prevention systems',
            'Automated consumption reporting',
            'Predictive refill scheduling'
          ]
        },
        {
          title: 'Battery Monitoring Solution',
          description: 'Protect uptime with proactive battery health checks',
          detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
          backgroundImage: '/iot/tele3.png',
          features: [
            'Maximize uptime with proactive battery management',
            'Real-time battery health monitoring',
            'Voltage and temperature tracking',
            'Predictive replacement alerts',
            'Performance degradation analysis'
          ]
        },
        {
          title: 'Mobile Fuel Dispenser',
          description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
          detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
          backgroundImage: '/iot/tele4.png',
          features: [
            'GPS-enabled mobile fuel dispensing',
            'Secure authentication and authorization',
            'Automated billing and reporting',
            'Real-time inventory management',
            'Route optimization for fuel delivery'
          ]
        }
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
          detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
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
          detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
          backgroundImage: '/iot/die2.png',
          features: [
            'Avoid outages through real-time fuel monitoring',
            'Automate valves and starters for tank operations',
            'Reduce manual checks via scheduled fuel transfers',
            'Detect issues early using predictive alerts ',
            'Scalable diesel tank automation'
          ]
        },
        {
          title: 'Rental DG Monitoring',
          description: 'Optimize your DG rentals with smart monitoring',
          detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
          backgroundImage: '/iot/die3.png',
          features: [
            'Track fuel efficiently with smart IoT insights.',
            'Get 100% visibility across all DG locations.',
            'Prevent failures with predictive alerts. ',
            'Boost ROI up to 25% with data-driven insights',
            'Centralized fleet management dashboard'
          ]
        },
        {
          title: 'Diesel Level Monitoring',
          description: 'Smart diesel monitoring to keep operations running smoothly.',
          detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
          backgroundImage: '/iot/die4.png',
          features: [
            'Prevent fuel shortages with real-time diesel level monitoring',
            'Automate tank readings to remove manual errors',
            'Optimize diesel use for cost-efficient operations',
            'Track diesel inventory across all sites',
            'Ensure continuous operations with smart fuel management'
          ]
        }
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
          // description: 'Accurate rainfall measurement and monitoring',
          detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
          backgroundImage: '/iot/meto1.png',
          features: [
            'Ensure accuracy with automated rain monitoring',
            'Prevent flooding using real-time rainfall data',
            'Plan operations with predictive weather insights',
            'Reduce manual checks via remote data access',
            'Optimize resource planning with centralized dashboards'
          ]
        },
        {
          title: 'Automated Weather Station',
          // description: 'Comprehensive weather data collection and analysis',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto2.png',
          features: [
            'Stay ahead of disruptions with automated weather station monitoring',
            'Protect assets with real-time weather alerts',
            'Make decisions using predictive weather analytics',
            'Streamline operations through remote weather monitoring',
            'Rely on accurate data for compliance reporting'
          ]
        },
        {
          title: 'DWLR With Telemetry',
          // description: 'Advanced data logging and remote transmission',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto3.png',
          features: [
            'Prevent water shortages with groundwater monitoring',
            'Cut pumping costs via intelligent analytics',
            'Plan projects using historical groundwater data',
            'Minimize compliance risks with accurate reporting',
            'Boost efficiency through centralized water insights'
          ]
        },
        {
          title: 'Flash Flood Early Warning System',
          // description: 'Proactive flood detection and alert system',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto4.png',
          features: [
            'Minimize asset losses with flash flood early warning',
            'Protect staff and equipment with real-time flood alerts',
            'Reduce emergency costs using predictive flood analytics',
            'Ensure compliance by automated flood monitoring',
            'Improve planning with centralized flood data'
          ]
        },
        {
          title: 'Urban Flood Early Warning System',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto5.png',
          features: [
            'Protect city infrastructure with flood monitoring system',
            'Allocate resources efficiently using flood impact analytics',
            'Reduce service interruptions through water risk insights',
            'Support emergency planning with urban flood analytics',
            'Guide strategic investments via centralized flood data'
          ]
        }
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/water1.png',
          features: [
            'Maintain flow through water process automation',
            'Cut energy waste with intelligent water control',
            'Reduce errors by 25% in automated water management',
            'Boost efficiency employing centralized monitoring',
            'Ensure compliance through digital reporting'
          ]
        },
        {
          title: 'Waste Water Monitoring',
          description: 'Detect and prevent wastewater disruptions in real time',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/water2.png',
          features: [
            'Detect water quality issues faster',
            'Monitor sewage water systems continuously',
            'Prevent pump and equipment failures',
            'Automate contamination alerts',
            'Improve plant efficiency with real-time data'
          ]
        },
        {
          title: 'Municipal Sump Automation',
          description: 'Automate sump operations and stop overflows instantly.',
          detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
          backgroundImage: '/iot/water3.png',
          features: [
            'Prevent water shortages with sump tracking',
            'Protect infrastructure with water alerts',
            'Reduce disruptions with anomaly detection',
            'Boost efficiency with automated pumps',
            'Enable smarter planning with water insights'
          ]
        }
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/mob1.png',
          features: [
            'Seamless fleet operations with real-time tracking',
            'Monitor wagon performance with smart IoT insights',
            'Full visibility across your wagon fleet',
            'Anticipate delays with predictive alerts',
            'Maximize logistics efficiency with actionable data'
          ]
        },
        {
          title: 'Cargo Tracking System',
          description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/mob2.png',
          features: [
            'Track cargo across sea and land',
            'Protect cold chain shipments with IoT monitoring',
            'Reroute shipments with predictive alerts',
            'Secure high-value assets remotely',
            'Make smarter decisions with centralized dashboards'
          ]
        },
       
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
          // description: 'Intelligent rail tracking for faster, safer operations.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/smart1.png',
          features: [
            'Prevent chemical shortages with IBC tank monitoring',
            'Avoid spills with automated tank alerts',
            'Manage multiple tanks remotely',
            'Optimize usage with chemical tank analytics',
            'Scale monitoring with smart IBC solutions'
          ]
        },
        {
          title: 'IBC Tank Monitoring - Lifescience',
          // description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart2.png',
          features: [
            'Avoid experiment delays with real-time tank insights',
            'Detect abnormal tank conditions instantly',
            'Centralize lab tank monitoring for multiple sites',
            'Optimize chemical inventory with usage insights',
            'Maintain lab safety with automated compliance checks'
          ]
        },
        {
          title: 'IBC Rental Container Monitoring',
          // description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart3.png',
          features: [
            'Monitor IBC rental fleet continuously',
            'Track IBC container levels and locations remotely',
            'Optimize rental container operations efficiently',
            'Automate service and compliance tracking',
            'Use container analytics for smarter planning'
          ]
        },
        {
          title: 'MyTank- Water Tank Automation',
          // description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart4.png',
          features: [
            'Automate pumps with starter and radar sensors',
            'Monitor water tank levels remotely in real time',
            'Track water quality with IoT sensors',
            'Prevent overflow and wastage automatically',
            'Optimize refills and operations with smart dashboards'
          ]
        },
       
      ]
    },
          { 
          id: 'healthcare', 
          label: 'healthcare',
          activeIcon: '/white7.png',
          inactiveIcon: '/black7.png',
          solutions: [
        {
          title: 'Gas Level Monitoring',
          description: 'Smarter oxygen monitoring that keeps patients and operations safe.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/health1.png',
          features: [
            'Prevent supply shortages with real-time gas monitoring',
            'Detect abnormal oxygen levels instantly',
            'Centralize oxygen tank monitoring across hospitals',
            'Optimize oxygen usage with predictive insights',
            'Enhance patient safety with automated alerts'
          ]
        },
        {
          title: 'Indoor Air Quality Monitoring',
          description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/health2.png',
          features: [
            'Detect CO₂, VOCs, and humidity instantly for safer spaces',
            'Monitor indoor air quality in real time with our IAQ sensors',
            'Integrate air quality monitoring with HVAC and BMS systems',
            'Stay compliant with WELL v2 and healthcare air quality standards',
            'Prevent airborne risks using predictive IAQ insights'
          ]
        },
       
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/indus1.png',
          features: [
            'Real-time railway asset monitoring with IR NIYANTRAC',
            'CRIS-integrated IoT dashboards',
            'Predictive alerts for railway equipment and infrastructure',
            'IFD device for centralized railway monitoring and control',
            'Data-driven insights for smarter railway operations'
          ]
        },
        {
          title: 'SmartBlast - Abrasive Surface Preparation',
          description: 'Real-time control for flawless abrasive blasting.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/indus2.png',
          features: [
            'Optimize blasting operations with IoT surface preparation monitoring',
            'Maintain consistent tail-end pressure for even surface cleaning',
            'Prevent moisture and efficiency loss with our smart sensors',
            'Track inventory and nozzle usage digitally.',
            'Gain real-time insights from cloud dashboards'
          ]
        },
       
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
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

    // ... Add other tabs with their specific solutions and features
  ];
  
  const tabsPerView = 4;

  const nextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
    setActiveSolution(0);
    
    if (nextIndex >= startIndex + tabsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex].id);
    setActiveSolution(0);
    
    if (prevIndex < startIndex) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleSolutionHover = (index) => {
  setActiveSolution(index);
};
  const handleTabClick = (tabId) => {
    const clickedIndex = tabs.findIndex(tab => tab.id === tabId);
    setActiveTab(tabId);
    setActiveSolution(0);
    
    if (clickedIndex >= startIndex + tabsPerView) {
      setStartIndex(clickedIndex - tabsPerView + 1);
    } else if (clickedIndex < startIndex) {
      setStartIndex(clickedIndex);
    }
  };

  const handleSolutionClick = (index) => {
    setActiveSolution(index);
  };

  const visibleTabs = tabs.slice(startIndex, startIndex + tabsPerView);
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const activeSolutionData = activeTabData?.solutions?.[activeSolution];

  return (
    <div className="mt-12 sm:mt-16 lg:mt-28 mx-auto px-2.5 sm:px-3 lg:px-5 xl:px-6 py-5 sm:py-6 min-h-screen">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl 2xl:text-[29px] lg:text-[38px] text-center text-[#333333] mb-5 sm:mb-6 lg:mb-10 px-1.5">
        Explore How IoT Solutions Transform Operations
      </h1>
      
      {/* Tabs Container */}
      <div className="w-full max-w-[56rem] xl:max-w-[75rem] mx-auto mb-2.5 sm:mb-3">
        <div className="flex space-x-1 border-b border-gray-200">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-full py-1.5 sm:py-2.5 lg:py-3 text-[10px] sm:text-xs lg:text-sm xl:text-[16px] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-[#4D8FD1] text-white border-blue-500 shadow-md'
                  : 'bg-[#F0F1F2] text-[#000000] hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <img 
                src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon} 
                alt={`${tab.label} icon`}
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-5.5 xl:h-5.5 object-contain flex-shrink-0"
              />
              <span className="hidden xs:inline sm:inline text-[10px] sm:text-xs lg:text-sm xl:text-[16px]">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Main Content Area with Two Columns */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 lg:gap-3 w-full px-1.5 sm:px-0">
        {/* Left Arrow */}
        <button
          onClick={prevTab}
          disabled={startIndex === 0 && activeTab === tabs[0].id}
          className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-1.5 sm:p-2.5 transition-all duration-200 ${
            startIndex === 0 && activeTab === tabs[0].id 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
          }`}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Two Column Content Area */}
        <div className="w-full max-w-[56rem] xl:max-w-[77rem] bg-white min-h-[240px]">
          <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 lg:gap-5 px-2.5 sm:px-3 lg:px-5 mt-3 sm:mt-5">
            {/* Left Column - Solutions List */}
            <div className="w-full lg:w-[15%] xl:w-[20%] inline-flex flex-col justify-start items-start gap-1.5 sm:gap-2.5 lg:gap-3 mr-7">
             {activeTabData?.solutions?.map((solution, index) => (
  <div
    key={index}
    className={`group self-stretch flex flex-col justify-start items-start gap-2.5 sm:gap-3 lg:gap-4 cursor-pointer w-full ${
      activeSolution === index ? 'active-solution' : ''
    }`}
    onMouseEnter={() => handleSolutionHover(index)} // Hover handler to update activeSolution
  >
    <div className="w-full flex flex-col justify-start items-start gap-1.5 sm:gap-2.5 lg:gap-3">
     
      {/* Title + Arrow - Hover changes arrow image via group-hover */}
      <div className="self-stretch inline-flex items-center justify-between w-full">
        <div
          className={`flex-1 text-xs sm:text-sm lg:text-base xl:text-[17px] font-normal leading-4 sm:leading-5 lg:leading-6
                     ${activeSolution === index ? 'text-[#1694F6]' : 'text-[#000000]'} group-hover:text-[#1694F6]`}>
          {solution.title}
        </div>
        <div className="w-1.5 h-2.5 sm:w-2.5 sm:h-3 lg:w-2.5 lg:h-4 flex-shrink-0 ml-1.5">
          {/* Default/Active arrow - hidden on hover */}
          <img
            src={activeSolution === index ? "/Bluevector.png" : "/Blackvector.png"}
            alt="icon"
            className="w-full h-full object-contain group-hover:hidden"
          />
          {/* Hover arrow - shown on group hover */}
          <img
            src="/Bluevector.png"
            alt="icon"
            className="w-full h-full object-contain hidden group-hover:block"
          />
        </div>
      </div>
      {/* Description - Text color changes on hover */}
      <div
        className={`w-full text-[10px] sm:text-xs lg:text-[12px] font-medium leading-3 sm:leading-4
                   ${activeSolution === index ? 'text-[#385C78]' : 'text-[#434343]'} group-hover:text-[#385C78]`}
      >
        {solution.description}
      </div>
    </div>
    {/* Line underline - Changes to gradient on hover */}
    <div
      className={`self-stretch h-0 w-full
                 ${activeSolution === index
                   ? 'border-[0.80px] border-transparent [border-image:linear-gradient(90deg,_rgba(22,148,246,0)_0%,_rgba(22,148,246,0.51)_51%,_rgba(22,148,246,0)_100%)_1]'
                   : 'outline outline-1 outline-offset-[-0.50px] outline-neutral-300'
                 } group-hover:border-[0.80px] group-hover:border-transparent group-hover:[border-image:linear-gradient(90deg,_rgba(22,148,246,0)_0%,_rgba(22,148,246,0.51)_51%,_rgba(22,148,246,0)_100%)_1]`}
    ></div>
  </div>
))}
            </div>

            {/* Right Column - Background Image with Content Overlay */}
            <div 
              className="w-full lg:w-[75%] xl:w-[77%] relative h-[380px] overflow-hidden bg-contain"
              style={{
                backgroundImage: `url(${activeSolutionData?.backgroundImage || '/e1.jpg'})`
              }}
            >
              {/* Content Overlay - Left Side */}
              <div className="relative h-[380px] w-full lg:max-w-[320px] xl:max-w-[350px] py-3 sm:py-5 lg:py-6 px-2.5 sm:px-3 lg:px-2 ml-4 flex flex-col justify-between bg-white/95 text-[#232C33]">
                <div className="space-y-2.5 sm:space-y-3 lg:space-y-5">
                  {/* Title Badge */}
                  <div className="flex justify-center">
                    <div className="inline-block bg-white/95 px-2 sm:px-1 py-1 sm:py-1 rounded-[2px] shadow-sm backdrop-blur-sm">
                      <h3 className="text-sm sm:text-base lg:text-[24px] xl:text-[15px] text-[#000000] text-center">
                        {activeSolutionData?.title}
                      </h3>
                    </div>
                  </div>

                  {/* Key Features List - Dynamic based on active solution */}
                  <div className="space-y-1.5 sm:space-y-2.5 lg:space-y-3">
                    <ul className="space-y-1 sm:space-y-1 lg:space-y-0 ml-2">
                      {activeSolutionData?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start gap-1 sm:gap-1.5 space-y-6">
                          <div className="flex items-center gap-12 mt-1">
  <Image
    src="/list.png" 
    alt="Elint Systems"
    width={5.5}
    height={10}
    className="object-contain mt-0.5"
  />
</div>
                          <span className="text-[#232C33] text-xs space-y-1 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 pt-2.5 sm:pt-3 lg:pt-5 border-t border-white/30">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[10px] sm:text-xs font-medium text-justify text-[#272727]">
                        Explore the<br/> approach
                      </span>
                      <img 
                        src="/Arrow3.png" 
                        alt="icon" 
                        className="w-4 h-4 sm:w-7 sm:h-9 opacity-55"
                      />
                    </div>
                    <button className="bg-[#1694F6] hover:bg-[#3d7bb8] shadow-sm rounded-[3px] text-white px-2.5 sm:px-3 lg:px-2 py-1 sm:py-1.5 font-medium transition-colors duration-200 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Number badge in top-right corner */}
              <div className="absolute top-2.5 sm:top-3 lg:top-5 right-2.5 sm:right-3 lg:right-5 bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center shadow-lg">
                <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-800">{activeSolution + 1}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTab}
          disabled={startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id}
          className={`flex-shrink-0 bg-white border border-gray-300 rounded-full p-1.5 sm:p-2.5 shadow-md transition-all duration-200 ${
            startIndex === tabs.length - tabsPerView && activeTab === tabs[tabs.length - 1].id
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 hover:scale-105 active:scale-95'
          }`}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Iot