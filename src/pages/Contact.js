import React from "react";
import ContactUsComponent from "../components/contact-us-component";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TabTitle } from "../helpers/TabTitle";

const Contact = () => {
  TabTitle("CONTACT-US - Zoom Flooring");
  return (
    <>
      <Navbar />
      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default Contact;
