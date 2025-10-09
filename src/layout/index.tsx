'use client';
import ReactLenis from 'lenis/react';
import React, { FC } from 'react';

const OverallLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
};

export default OverallLayout;
