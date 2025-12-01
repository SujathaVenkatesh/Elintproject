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
        1280: { x: 360, y: -185 },
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
        1280: { x: 240, y: -250 },
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
        1280: { x: 80, y: -290 },
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
        1280: { x: 50, y: -205 },
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
        1280: { x: 140, y: -150 },
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
        1280: { x: 120, y: -50 },
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
        1280: { x: 10, y: 60 },
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
        1280: { x: -150, y: 75 },
        1440: { x: 26, y: 88 },
        2560: { x: 30, y: 100 }
      },
      icon: "/Hover08.png",
      title: "Testing",
      description: "We perform comprehensive functional, environmental, and compliance testing to ensure global market readiness."
    },
    {
      id: 10,
      position: 'top-1/2 left-1/4',
      translate: {
        1024: { x: -270, y: 20 },
        1280: { x: -250, y: 25 },
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
        1280: { x: -220, y: -120 },
        1440: { x: -330, y: 18 },
        2560: { x: -380, y: 20 }
      },
      icon: "/Hover10.png",
      title: "Cloud Integration",
      description: "We deliver flexible platforms with dashboards, analytics, AI, ML, and third-party system integration."
    }
  ];

  const getTranslateStyle = (translate) => {
    const width = containerWidth;
    let x = 0, y = 0;

    if (width >= 2560) ({ x, y } = translate[2560]);
    else if (width >= 1440) ({ x, y } = translate[1440]);
    else if (width >= 1280) ({ x, y } = translate[1280]);
    else if (width >= 1024) ({ x, y } = translate[1024]);

    return { transform: `translate(${x}px, ${y}px)` };
  };

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="bg-[#FBFBFB] w-full min-h-screen flex flex-col items-center">

      {/* TEXT SECTION */}
      <div className="w-full max-w-[1300px] px-6 pt-12">
        <h1 className="text-3xl md:text-4xl font-light text-[#1A1A1C]">
          End-to-End IoT Excellence - From Concept to Solution Deployment
        </h1>

        <p className="text-[#4A4C50] mt-3 max-w-3xl">
          At Elint Systems, we design and deliver complete IoT solutions—
          combining customizable hardware and intelligent software engineering—
          with security, scalability, and reliability at the core.
        </p>
      </div>

      {/* IMAGE + ICONS */}
      <div ref={containerRef} className="w-full flex justify-center mt-10">
        <div className="relative w-full max-w-[1300px]">

          {/* Background Image */}
          <img
            src="/big.png"
            className="w-full object-cover"
            alt="IoT Diagram"
          />

          {/* ICONS */}
          {iconData.map((icon) => (
            <div
              key={icon.id}
              className={`absolute ${icon.position} cursor-pointer`}
              style={getTranslateStyle(icon.translate)}
              onMouseEnter={() => setHoveredIcon(icon.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={icon.icon}
                className="w-10 h-10 lg:w-[90px] lg:h-[90px] transition-transform duration-300 hover:scale-110"
              />

              {/* Tooltip */}
              {hoveredIcon === icon.id && (
                <div className="absolute left-6 -top-2 bg-white rounded-2xl shadow-2xl p-4 border w-[300px]">
                  <h3 className="text-[17px] text-gray-900">{icon.title}</h3>
                  <p className="text-[#5C5C5C] text-[13px] leading-5 mt-1">
                    {icon.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Big;
