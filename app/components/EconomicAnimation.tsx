"use client"
import Lottie from 'lottie-react';
import * as React from 'react';
import Animation from '../animations/economicAnimation.json';

export interface IEconomicAnimationProps {
}

export default function EconomicAnimation (props: IEconomicAnimationProps) {

  return (
    <>
      <Lottie
        style={{ width: "400px", height: "400px" }}
        animationData={Animation}
        loop={true}
      />
    </>
  );
}