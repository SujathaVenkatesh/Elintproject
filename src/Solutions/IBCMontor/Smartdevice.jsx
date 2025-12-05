import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mb-14">
          Gain instant insights into your data center’s environment through a
          unified web and mobile dashboard.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          <div className="w-full lg:w-[70%] flex justify-center">
            <img
              src="/dctab.png"
              alt="Web Dashboard"
              className="w-full max-w-[900px] h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-[30%] flex justify-center">
            <img
              src="/dcmob.png"
              alt="Mobile Dashboard"
              className="w-full max-w-[260px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;