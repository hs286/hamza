import React from "react";
import values from "../../images/values.png";
import vision from "../../images/vision.jpg";
import purpose from "../../images/purpose.jpg";
import caring from "../../images/caring.png";

function AboutUsComponent() {
  return (
    <>
      <div className="our-values-about-us">
        <img className="w-100" src={values} alt="about"></img>
        <div className="about-us">
          <h1> About Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="values-about-us">
          <div className="row">
            <div className="col-12">
              <h1>Trusted by Thousands of Families</h1>
            </div>
            <p>
              Hiring someone to clean your home can feel like a big decision.
              After all, not only do you want to hire the best house cleaning
              service you can, you want to make sure they’re professionals you
              can trust. Floor Cleaning is a well-known and best choice for you
              to make your floor that reflects best look.
            </p>
          </div>
          <div className="row">
            <div className=" col-lg-6">
              <img src={purpose} alt="hi"></img>
              <h2>Purpose</h2>
              <p>
                To build a service community that enriches people's lives by
                delivering amazing experiences.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={vision} alt="hi"></img>
              <h2>Vision</h2>
              <p>
                To create clean for our clients and to build long-term
                relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img className="w-100" style={{ height: "180px" }} src={caring} alt="hi"></img>
      <div className="text-center pt-5">
        <h1 className="text-primary">
          <b> Caring for Others </b>
        </h1>

        <div className="text-center px-5 mx-5">
          <p>
            As our main priority is our customers so here is Floor Cleaning
            always ready for you.Your floor care is our main resposibilty plus
            care of you as well.Through the Floor Cleaning, we empower those
            communities to fight domestic violence and help give victims the
            opportunity to live happily. Floor Cleaning believes everyone
            deserves to feel comfortable and safe in their own homes.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUsComponent;
