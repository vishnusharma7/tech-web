/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Contact from "../components/contact";
import CTA3 from "../components/c-t-a3";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Helmet>
        <title>TechCreare - Contact</title>
        <meta name="description" content="Description for the contact page" />
        {/* Add other meta tags specific to the about page */}
      </Helmet>
    <Contact />
    </>
  )
}

export default ContactUs