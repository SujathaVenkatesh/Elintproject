'use client';

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import Iot from './Iot';
import { IoTSolutionsSection } from './lotmobilescreen';

const ResponsiveIot = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); 


  return (
    <div>
      {isMobile ? <IoTSolutionsSection/> : <Iot/>}
    </div>
  );
};

export default ResponsiveIot;