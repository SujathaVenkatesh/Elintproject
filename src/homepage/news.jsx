

// 'use client'
// import { useState, useRef } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);

//   const images = [
//     "/e3.jpg",
//     "/e2.jpg",
//     "/e1.jpg",
//     "/e3.jpg",
//     "/e2.jpg",
//     "/e1.jpg",
  
 
//   ];

//   const scrollToIndex = (index) => {
//     if (scrollRef.current) {
//       const slideWidth = scrollRef.current.offsetWidth / 3;
//       scrollRef.current.scrollTo({
//         left: slideWidth * index,
//         behavior: 'smooth'
//       });
//       setCurrentIndex(index);
//     }
//   };

//   const handlePrev = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
//     scrollToIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
//     scrollToIndex(newIndex);
//   };

//   return (
//     <div className="w-full flex flex-col items-center mt-52 bg-white min-h-screen p-8">
//       {/* Heading Section */}
//      <div className="w-full max-w-[1576px] flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 lg:gap-11">
//         <div className="w-full lg:w-[643px] text-center lg:text-left text-zinc-600 text-[46px] lg:text-5xl font-normal font-['Manrope']">
//           Latest News
//         </div>
//         <div className="w-full lg:w-[931px] flex justify-start items-center gap-3.5">
//           <div className="w-0.5 h-20 lg:h-32 bg-zinc-100 rounded-[50px] flex-shrink-0" />
//           <div className="leading-[46px] w-full justify-start text-justify text-[#5B5B5B] text-xl lg:text-[24px] font-normal font-['Manrope'] leading-8 lg:leading-10">
//             Our IoT gateways integrate an extensive range of network technologies, including 5G/4G Cellular, LoRaWAN, BLE, NB-IoT, CAT-M1, and Satellite communications, to deliver robust industrial IoT solutions.
//           </div>
//         </div>
//       </div>


//       {/* Curved Carousel */}
//       <div className="w-full flex flex-col justify-center items-center">
//         <div style={styles.main}>
//           <div style={styles.maskTop} />
//           <div style={styles.maskBottom} />
//           <div ref={scrollRef} style={styles.outer}>
//             {images.map((src, index) => (
//               <div key={index} style={styles.inner}>
//                 <div style={styles.slide}>
//                   <img 
//                     src={src} 
//                     alt={`News ${index + 1}`}
//                     style={styles.image}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex items-end gap-12">
//           <button 
//             onClick={handlePrev}
// className="w-15 h-15 rounded-full bg-[#ffffff] border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-zinc-50"          >
//             <ArrowLeft size={20} color="#211616" />
//           </button>
          
//           <div className="text-black text-[39.40px]  font-manrope min-w-20 text-center">
//             Events
//           </div>
          
//           <button 
//             onClick={handleNext}
// className="w-15 h-15 rounded-full bg-[#ffffff] border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-zinc-50"          >
//             <ArrowRight size={20} color="#211616" />
//           </button>
//        </div>
// <div className="w-full max-w-4xl mt-12 text-center  text-[#5B5B5B] text-lg lg:text-[18px] font-normal font-['Manrope'] leading-7 lg:leading-8">
//   <div>Elint Systems is a top-tier provider of IoT, ML, and AI solutions designed to monitor, process, and</div>
//   <div>control assets across various industries. Our team excels in delivering customized solutions for</div>
// </div>
//       </div>
      
//     </div>
//   );
// }

// const styles = {
//   main: {
//     position: 'relative',
//     width: '90%',
//     maxWidth: '1900px',
//     height: '450px',
//     overflow: 'hidden',
//   },
//   maskTop: {
//     content: '',
//     position: 'absolute',
//     zIndex: 2,
//     left: '50%',
//     top: '-480%',
//     width: '400%',
//     height: '500%',
//     backgroundColor: '#fff',
//     borderRadius: '50%',
//     transform: 'translateX(-50%)',
//     pointerEvents: 'none',
//   },
//   maskBottom: {
//     content: '',
//     position: 'absolute',
//     zIndex: 2,
//     left: '50%',
//     bottom: '-480%',
//     width: '400%',
//     height: '500%',
//     backgroundColor: '#fff',
//     borderRadius: '50%',
//     transform: 'translateX(-50%)',
//     pointerEvents: 'none',
//   },
//   outer: {
//     position: 'absolute',
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflowX: 'auto',
//     scrollBehavior: 'smooth',
//     scrollSnapType: 'x mandatory',
//     scrollbarWidth: 'none',
//     msOverflowStyle: 'none',
//   },
//   inner: {
//     position: 'relative',
//     flex: '0 0 33.333%',
//     width: '33.333%',
//     padding: '0 10px',
//   },
//   slide: {
//     width: '100%',
//     height: '100%',
//     border: '8px solid #fff',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     scrollSnapAlign: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain',
//     objectPosition: 'center',
//   },
// }


