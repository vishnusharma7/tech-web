/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Contact from "../components/contact";
import CTA3 from "../components/c-t-a3";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Contact />
    </>
  )
}

export default ContactUs