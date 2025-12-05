import CargoInfoHero from '@/Solutions/Cargo/CargoInfoHero'
import CargoTracking from '@/Solutions/Cargo/CargoTracking'
import Challenges from '@/Solutions/Cargo/Challenges'
import GlobalTracking from '@/Solutions/Cargo/GlobalTracking'
import Hero from '@/Solutions/Cargo/Hero'
import React from 'react'

const Cargo = () => {
  return (
    <div>
       <Hero/>
       <CargoInfoHero/>
       <CargoTracking/>
       <Challenges/>
       <GlobalTracking/>
      
    </div>
  )
}

export default Cargo
