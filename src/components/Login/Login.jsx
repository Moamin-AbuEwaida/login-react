import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/whd.png";
import welcomeImg from "../../assets/welcomeImg.jpg";
import "./Login.scss";

export const Login = () => {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("hello!");
  };

  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} alt="logo" id="img-id" />
          </div>
          <form onSubmit={handlesubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={emailVal}
              onChange={(e) => {
                setEmailVal(e.target.value);
              }}
            />
            <label htmlFor="pwd1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="pwd1"
              value={passVal}
              onChange={(e) => {
                setPassVal(e.target.value);
              }}
            />
            <button type="submit" id="sub_btn">
              Login
            </button>
          </form>
          <div className="footer">
            <h4>
              Don't have an account ?{" "}
              <Link className="Link" to="/Register">
                Register Now
              </Link>
            </h4>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back 🎉</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcomeImg} alt="welcome" id="wel-img-id" />
          </div>
        </div>
      </div>
    </div>
  );
};
