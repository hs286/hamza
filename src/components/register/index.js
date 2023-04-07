import React, { useEffect } from "react";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/esm/Button";
import "react-phone-input-2/lib/style.css";
import { TextField } from "../../helpers/TextField";
import {
  registerUser,
  userRegistered,
} from "../../redux/actions/userActions.js";

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user?.registerError);

  const validate = Yup.object().shape({
    phone: Yup.string()
      .min(10, "Invalid phone number")
      .required("Required"),
    name: Yup.string()
      .max(20, "Name must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Required"),
    address: Yup.string()
      .min(20, "Address must be at least 20 charaters")
      .required("Required"),
  });

  useEffect(() => {
    if (status === false) {
      navigate("/");
      dispatch(userRegistered(null, true));
    }
  }, [status,dispatch,navigate]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-10 col-12 mx-auto">
          <h2 className="text-center text-primary m-5">Register User</h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              address: "",
              phone: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
              dispatch(registerUser(values));
            }}
          >
            {(formikProps) => (
              <Form>
                <TextField label="Name" name="name" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Address" name="address" type="text" />
                <TextField label="Password" name="password" type="password" />

                <Field name="phone">
                  {({ field, form }) => (
                    <div>
                      <label htmlFor={field.name}>
                        {field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)}
                      </label>
                      <PhoneInput
                        {...field}
                        disableCountryCode={true}
                        country={"us"}
                        inputClass={`w-100 ${
                          form.touched.phone ? null : "border"
                        } ${
                          form.touched.phone &&
                          form.errors.phone &&
                          "is-invalid"
                            ? "border-danger"
                            : form.touched.phone
                            ? "border-success"
                            : "border-dark"
                        }`}
                        onlyCountries={["us"]}
                        placeholder="Enter phone number"
                        onChange={(value) =>
                          form.setFieldValue("phone", value || "")
                        }
                        onBlur={() => form.setFieldTouched("phone", true)}
                      />

                      <ErrorMessage
                        component="div"
                        name={field.name}
                        className="error text-danger"
                      />
                    </div>
                  )}
                </Field>
                {/* <Field name="Phone">
                  {({ field, form }) => (
                    <div className="mb-5">
                      <label htmlFor={field.name}>{field.name}</label>
                      <PhoneInput
                        {...field}
                       disableCountryCode={true}
                        country={"us"}
                        onlyCountries={['us']}
                        inputClass="border-dark rounded"
                        inputStyle={{ width: "100%" }}
                        placeholder="Enter phone number"
                        onChange={(value) =>
                          form.setFieldValue("phone", value || "")
                        }
                        // onBlur={() => form.setFieldTouched("phone", true)}
                      />
                      <ErrorMessage  component="div"  name={field.name}  className="error" />
                    </div>
                  )}
                </Field> */}
                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                  <Link to={"/login"}>Login</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Index;
