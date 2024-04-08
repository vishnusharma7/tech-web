/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Hero1 from "../components/hero1";
import History1 from "../components/history1";
import Team1 from "../components/team1";

import Newsletter from "../components/newsletter";
import Feature1 from "../components/feature1";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
  <Helmet>
        <title>TechCreare - About</title>
        <meta name="description" content="Description for the about page" />
        {/* Add other meta tags specific to the about page */}
      </Helmet>
      <Hero1 />
      <History1 />
      <Team1 />
      <Feature1 />
      <Newsletter />
    </>
  );
};

export default About;
