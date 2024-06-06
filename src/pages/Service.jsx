import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import ServicesHero from "../components/services-hero";
import Project2 from "../components/project2";
import Feature3 from "../components/feature3";
import Process from "../components/process";
import CTA3 from "../components/c-t-a3";
import ServicesTab from "../components/services-tab";
import FAQ from "../components/f-a-q";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>TechCreare - Service</title>
        <meta name="description" content="Description for the service page" />
        {/* Add other meta tags specific to the about page */}
      </Helmet>
      <ServicesHero />
      <ServicesTab />      
      {/* <Project2 /> */}
      <Feature3 />
      <FAQ />

    </>
  )
}

export default Service;