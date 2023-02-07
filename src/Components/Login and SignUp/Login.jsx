import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

const Login = () => {
  const [spinner, setspinner] = useState(false);

  const handleSubmit = (event) => {
    setspinner(true);
    toast.success("Logged in successfully!");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    setspinner(false);
  };
  return (
    <div className="Login">
      <div className="login-form-wrapper">
        <div className="login-head">
          <span className="lock-icon">
            {" "}
            <LockOutlinedIcon />
          </span>
          <h2>Login in</h2>
        </div>
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="login-email">
            <TextField required autoComplete="true" className="input-email" id="input-email" label="Email" name="email" type="email" />
          </div>
          <div className="login-password">
            <TextField required autoComplete="true" type="password" className="input-password" id="input-password" label="Password" name="password" />
          </div>
          <div className="login-button">
            <button type="submit" className="input-button">
              {spinner ? <TailSpin height={25} color="#fff" wrapperStyle={{ justifyContent: "center" }} /> : "LOGIN IN"}
            </button>
          </div>
          <ToastContainer />
        </form>
        <div className="extra-usefull-links">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
        <div className="login-copyright">
          <p>
            Copyright © <Link to="/">Codeango </Link> {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
