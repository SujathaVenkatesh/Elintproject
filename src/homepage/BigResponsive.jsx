'use client';

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import { ConceptToSolutionSection } from './Bigmobilescreen';
import Big from './Big';

const ResponsiveBig = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); 


  return (
    <div>
      {isMobile ? <ConceptToSolutionSection/> : <Big/>}
    </div>
  );
};

export default ResponsiveBig;