import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { registerUser } from "../controllers/register";

const Register = () => {
  const history = useHistory();

  const user = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    async onSubmit(values) {
      try {
        if (values.password === values.repeatPassword) {
          delete values.repeatPassword;
          const response = await registerUser(values);
          if(response) alert("Registered successfully. Please login to continue.");
          history.push("/login");
        } else {
            alert("Passwords doesn't match.");
            user.setValues({
                ...user.values,
                password: "",
                repeatPassword: "",
              });
        } 
    } catch (error) {
        alert(error.response.data.msg);
        user.setValues({
          ...user.values,
          password: "",
          repeatPassword: "",
        });
      }
    },
  });

  const googleRegister = async () => {
    // try {
    //   await registerGoogle();
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="login container mt-5 text-center">

        <h1 className="display-5 fw-bold text-black">Register</h1>

        <div className="row mt-5 border">

            <div className="col-sm-6 d-flex justify-content-center align-items-center">
                <div className="p-3">

                <form onSubmit={user.handleSubmit} className="w-100">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={user.values.name}
                              onChange={user.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={user.values.email}
                              onChange={user.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={user.values.password}
                              onChange={user.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="repeatPassword"
                              value={user.values.repeatPassword}
                              onChange={user.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-block btn-outline-dark"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                        </form>

                        <span className="badge rounded-circle bg-dark p-2">Or</span>
                        <div>
                            <button onClick={googleRegister} className="btn text-light btn-block mt-4 google-login">
                             <i class="fab fa-google-plus-g"></i>  Register with Google
                            </button>
                        </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="p-5 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="fw-bold">Already Registered?</h3>
                    <a href="/login" className="btn btn-secondary w-100">Login</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Register;
