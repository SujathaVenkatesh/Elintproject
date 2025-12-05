import Challenges from '@/Solutions/LifeScience/Challenges'
import Dashboard from '@/Solutions/LifeScience/Dashboard'
import EveryTank from '@/Solutions/LifeScience/EveryTank'
import Faq from '@/Solutions/LifeScience/Faq'
import FastSetup from '@/Solutions/LifeScience/FastSetup'
import FeaturedSol2 from '@/Solutions/LifeScience/FeaturedSol2'
import FeaturedSol1 from '@/Solutions/LifeScience/Featuresol1'
import Hero from '@/Solutions/LifeScience/Hero'
import LifeScienceSection from '@/Solutions/LifeScience/LifeScienceSection'
import Parameters from '@/Solutions/LifeScience/Parameters'
import Sec2 from '@/Solutions/LifeScience/Sec2'
import React from 'react'

const LifeScience = () => {
  return (
    <div>
        <Hero/>
        <Sec2/>
        <Challenges/>
        <LifeScienceSection/>
        <EveryTank/>
        <Parameters/>
        <FastSetup/>
        <Dashboard/>
        <FeaturedSol1/>
        <FeaturedSol2/>
        <Faq/>
        
      
    </div>
  )
}

export default LifeScience
