import React, { useEffect } from 'react'
import Hero2 from "../components/hero2";
import Project2 from "../components/project2";
import Feature3 from "../components/feature3";
import Process from "../components/process";
import CTA3 from "../components/c-t-a3";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Hero2 />
      <Project2 />
      <Feature3 />
      <Process />
  
    </>
  )
}

export default Service;