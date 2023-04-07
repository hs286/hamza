import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMail } from "../../redux/actions/serviceActions";

export const Contact = () => {
  const dispatch = useDispatch();
  const options = [
    "Select Option",
    "Get A Quote",
    "FLoor Installation",
    "Floor Cleaning",
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Air Duct Cleaning",
    "Upholstery Cleaning",
    "Other",
  ];
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  var { name, email, subject, message } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject) {
      setError("Please select an option");
    } else {
      dispatch(sendMail(formData));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === "subject") {
      setError("");
    }
  };
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Contact For Any Queries</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control border-secondary"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control border-secondary"
                    id="email"
                    placeholder="Your mail"
                    required="required"
                    value={email}
                    onChange={handleChange}
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <select
                    className="custom-select w-100 fs-5 p-2 border-secondary text-muted mb-3"
                    id="subject"
                    value={subject}
                    onChange={handleChange}
                    required
                  >
                    {options.map((option, index) => {
                      if (index === 0) {
                        return (
                          <option key={index} value={""} disabled>
                            {option}
                          </option>
                        );
                      } else {
                        return (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        );
                      }
                    })}
                  </select>
                  {error && (
                    <div className="error text-danger">
                      <span>{error}</span>
                    </div>
                  )}
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control border-secondary"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
            <div className="d-flex flex-column">
              <h5 className="font-weight-semi-bold text-info mb-3">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-danger mr-3"></i>8911 N
                Capital of Texas Hwy St. 4200 Austin, TX 78759
              </p>
              <h5 className="font-weight-semi-bold text-info mb-3">Phone</h5>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-success mr-3"></i>7378951918
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
