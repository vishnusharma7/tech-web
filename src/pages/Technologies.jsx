import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet';
import ServicesTab from "../components/services-tab";
import ServicesHero from "../components/services-hero";
import Feature3 from "../components/feature3";
import FAQ from "../components/f-a-q";
function Technologies() {
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
export default Technologies;
