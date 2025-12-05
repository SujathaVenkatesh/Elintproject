import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-lg font-semibold text-gray-800">
            Featured Products
          </h2>
          <p className="text-sm text-gray-500">
            Explore the products we recommend for optimal performance and reliability.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {[
            {
              img: "/voyager.png",
              title: "Voyager 4G Mini",
              desc: "Rugged and lightweight 4G LTE device for asset tracking and energy monitoring."
            },
            {
              img: "/voyagar1.png",
              title: "Voyager 4G",
              desc: "Industrial IoT gateway built for reliable edge processing and seamless cloud connectivity."
            },
            {
              img: "/Voyager2.png",
              title: "Ultra Level Pro",
              desc: "Compact radar level sensor built for precise, reliable, and wireless tank monitoring."
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* IMAGE (OUTSIDE BOX) */}
              <img
                src={item.img}
                alt={item.title}
                className="w-40 mb-6 object-contain"
              />

              {/* TEXT BOX */}
              <div className="bg-gray-100 rounded-2xl w-full py-10 px-6">
                <h3 className="font-medium text-gray-800 text-lg">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-2 max-w-[260px] mx-auto">
                  {item.desc}
                </p>

<div className="flex justify-center mt-6">
  <button
    className="
      flex items-center gap-3 
      bg-[#1B9AFB]
      text-white 
      px-7 py-2.5 
      rounded-full 
      shadow-md 
      hover:bg-[#1585d6]
      transition
    "
  >
    <span className="text-sm font-medium">Explore More</span>

    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
      <span className="text-[#1B9AFB] text-base">→</span>
    </span>
  </button>
</div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
