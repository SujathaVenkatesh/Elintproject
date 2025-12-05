import CapabilitiesSection from '@/Solutions/DataCenter/CapabilitiesSection'
import Dashboard from '@/Solutions/DataCenter/Dashboard'
import Environment from '@/Solutions/DataCenter/Environment'
import FAQ from '@/Solutions/DataCenter/FAQ'
import FeaturedSolutions from '@/Solutions/DataCenter/FeaturedSolution'
import Hero from '@/Solutions/DataCenter/Hero'
import IndustriesSection from '@/Solutions/DataCenter/IndustriesSection'
import MonitoringRisks from '@/Solutions/DataCenter/MonitoringRisks'
import Silent from '@/Solutions/DataCenter/Silent'
import WorksImage from '@/Solutions/DataCenter/WorksImage'
import React from 'react'

const Datacenter = () => {
  return (
    <div>
        <Hero/>
        <Environment/>
        <MonitoringRisks/>
        <Silent/>
        <WorksImage/>
        <Dashboard/>
        <FeaturedSolutions/>
        <CapabilitiesSection/>
        <IndustriesSection/>
        <FAQ/>
      
    </div>
  )
}

export default Datacenter
