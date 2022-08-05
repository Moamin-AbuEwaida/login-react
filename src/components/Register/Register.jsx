import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/whd.png";
import register from "../../assets/Register.jpg";
import "./Register.scss";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="main-Register">
      <div className="left-side">
        <div className="header">
          <img src={logo} alt="logo" id="logoImg" />
        </div>
        <div className="body">
          <img src={register} alt="register" id="registerImg" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores
          molestiae harum nihil facilis officiis est temporibus nam id
          voluptatum!
        </p>
      </div>
      <div className="right-side">
        <div className="top-right">
          <p>
            Already have an account ?{" "}
            <Link id="Links-signIn" to="/">
              Sign In
            </Link>
          </p>
        </div>
        <div className="body-right">
          <div className="container">
            <h1>Create an account</h1>
            <form onSubmit={handlesubmit}>
              <div className="input-group">
                <h5>First Name</h5>
                <input
                  type="text"
                  name="Fname"
                  id="fname"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <h5>Last Name</h5>
                <input
                  type="text"
                  name="Lname"
                  id="lname"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <h5>Email</h5>
                <input
                  type="email"
                  name="emai"
                  id="email1"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <h5>Password</h5>
                <input
                  type="password"
                  name="pwd1"
                  id="pwd1"
                  value={pwd1}
                  onChange={(e) => {
                    setPwd1(e.target.value);
                  }}
                />
              </div>
              <div className="input-group">
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  value={pwd2}
                  onChange={(e) => {
                    setPwd2(e.target.value);
                  }}
                />
              </div>
              <input type="submit" value="Submit" id="sbtn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
