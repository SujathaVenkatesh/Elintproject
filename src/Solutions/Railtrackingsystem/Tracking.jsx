import React from "react";

const WagonWithoutTracking = () => {
  // ⭐ TOP TEXT CONTENT (2 items)
  const topRow = [
    {
      title: "Shipment Risks",
      desc: "Lost or delayed wagons impact delivery timelines and reputation.",
    },
    {
      title: "Low Wagon Visibility",
      desc: "Without real-time GPS, wagon locations stay unknown—causing delays and rerouting.",
    },
  ];

  // ⭐ ICON ROW (5 icons remains same)
  const iconRow = [
    "/transformer2.png",
    "/transformer3.png",
    "/transformer4.png",
    "/transformer5.png",
    "/transformer6.png",
  ];

  // ⭐ BOTTOM ROW TEXT (3 items)
  const bottomRow = [
    {
      title: "High Operational Costs",
      desc: "Manual tracking wastes time, increases errors, and drives up costs.",
    },
    {
      title: "No Client Visibility",
      desc: "Clients can’t monitor shipments, hurting trust and satisfaction.",
    },
    {
      title: "No Theft Detection",
      desc: "Without geo-fence alerts, there's no way to detect unauthorized wagon movement or theft.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[32px] font-semibold text-gray-900">
          What Happens Without Wagon Tracking?
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Without smart tracking, your rail operations lack visibility and precision. See the impact.
        </p>
      </div>

      {/* TOP TEXT (Centered Above icons 2 & 4) */}
      <div className="flex justify-center gap-[70px] max-w-6xl mx-auto mb-12">
        <div className="text-center w-[280px]">
          <h3 className="text-[18px] font-semibold">{topRow[0].title}</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed">{topRow[0].desc}</p>
        </div>

        <div className="text-center w-[280px]">
          <h3 className="text-[18px] font-semibold">{topRow[1].title}</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed">{topRow[1].desc}</p>
        </div>
      </div>

      {/* ICON ROW */}
      <div className="flex justify-center gap-20 my-12">
        {iconRow.map((img, index) => (
          <img key={index} src={img} className="w-[95px] object-contain" alt="" />
        ))}
      </div>

      {/* BOTTOM TEXT ROW */}
      <div className="grid grid-cols-3 gap-10 max-w-5xl mx-auto mt-10 text-center">
        {bottomRow.map((item, index) => (
          <div key={index} className="px-6">
            <h3 className="text-[18px] font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WagonWithoutTracking;