// 'use client'
// import { useState, useRef } from 'react';
// import { ArrowLeft,ArrowRight } from 'lucide-react';

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);

//   const images = [
//     "/e3.jpg",
//     "/e2.jpg",
//     "/e1.jpg",  
//     "/e3.jpg",
//     "/e2.jpg",
//     "/e1.jpg",];

//   const scrollToIndex = (index) => {
//     if (scrollRef.current) {
//       const slideWidth = scrollRef.current.offsetWidth / 3;
//       scrollRef.current.scrollTo({
//         left: slideWidth * index,
//         behavior: 'smooth'
//       });
//       setCurrentIndex(index);
//     }
//   };

//   const handlePrev = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
//     scrollToIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
//     scrollToIndex(newIndex);
//   };

//   return (
//     <div style={styles.container}>
//       {/* Heading Section */}
//      <div className="w-full max-w-[1576px] flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 lg:gap-11 mt-32">
//   <div className="w-full lg:w-[643px] text-center lg:text-left text-zinc-600 text-[46px] lg:text-5xl font-normal font-['Manrope']">
//     Latest News
//   </div>
//   <div className="w-full lg:w-[931px] flex justify-start items-center gap-3.5">
//     <div className="w-0.5 h-20 lg:h-32 bg-zinc-100 rounded-[50px] flex-shrink-0" />
//     <div className="leading-[46px] w-full justify-start text-justify text-[#5B5B5B] text-xl lg:text-[24px] font-normal font-['Manrope'] leading-8 lg:leading-10">
//       Our IoT gateways integrate an extensive range of network technologies, including 5G/4G Cellular, LoRaWAN, BLE, NB-IoT, CAT-M1, and Satellite communications, to deliver robust industrial IoT solutions.
//     </div>
//   </div>
// </div>

//       {/* Curved Carousel */}
//       <div style={styles.carouselWrapper}>
//         <div style={styles.main}>
//           <div style={styles.maskTop} />
//           <div style={styles.maskBottom} />
//           <div ref={scrollRef} style={styles.outer}>
//             {images.map((src, index) => (
//               <div key={index} style={styles.inner}>
//                 <div style={styles.slide}>
//                   <img 
//                     src={src} 
//                     alt={`News ${index + 1}`}
//                     style={styles.image}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//        </div>

//         {/* Navigation Arrows */}
//      <div className="flex items-start gap-12">
//           <button 
//             onClick={handlePrev}
// className="w-15 h-15 rounded-full bg-[#ffffff] border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-zinc-50"          >
//             <ArrowLeft size={20} color="#211616" />
//           </button>
          
//           <div className="text-black text-[39.48px]  font-manrope min-w-20 text-center">
//             Events
//           </div>
          
//           <button 
//             onClick={handleNext}
// className="w-15 h-15 rounded-full bg-[#ffffff] border border-black/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-zinc-50"          >
//             <ArrowRight size={20} color="#211616" />
//           </button>
//        </div>
// <div className="w-full max-w-4xl  text-center  text-[#5B5B5B] text-lg lg:text-[18px] font-normal font-['Manrope'] leading-7 lg:leading-8">
//   <div>Elint Systems is a top-tier provider of IoT, ML, and AI solutions designed to monitor, process, and</div>
//   <div>control assets across various industries. Our team excels in delivering customized solutions for</div>
// </div>

//       </div>
      
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '2rem 1rem',
//     backgroundColor: '#fff',
//     minHeight: '100vh',
//   },

