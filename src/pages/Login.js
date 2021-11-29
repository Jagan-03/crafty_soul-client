import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { GoogleLogin } from 'react-google-login';

// Controllers
import { loginUser } from "../controllers/login";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit(values) {
      try {
        const response = await loginUser(values);
        const { token, user } = response.data;
        console.log(user);
        await localStorage.setItem("userToken", token);
        await localStorage.setItem("user_id", user.user_id);
        await localStorage.setItem("user_email", user.email);
        history.push("/home");
      } catch (error) {
        alert(error.response.data.msg);
      }
    },
  });

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    
    try {
      dispatch({type : "AUTH", data : {result, token}});
      history.push("/");
    } catch (error) {
      console.log(error);
    }

  }

  const googleFailure = (error) => {
    console.log(error);
    console.log("failed");
  }


  return (
    <div className="login container mt-5 text-center">

        <h1 className="display-5 fw-bold text-black">Login</h1>

        <div className="row mt-5">

            <div className="col-sm-6 border d-flex justify-content-center align-items-center">
                <div className="p-3">

                <form onSubmit={user.handleSubmit}>
                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account if you're already registered.
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="email"
                            value={user.values.email}
                            onChange={user.handleChange}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name="password"
                            value={user.values.password}
                            onChange={user.handleChange}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-block btn-outline-dark"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        </form>

                        <span className="badge rounded-circle bg-dark p-2">Or</span>
                        <div>
                        <GoogleLogin 
                          clientId="1312823965-e6vshng1kb64gur17a3ihud2os7vmi8o.apps.googleusercontent.com"
                          render={(GoogleLoginProps) => (
                            <button onClick={GoogleLoginProps.onClick} className="btn text-light btn-block mt-4 google-login">
                              <i className="fab fa-google-plus-g"></i>  Login in with Google
                            </button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleFailure}
                          cookiePolicy="single_host_origin"
                          cross-origin-opener-policy="same-origin-allow-popups"
                        />
                        </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="p-5 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="fw-bold">New Customer?</h3>
                    <a href="/register" className="btn btn-secondary w-100">REGISTER</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
