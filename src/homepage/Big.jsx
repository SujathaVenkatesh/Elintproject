

'use client'
import React, { useState, useEffect, useRef } from 'react'

const Big = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const iconData = [
    {
      id: 1,
      position: 'top-1/4 right-1/4',
      translate: {
        1024: { x: -120, y: 230 },
 
        // 1280:{ x: -15, y: 250 },
        1280: { x: -130, y: 230 },
        1440: { x: -170, y: 270 },
        2560: { x: -200, y: 310 }
      },
      icon: "/Hover0.png",
      title: "Cybersecurity & Access Control",
      description: "We implement robust encryption, authentication, and penetration testing to ensure secure data and system access."
    },
    {
      id: 2,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 340, y: -165 },

        1280:{ x: 360, y: -185 },
        1440: { x: 400, y: -190 },
        2560: { x: 460, y: -220 }
      },
      icon: "/Hover01.png",
      title: "Firmware",
      description: "Our embedded software team develops responsive, efficient, and application-specific control firmware."
    },
    {
      id: 3,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 220, y: -230 },

        1280:{ x: 240, y: -250 },
        1440: { x: 260, y: -270 },
        2560: { x: 300, y: -310 }
      },
      icon: "/Hover02.png",
      title: "Prototyping",
      description: "We deliver rapid prototypes to validate performance and confirm design feasibility early in the cycle."
    },
    {
      id: 4,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 50, y: -275 },
 
        1280:{ x: 80, y: -290 },
        1440: { x: 58, y: -320 },
        2560: { x: 65, y: -370 }
      },
      icon: "/Hover03.png",
      title: "Cloud Integration",
      description: "We deliver flexible platforms with dashboards, reports, alerts, analytics, AI, ML, and third-party system integration."
    },
    {
      id: 5,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 30, y: -185 },
 
        1280:{ x: 50, y: -205 },
        1440: { x: 35, y: -218 },
        2560: { x: 40, y: -250 }
      },
      icon: "/Hover04.png",
      title: "PCB Design",
      description: "Our engineers design compact, high-performance boards optimized for reliability, durability, and thermal management."
    },
    {
      id: 6,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 100, y: -150 },
 
        1280:{ x: 140, y: -150 },
        1440: { x: 35, y: -218 },
        2560: { x: 40, y: -250 }
      },
      icon: "/Hover05.png",
      title: "Industrial Design (ID)",
      description: "We design custom enclosures that match your brand while ensuring usability, durability, and field-ready protection."
    },
    {
      id: 7,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: 100, y: -50 },

        1280:{ x: 120, y: -50 },
        1440: { x: 140, y: -175 },
        2560: { x: 160, y: -200 }
      },
      icon: "/Hover06.png",
      title: "Software Testing & Quality Assurance",
      description: "Every application is rigorously tested for functionality, performance, security, and usability—ensuring stable and error-free operation"
    },
    {
      id: 8,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: -20, y: 50 },
 
        1280:{ x: 10, y: 60 },
        1440: { x: 130, y: -35 },
        2560: { x: 150, y: -40 }
      },
      icon: "/Hover07.png",
      title: "Server Deployment",
      description: "We provide flexible deployment options—on-premise or cloud—complete with disaster recovery and region-specific compliance."
    },
    {
      id: 9,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: -160, y: 75 },
   
        1280:{ x: -150, y: 75 },
        1440: { x: 26, y: 88 },
        2560: { x: 30, y: 100 }
      },
      icon: "/Hover08.png",
      title: "Testing",
      description: "We perform comprehensive functional, environmental, and compliance testing (CE, RoHS, IECEx, ATEX, and country-specific) to ensure global market readiness."
    },
    {
      id: 10,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: -270, y: 20 },
 
        1280:{ x: -250, y: 25 },
        1440: { x: -218, y: 88 },
        2560: { x: -250, y: 100 }
      },
      icon: "/Hover09.png",
      title: "Mobile Apps (Android/iOS)",
      description: "Our team develops intuitive apps for real-time device monitoring and control—accessible anytime, anywhere."
    },
    {
      id: 11,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: -250, y: -120 },
        1280:{ x: -220, y: -120 },
        1440: { x: -330, y: 18 },
        2560: { x: -380, y: 20 }
      },
      icon: "/Hover10.png",
      title: "Cloud Integration",
      description: "We deliver flexible platforms with dashboards, reports, alerts, analytics, AI, ML, and third-party system integration."
    },
    // {
    //   id: 11,
    //   position: 'top-1/2 left-1/4',
    //   translate: {
    //     1024: { x: -245, y: -110 },
    //     1280:{ x: -265, y: -400 },
    //     1440: { x: -288, y: -130 },
    //     2560: { x: -330, y: -150 }
    //   },
    //   icon: "/Hover11.png",
    //   title: "Cloud Integration",
    //   description: "Seamless cloud connectivity ensuring secure data storage, processing, and accessibility from anywhere."
    // },
  ];

  const getTranslateStyle = (translate) => {
    const width = containerWidth;
    let x = 0, y = 0;
    
    if (width >= 2560) {
      x = translate[2560].x;
      y = translate[2560].y;
    } else if (width >= 1440) {
      x = translate[1440].x;
      y = translate[1440].y;
    }
    else if (width >= 1280) {
      x = translate[1280].x;
      y = translate[1280].y;
    }
     else if (width >= 1024) {
      x = translate[1024].x;
      y = translate[1024].y;
    }
    
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  };

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial measurement
    updateContainerWidth();

    // Use ResizeObserver for better zoom detection
    const resizeObserver = new ResizeObserver(() => {
      updateContainerWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Fallback for window resize
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  return (
    <div className='bg-[#FBFBFB] min-h-screen w-full'>
      {/* Main Container */}
      <div className='px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 '>
        
        {/* Text Content Section */}
       <div className='w-full px-4 sm:px-6 lg:px-8 xl:px-18 space-y-3 sm:space-y-4 lg:space-y-4'>
 <div className='transform translate-y-12 z-40 absolute'>
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light font-['Manrope'] leading-[1.3] sm:leading-[1.3] md:leading-[1.2] lg:leading-[58px] tracking-normal sm:tracking-wide text-[#1A1A1C] text-center lg:text-left">
    End-to-End IoT Excellence - From Concept to Solution Deployment
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-[15px] w-240 mt-2 font-light font-['Manrope'] leading-5 sm:leading-6 md:leading-7 lg:leading-6 text-[#4A4C50] text-center lg:text-left max-w-full lg:max-w-5xl tracking-[0.50px]">
    At Elint Systems, we design and deliver complete IoT solutions—combining customizable hardware and intelligent software—engineered to meet your business needs with security, scalability, and reliability at the core.
  </p>
</div>
  <div ref={containerRef} className='w-full transform -translate-x-12  px-4 sm:px-6 lg:px-8 xl:px-0 relative'>
          <div className='relative'>
            <img 
              src="/big.png"
              alt="IoT Solutions"
              className='w-full object-cover self-start'
            />
            
            {/* Icons positioned on the image */}
            {iconData.map((icon) => (
              <div 
                key={icon.id}
                className={`absolute ${icon.position} cursor-pointer group ${hoveredIcon === icon.id ? 'z-50' : 'z-10'}`}
                style={getTranslateStyle(icon.translate)}
                onMouseEnter={() => setHoveredIcon(icon.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {/* Icon with hover scale effect */}
                <div className="relative z-30 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={icon.icon} 
                    alt={`Icon ${icon.id}`}
                    className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[90px] lg:h-[90px]'
                  />
                </div>
                
                {/* Modal with smart animate effect */}
                <div className={`
                  absolute left-1/2 -top-1 transform translate-x-[19px]  z-10 
                  min-w-[300px] max-w-[400px] transition-all duration-300 ease-out
                  ${hoveredIcon === icon.id 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                  }
                `}>
                  <div className="bg-white rounded-2xl shadow-2xl py-4 px-4 border border-gray-100">
                    <div className="flex flex-col gap-2">
                      {/* Title */}
                      <div className="flex-shrink-0">
                        <h3 className="text-[17.02px] text-gray-900 whitespace-nowrap">
                          {icon.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <div className="flex-1">
                        <p className="text-[#5C5C5C] text-[13.16px] leading-[20.4px]">
                          {icon.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
</div>
 
        {/* Image Section with Icons */}
        
        
      </div>
    </div>
  )
}

export default Big

