// import React, { useState, useEffect } from 'react';

// export default function AnimatedConnectButton() {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [gradientIndex, setGradientIndex] = useState(0);
  
//   const gradients = [
//     'linear-gradient(135deg, #C6E2F5 0%, #88C9FC 44%, #C6E2F5 100%)',
//     'linear-gradient(135deg, #C6E2F5 0%, #90CBF8 21%, #54B2FC 44%, #C6E2F5 100%)',
//     'linear-gradient(135deg, #C6E2F5 0%, #88C9FC 44%, #C6E2F5 100%)',
//     'linear-gradient(135deg, #53AEEC 0%, #54B2FC 44%, #53AEEC 100%)',
//     'linear-gradient(135deg, #C6E2F5 0%, #88C9FC 44%, #C6E2F5 100%)'
//   ];

//   useEffect(() => {
//     const initialTimer = setTimeout(() => {
//       startAnimation();
      
//       const interval = setInterval(() => {
//         startAnimation();
//       }, 2400); // Total cycle time (600ms animation + pause)
      
//       return () => clearInterval(interval);
//     }, 15);

//     return () => clearTimeout(initialTimer);
//   }, []);

//   const startAnimation = () => {
//     setIsAnimating(true);
    
//     // Change gradient during animation
//     setTimeout(() => {
//       setGradientIndex(prev => (prev + 1) % gradients.length);
//     }, 300);
    
//     // Reset animation
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 1200);
//   };

//   return (
//     <div className="container">
//       <button 
//         className="connect-button"
//         style={{
//           background: gradients[gradientIndex]
//         }}
//       >
//         <span className={`icon ${isAnimating ? 'animating' : ''}`}>✈</span>
//         <span className="text">Let's Connect</span>
        
//         {isAnimating && (
//           <div className="ripple-container">
//             <div className="ripple ripple-1"></div>
//             <div className="ripple ripple-2"></div>
//             <div className="ripple ripple-3"></div>
//           </div>
//         )}
//       </button>

//       <style jsx>{`
//         .container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .connect-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           padding: 12px 12px;
//           border: none;
//           border-radius: 50px;
//           font-size: 18px;
//           font-weight: 600;
//           color: white;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: background 600ms linear;
//           box-shadow: 0 8px 25px rgba(126, 200, 227, 0.4);
//         }

//         .connect-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 35px rgba(126, 200, 227, 0.5);
//         }

//         .icon {
//           font-size: 10px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 2;
//           transition: transform 600ms linear;
//         }

//         .icon.animating {
//           animation: moveDown 800ms linear forwards, returnUp 800ms linear 800ms forwards;
//         }

//         .text {
//   letter-spacing: 0.3px;
//   position: relative;
//   z-index: 2;
//   font-size: 16px;
//   line-height: 101.5%;
//   color: #fafcfd;
// }

//         .ripple-container {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           pointer-events: none;
//         }

//         .ripple {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           border: 2px solid rgba(255, 255, 255, 0.8);
//           border-radius: 50%;
//           width: 20px;
//           height: 20px;
//           opacity: 0;
//         }

//         .ripple-1 {
//           animation: rippleExpand 1200ms linear forwards;
//         }

//         .ripple-2 {
//           animation: rippleExpand 1200ms linear 200ms forwards;
//         }

//         .ripple-3 {
//           animation: rippleExpand 1200ms linear 400ms forwards;
//         }

//         @keyframes moveDown {
//           0% {
//             transform: translateX(0);
//           }
//            100% {
//     transform: translate(50px, 12px); /* Adjust 25px height as per your design */
//   }
//         }

//        @keyframes returnUp {
//   0% {
//     transform: translate(50px, 12px);
//   }
//   100% {
//     transform: translate(0, 0);
//   }
// }

//         @keyframes rippleExpand {
//           0% {
//             width: 20px;
//             height: 20px;
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.8;
//           }
//           50% {
//             opacity: 0.6;
//           }
//           100% {
//             width: 150px;
//             height: 150px;
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import './button.css';

export default function AnimatedConnectButton() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);
  
  const gradients = [
    'linear-gradient(147.48deg, #C6E2F5 0%, #54B2FC 43.84%, #C6E2F5 100%)', // Starting/resting color
    'linear-gradient(147.48deg, #C6E2F5 0%, #90CBF8 21%, #54B2FC 43.84%, #C6E2F5 100%)', // Moving down color
    'linear-gradient(147.48deg, #53AEEC 0%, #54B2FC 43.84%, #53AEEC 100%)', // Hold at bottom - color 1
    'linear-gradient(147.48deg, #C6E2F5 0%, #54B2FC 43.84%, #C6E2F5 100%)', // Hold at bottom - color 2
    'linear-gradient(147.48deg, #C6E2F5 0%, #54B2FC 43.84%, #C6E2F5 100%)'  // Moving back up color
  ];

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      startAnimation();
      
      const interval = setInterval(() => {
        startAnimation();
      }, 4000); // Total cycle time
      
      return () => clearInterval(interval);
    }, 15);

    return () => clearTimeout(initialTimer);
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setGradientIndex(0); // Start color
    
    // Change to "moving down" color
    setTimeout(() => {
      setGradientIndex(1);
    }, 300);
    
    // Reach bottom - first hold color
    setTimeout(() => {
      setGradientIndex(2);
    }, 800);
    
    // At bottom - second hold color
    setTimeout(() => {
      setGradientIndex(3);
    }, 1600);
    
    // Start moving back up color
    setTimeout(() => {
      setGradientIndex(4);
    }, 2400);
    
    // Reset animation
    setTimeout(() => {
      setIsAnimating(false);
      setGradientIndex(0);
    }, 3200);
  };

  return (
    <div className="container">
      <div className="button-wrapper">
        <button 
          className="connect-button"
          style={{
            background: gradients[gradientIndex],
          }}
        >
          <span className={`icon ${isAnimating ? 'animating' : ''}`}>
              <img src="/NavVector.png" alt="connect" className="vector-image" />
            </span>
          <div className="button-content">
            
            <span className="text">Let's Connect</span>
          </div>
          
          {/* Glow effects */}
          <div className="glow-effect glow-1"></div>
          <div className="glow-effect glow-2"></div>
          <div className="glow-effect glow-3"></div>
          <div className="glow-effect glow-4"></div>

          {isAnimating && (
            <div className="ripple-container">
              <div className="ripple ripple-1"></div>
              <div className="ripple ripple-2"></div>
              <div className="ripple ripple-3"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}