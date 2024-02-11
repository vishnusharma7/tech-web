import React, { useEffect } from 'react';
import Hero2 from "../components/hero2";
import Project from "../components/project";
import Feature1 from "../components/feature1";
import Testimonial from "../components/testimonial";
import CTA3 from "../components/c-t-a3";

function Casestudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Hero2 />
      <Project />
      <Feature1 />
      <Testimonial />
 
    </>
  );
}

export default Casestudy;