//   carouselWrapper: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '3rem',
//   },
//   main: {
//     position: 'relative',
//     width: '90%',
//     height: '450px',
//     overflow: 'hidden',
//   },
//   maskTop: {
//     content: '',
//     position: 'absolute',
//     zIndex: 2,
//     left: '50%',
//     top: '-480%',
//     width: '400%',
//     height: '500%',
//     backgroundColor: '#ffffff',
//     borderRadius: '50%',
//     transform: 'translateX(-50%)',
//     pointerEvents: 'none',
//   },
//   maskBottom: {
//     content: '',
//     position: 'absolute',
//     zIndex: 2,
//     left: '50%',
//     bottom: '-480%',
//     width: '400%',
//     height: '500%',
//     backgroundColor: '#ffffff',
//     borderRadius: '50%',
//     transform: 'translateX(-50%)',
//     pointerEvents: 'none',
//   },
//   outer: {
//     position: 'absolute',
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflowX: 'auto',
//     scrollBehavior: 'smooth',
//     scrollSnapType: 'x mandatory',
//     scrollbarWidth: 'none',
//     msOverflowStyle: 'none',
//   },
//   inner: {
//     position: 'relative',
//     flex: '0 0 33.333%',
//     width: '33.333%',
//     padding: '0 10px',
//   },
//   slide: {
//     width: '100%',
//     height: '100%',
//     border: '8px solid #ffffff',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     scrollSnapAlign: 'center',
//     backgroundColor: '#09090b',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     objectPosition: 'center',
//   },
//   navigation: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '2rem',
//   },
//   navButton: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     backgroundColor: '#52525b',
//     border: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
//   },
//   indicator: {
//     color: '#a1a1aa',
//     fontSize: '1.25rem',
//     fontWeight: '500',
//     fontFamily: 'Manrope, sans-serif',
//     minWidth: '80px',
//     textAlign: 'center',
//   },
// }

  'use client'
  import { useState, useRef, useEffect } from 'react';
  import { ArrowLeft, ArrowRight } from 'lucide-react';
  import Image from 'next/image';

  export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const scrollRef = useRef(null);

    const images = [
      "/e3.jpg",
      "/e2.jpg",
      "/e1.jpg",  
      "/e3.jpg",
      "/e2.jpg",
      "/e1.jpg",  
      "/e3.jpg",
      "/e2.jpg",
      "/e1.jpg",  
      "/e3.jpg",
    ];

    // Handle responsive behavior
    useEffect(() => {
      const handleResize = () => {
        const largeScreen = window.innerWidth >= 1280;
        setIsLargeScreen(largeScreen);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToIndex = (index) => {
      if (scrollRef.current) {
        const slideWidth = 405.3 + 19.3; // image width + gap
        scrollRef.current.scrollTo({
          left: slideWidth * index,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    };

    const handlePrev = () => {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      scrollToIndex(newIndex);
    };

    const handleNext = () => {
      const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      scrollToIndex(newIndex);
    };

    return (
      <div style={styles.mainContainerParent}>
        <div style={styles.mainContainer}>
          
          {/* Header Section */}
         <div style={styles.headerSection}>
          <div style={styles.title}>Latest News</div>
          <div style={styles.descriptionContainer}>
            <div style={styles.divider} />
            <div style={styles.description}>
              Our IoT gateways integrate an extensive range of network technologies, including 5G/4G Cellular, LoRaWAN, BLE, NB-IoT, CAT-M1, and Satellite communications, to deliver robust industrial IoT solutions.
            </div>
          </div>
        </div>

          {/* Image Gallery Container */}
          <div style={styles.imageGalleryContainer}>
            <div ref={scrollRef} style={styles.container}>
              {images.map((src, index) => (
                <Image 
                  key={index}
                  src={src}
                  width={405.3}
                  height={index === 1 ? 223 : 296.8}
                  alt=""
                  style={{
                    ...styles.eventsIcon,
                    ...(index === 1 && styles.mainContainerParentEventsIcon)
                  }}
                  sizes="100vw"
                />
              ))}
            </div>
          </div>

          {/* Circular Background Elements */}
          <div style={styles.mainContainerItem} />
          <div style={styles.mainContainerChild} />

          {/* Event Section */}
          <div style={styles.eventSection}>
            <div style={styles.eventContainer}>
              <div style={styles.eventHeader}>
                <button 
                  onClick={handlePrev}
                  style={styles.arrowContainerIcon}
                >
                  <ArrowLeft size={20} color="#211616" />
                </button>
                <button 
                  onClick={handleNext}
                  style={styles.arrowContainerIcon}
                >
                  <ArrowRight size={20} color="#211616" />
                </button>
              </div>
              <div style={styles.eventDescriptionContainer}>
                <div style={styles.heading5}>Event</div>
                <div style={styles.eventDescription}>
                  Elint Systems is a top-tier provider of IoT, ML, and AI solutions designed to monitor, process, and<br/>
                  control assets across various industries. Our team excels in delivering customized solutions for
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

 const styles = {
  mainContainerParent: {
    width: '100%',
    height: '715.5px',
    position: 'relative',
    textAlign: 'center',
    fontSize: '28px',
    color: '#1a1a1c',
    fontFamily: 'Manrope',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: '80%',
    maxWidth: '1440px',
    height: '715.5px',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
  },
  headerSection: {
    position: 'absolute',
    top: '0px',
    left: '50px',
    width: '100%',
    maxWidth: '1300.96px',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    padding: '20px 0',
    boxSizing: 'border-box  ',
    fontSize: '33px',
    color: '#575757',
    zIndex: 40,
    backgroundColor: 'transparent'
  },
  title: {
    width: '481.25px',
    position: 'relative',
    lineHeight: '47.55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    fontWeight: 400,
    fontSize: '30px',
    color: '#575757',
    flexShrink: 0,
  },
  descriptionContainer: {
    width: '750.80px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px',
    position: 'relative',
    fontSize: '18px',
    color: '#5b5b5b',
    boxSizing: 'border-box',
  },
  divider: {
    width: '1.5px',
    height: '96px',
    position: 'relative',
    borderRadius: '37.42px',
    backgroundColor: '#f4f4f5',
    flexShrink: 0,
  },
  description: {
    width: '725.99px',
    position: 'relative',
    letterSpacing: '0.02em',
    lineHeight: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '18px',
    color: '#575757',
    textAlign:"left",
    fontWeight: 400,
    flexShrink: 0,
  },
  imageGalleryContainer: {
    position: 'absolute',
    top: '201.9px',
    left: '0',
    width: '100%',
    height: '323px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '1254.4px',
    height: '323px',
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 0px 17.4px',
    boxSizing: 'border-box',
    gap: '19.3px',
    borderRadius: '18px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  eventsIcon: {
    height: '296.8px',
    width: '405.3px',
    position: 'relative',
    flexShrink: 0,
    objectFit: 'cover',
    maxWidth: '405.3px',
  },
  mainContainerParentEventsIcon: {
    height: '223px',
    width: '405.3px',
  },
  mainContainerItem: {
    position: 'absolute',
    top: '150.72px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '1500.3px',
    height: '90.8px',
  },
  mainContainerChild: {
    position: 'absolute',
    top: '454.3px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    backgroundColor: '#fff',
    width: '200%',
    maxWidth: '1400.5px',
    height: '199.1px',
  },
  eventSection: {
    position: 'absolute',
    top: '489.48px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: '564.1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  eventHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '154.2px',
    width: '100%',
  },
  arrowContainerIcon: {
    height: '46.8px',
    width: '46.8px',
    borderRadius: '23.38px',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  eventDescriptionContainer: {
    width: '100%',
    maxWidth: '645.2px',
    height: '82.3px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24.7px',
    marginTop: '-34.4px',
    position: 'relative',
  },
  heading5: {
    alignSelf: 'stretch',
    height: '18.1px',
    position: 'relative',
    letterSpacing: '0.02em',
    lineHeight: '120%',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  eventDescription: {
    width: '729px',
    height: '44.2px',
    position: 'relative',
    fontSize: '14px',
    letterSpacing: '0.02em',
    lineHeight: '165%',
    color: '#5b5b5b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
};

// Add this to your global CSS to hide scrollbars
const globalStyles = `
  .container::-webkit-scrollbar {
    display: none;
  }
`;