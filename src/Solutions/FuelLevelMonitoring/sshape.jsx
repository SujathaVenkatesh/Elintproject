"use client";

export default function HiddenChallenges() {
  const challenges = [
    {
      title: "Weak Policy Enforcement",
      text: "Overfills, untracked top-ups, and location violations slip through without automated control.",
      left: "61%",
      top: "-3%",
      icon: "/Hicon-2.png",
    },
    {
      title: "Losing the Competitive Edge",
      text: "While others go digital, outdated fuel practices slow efficiency, visibility, and scale.",
      left: "87%",
      top: "39%",
      icon: "/Hicon.png",
    },
    {
      title: "Reactive Downtime",
      text: "Fuel shortages often get noticed too late—triggering breakdowns and service failures.",
      left: "65%",
      top: "70%",
      icon: "/Hicon-4.png",
    },
    {
      title: "Disconnected Teams & Sites",
      text: "Scattered operations mean fuel data stays isolated—slowing decisions and hurting coordination.",
      left: "40%",
      top: "100%",
      icon: "/Hicon-5.png",
    },
    {
      title: "No Fuel Accountability",
      text: "Manual records lack proof—leading to disputes, blind spots, and internal misuse.",
      left: "13%",
      top: "72%",
      icon: "/Hicon-6.png",
    },
    {
      title: "Unpredictable Fuel Budgets",
      text: "Lack of clarity leads to inaccurate forecasts, poor negotiations, and frequent overruns.",
      left: "34%",
      top: "39%",
      icon: "/Hicon-3.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 bg-no-repeat bg-center bg-cover md:bg-[url('/bgshapeimage.png')]">
      <div className="max-w-[1250px] mx-auto text-center px-6 ">
        {/* Heading */}
        <h2
          className="font-manrope font-normal
font-['Manrope']
 text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px] font-light "
        >
          Hidden Challenges in Fuel-Intensive Operations
        </h2>
        <p
          className="font-manrope font-normal
font-['Manrope']
 mt-1  font-normal
font-['Manrope']
 text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px] mt-2"
        >
          Even with the best teams, fuel mismanagement happens when visibility
          is lost.
        </p>

        {/* Challenges */}
        <div className="relative w-full mt-20 h-[600px] hidden md:block">
          {challenges.map((c, index) => (
            <div
              key={index}
              className="absolute w-[240px] text-center"
              style={{
                left: c.left,
                top: c.top,
                transform: "translate(-50%, -50%)",
              }}
            >
              <h3
                className="font-manrope font-normal
font-['Manrope']
 mt-1  font-normal
font-['Manrope']
 text-[#737373] mt-3 leading-[1.65]
                text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[28px] "
              >
                {c.title}
              </h3>
              <p
                className="font-manrope font-normal
font-['Manrope']
 mt-1  font-normal
font-['Manrope']
 text-[#737373] mt-3 leading-[1.65]
                text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[13px]
                min-[1920px]:!text-[28px] mt-1"
              >
                {c.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Layout */}
        {/* Mobile / Tablet Layout */}
        <div className="md:hidden mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {challenges.map((c, index) => (
            <div key={index} className="text-center">
              <img
                src={c.icon}
                alt={c.title}
                className="mx-auto mb-2 w-12 h-12 sm:w-12 sm:h-12"
              />
              <h3 className="text-[16px] text-[#4A4A4A] font-medium">
                {c.title}
              </h3>
              <p className="text-[13px] text-[#6D6D6D] leading-[1.45] mt-1">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
