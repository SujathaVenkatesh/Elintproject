// import React from "react";

// const Button = ({ children }) => {
//   return (
//     <div className="flex justify-center sm:justify-start">
//       <button className="group px-4 sm:px-4 py-1 bg-gradient-to-b from-blue-500 via-blue-400 to-sky-400 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm overflow-hidden whitespace-nowrap min-w-max">
//         <span className="text-[17px] font-medium whitespace-nowrap">{children}</span>
//         <img
//           src="/arrow.png"
//           alt="arrow"
//           className="w-8 h-10 transition-all duration-500 transform group-hover:translate-x-12 group-hover:opacity-0 flex-shrink-0"
//         />
//       </button>
//     </div>
//   );
// };

// export default Button;



// import React from "react";

// const Button = ({ children }) => {
//   return (
//     <div className="flex justify-center sm:justify-start">
//       <button
//         className="group px-4 sm:px-5 py-2 
//                    bg-gradient-to-b from-[#4AB3FF] via-[#3AA0FF] to-[#1C8CFF] 
//                    text-white rounded-full 
//                    shadow-[0_8px_20px_rgba(28,140,255,0.45)] 
//                    transition-all duration-300 
//                    flex items-center gap-2 text-sm overflow-hidden"
//       >
//         <span className="text-base font-medium">{children}</span>
//         <img
//           src="/Arrow.png"
//           alt="arrow"
//           className="w-8 h-10 transition-all duration-500 transform 
//                      group-hover:translate-x-12 group-hover:opacity-0"
//         />
//       </button>
//     </div>
//   );
// };

// export default Button;


// import React from "react";

// const Button = ({ children }) => {
//   return (
//     <div className="flex justify-center sm:justify-start">
//       <button
//         className="group px- sm:px-8 py-1.5 
//                    rounded-full text-white font-medium 
//                    bg-gradient-to-b from-[#5FC3FF] via-[#1E90FF] to-[#5FC3FF]
//                    shadow-[0_10px_25px_rgba(30,144,255,0.45)] 
//                    transition-all duration-300 ease-out 
//                    flex items-center gap-2 text-base whitespace-nowrap"
//       >
//         <span>{children}</span>
//         <img
//           src="/Arrow.png"
//           alt="arrow"
//           className="w-8 h-10 transition-all duration-500 transform 
//                      group-hover:translate-x-12 group-hover:opacity-0"
//         />
//       </button>
//     </div>
//   );
// };

// export default Button;


import React from "react";

const Button = ({ children, gradient }) => {
  // Default gradient
  const defaultGradient = 'linear-gradient(to bottom, #55ABEE 1%, #52ACF4 57%, #79C0F8 100%)';
  
  return (
    <div className="flex justify-center sm:justify-start ">
    <button
  className="group px-3 sm:pl-8 py-0.2
             rounded-full text-white font-medium 
             shadow-[0_-3.29px_20.67px_0_rgba(0,0,0,0.1)] 
             transition-all duration-300 ease-out 
             flex items-center justify-center gap-5 text-base whitespace-nowrap border-4 border-gray-50/90
             hover:shadow-[0_-3.29px_25px_0_rgba(0,0,0,0.15)]  cursor-pointer"
  style={{
    background: gradient || defaultGradient
  }}
>

        <span className="leading-none">{children}</span>
        <img
          src="/Layer_1.png"
          alt="arrow"
          className="w-7 h-10 transition-all duration-500 transform 
                     group-hover:translate-x-14 group-hover:opacity-0"
        />
      </button>
    </div>
  );
};

export default Button;