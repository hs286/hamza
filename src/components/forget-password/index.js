import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import { TextField } from "../../helpers/TextField";
import { updateUserPassword } from "../../redux/actions/userActions";

function FogetPasswordComponent() {
  const dispatch = useDispatch();
  const validate = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-md-6 col-sm-10 col-12 mx-auto">
          <h2 className="text-center text-primary ">Update Password</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              dispatch(updateUserPassword(values));
            }}
          >
            {(formikProps) => (
              <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField
                  label="New Password"
                  name="password"
                  type="password"
                />
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formikProps.isValid}
                  >
                    Update Password
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

export default FogetPasswordComponent;
