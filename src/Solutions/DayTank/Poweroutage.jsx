import React from 'react'

const Poweroutage = () => {
  const imageUrl = "/poweroutage_bg.png";

  return (
    <section className="w-full bg-white font-manrope">
      <div className="
          relative flex items-center hero-section overflow-hidden w-full
          min-[1520px]:bg-[url('/poweroutage_bg.png')]
          bg-cover bg-right
          h-auto
          min-[1520px]:h-[55vh]
        "
      >
        {/* <div className=""> */}
        <div className=' relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px]
              py-5 
            sm:py-10 
            md:py-16 
            lg:py-15 
            xl:py-20
            2xl:py-[120px]
            min-[1920px]:!px-[0px]
            
            '>
          <div className="grid h-auto grid-cols-1 sm:grid-cols-1 gap-x-10 gap-y-9" style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
            <h2 className="font-manrope   text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]">
              Power Outage? No Panic. Your Fuel Tank Already Knew.
            </h2>
            <div className='py-2 min-[1520px]:py-20 '>
              <p className="font-manrope mt-1 
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[24px]
                min-[1920px]:!text-[26px]
                font-normal  text-[#494949]">
                Say hello to stress-free fuel automation.
              </p>
              <p style={{
                color: '#83847F'
              }} className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px] mt-3 leading-[1.65]">
                While others are scrambling to refuel, your day tank is already ahead—fueled, monitored, and ready for  action <br />
                No guesswork. No manual checks. Just fuel, flowing where and when it's needed
              </p>
            </div>
            <p className="font-manrope mt-1 text-[#34A4CF]  text-[13px]
                sm:text-[14px]
                md:text-[16px]
                lg:text-[18px]
                xl:text-[19px] font-medium
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[26px] leading-[1.65]">
              Welcome to the future of fuel management—automated, real-time, and always reliable.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Poweroutage