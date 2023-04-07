import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import { JwtId } from "../../helpers/JwtId.js";
import { checkLoginCredentials } from "../../redux/actions/userActions.js";
import { TextField } from "../../helpers/TextField";

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = JwtId();
  const status = useSelector((state) => state?.service?.token?.status);

  const validate = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  useEffect(() => {
    console.log(token)
    if (status === 200) {
      navigate("/");
    }
  }, [token,navigate,status]);

  const handleLogin=()=>{

  }

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-md-6 col-sm-10 col-12 mx-auto">
          <h2 className="text-center text-primary ">Login User</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              dispatch(checkLoginCredentials(values));
            }}
          >
            {(formikProps) => (
              <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField label="password" name="password" type="password" />
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formikProps.isValid}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Link to={"/register"}>Register</Link>
                </div>
                <div className="text-end ">
                  
                  <Link to={"/forgetpassword"} className="text-danger">
                    Forget Password
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
