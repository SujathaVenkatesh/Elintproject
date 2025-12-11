import React from "react";

const MyIntro = () => {
  return (
    <section className="w-full bg-white ">
      <div
        className=" p-10
          relative w-full  mx-0
         sm:pl-10 md:pl-14 lg:pl-20 xl:pl-[20vw]
          pr-0 py-20
          font-['Manrope'] font-normal"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] items-center gap-12">
          <div
            className="
              max-w-[880px]"
          >
            <p
              className="
                text-[14px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]
                2xl:max-[1920px]:text-[24px]
                min-[1920px]:!text-[28px]"
            >
              Imagine never worrying about dry runs, power surges, or tank
              overflows again. With Elint Systems' Smart Water Tank Automation
              solution, you gain precision control, real-time insights, and
              AI-powered scheduling—all from your smartphone. It’s not just
              automation. It’s smart water freedom.
            </p>
          </div>
          <div className="flex justify-end items-center w-full">
            <img
              src="/handspng.png"
              alt="Water Tank Automation"
              className="
                w-[220px]
                sm:w-[260px]
                md:w-[300px]
                lg:w-[340px]
                xl:w-[380px]
                2xl:w-[500px]
                w-full
                h-full
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyIntro;
