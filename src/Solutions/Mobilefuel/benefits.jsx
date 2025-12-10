import React from "react";

const FuelBenefits = () => {
  const topRow = [
    {
      title: "Long-Lasting Accuracy",
      desc: "Maintains ± 0.05% precision even after years with minimal recalibration—ensures reliability.",
      icon: "/fuelicon1.png",
    },
    {
      title: "Advanced Anti-Tampering Security",
      desc: "Dual protection and tamper-proofing (OIML certified) prevents fraud and ensures data integrity.",
      icon: "/fuelicon2.png",
    },
    {
      title: "Globally Certified System",
      desc: "Fully compliant with OIML R117, API, MID, and worldwide standards—trusted for regulated fuel trade.",
      icon: "/fuelicon5.png",
    },
  ];

  const bottomRow = [
    {
      title: "Exceptional Repeatability",
      desc: "Delivers consistent flow measurements with 0.02% repeatability across all operating ranges.",
      icon: "/fuelicon4.png",
    },
    {
      title: "Smart Billing Accuracy",
      desc: "Enhances accuracy using sensors + intelligent electronics—ensuring honest and transparent fuel records.",
      icon: "/fuelicon3.png",
    },
  ];

  const iconRow = ["/fuelicon1.png", "/fuelicon2.png", "/fuelicon5.png", "/fuelicon4.png", "/fuelicon3.png"];

  return (
    <section className="w-full bg-white py-20 font-['Manrope']">
      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-regular text-[#3D3D3D]">
          Benefits Of Elint's Smart Fuel Dispenser
        </h2>
        <p className="text-gray-500 text-[19px] max-w-5xl mx-auto">
          Here's what you gain with precision, automation, and intelligence built-in.
        </p>
      </div>

      {/* ===================================================== */}
      {/* ====================== MOBILE VIEW ================== */}
      {/* ===================================================== */}

      <div className="md:hidden px-6 space-y-14">
        {/* TOP ROW */}
        {topRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <img src={item.icon} className="w-[85px] mb-4" />
            <h3 className="text-[18px] text-[#3D3D3D] font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mt-2 max-w-xs">{item.desc}</p>
          </div>
        ))}

        {/* ICON ROW */}
<div className="hidden md:flex justify-center gap-33 my-12">
  {iconRow.map((img, index) => (
    <img key={index} src={img} className="w-[95px] object-contain" alt="" />
  ))}
</div>


        {/* BOTTOM ROW */}
        {bottomRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <img src={item.icon} className="w-[85px] mb-4" />
            <h3 className="text-[18px] text-[#3D3D3D] font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mt-2 max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ===================================================== */}
      {/* ====================== DESKTOP VIEW ================= */}
      {/* ===================================================== */}

      <div className="hidden md:block">
        {/* TOP TEXT ROW (NO CHANGE) */}
        <div className="grid grid-cols-3 gap-50 max-w-[1180px] mx-auto mb-16 text-center">
          {topRow.map((item, index) => (
            <div key={index} className="px-4">
              <h3 className="text-[18px] text-[#3D3D3D]">{item.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ICON ROW (NO CHANGE) */}
<div className="hidden md:flex justify-center gap-33 my-12">
  {iconRow.map((img, index) => (
    <img key={index} src={img} className="w-[95px] object-contain" alt="" />
  ))}
</div>


        {/* BOTTOM TEXT ROW (NO CHANGE) */}
{/* BOTTOM TEXT ROW (NO CHANGE except FIXED closing tag) */}
<div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto mt-16 text-center">
  {bottomRow.map((item, index) => (
    <div key={index} className="px-6">
      <h3 className="text-[18px] text-[#3D3D3D] mb-2">{item.title}</h3>
      <p className="text-gray-500 text-[14px] leading-relaxed">
        {item.desc}
      </p>  
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FuelBenefits;
