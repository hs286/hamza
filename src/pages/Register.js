import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RegisterComponent from "../components/register";
import { TabTitle } from "../helpers/TabTitle";

const Register = () => {
  TabTitle("REGISTER - Zoom Flooring");
  return (
    <>
      <Navbar />
      <RegisterComponent />
      <Footer />
    </>
  );
};

export default Register;
