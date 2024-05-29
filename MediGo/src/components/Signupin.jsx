import "./signupin.css";
import SignupInput from "./SignupInput";
import SigninInput from "./SigninInput";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Signupin(props) {
  const [status, setStatus] = useState(props.initial.switch.action);
  const [message, setMessage] = useState(props.initial.switch.message);
  const [active, setActive] = useState(props.initial.state);
  function toggleInput() {
    if (active === 1) {
      setActive(2);
      setStatus("Sign in");
      setMessage("Already have an Account?");
    } else {
      setActive(1);
      setStatus("Sign up");
      setMessage("Don't have an account?");
    }
  }

  return (
    <div className="bodySign" id="bodySign">
      <div className="headerSign" id="headerSign">
        <div className="headerdivSign" id="headerdivSign">
          <div className="leftSign" id="left">
            <div className="logoSign" id="logo">
              <Link to="/">
                <span style={{ color: "black" }}>Medi</span>
                <span style={{ color: "#C42121" }}>Go</span>
              </Link>
            </div>
            <div className="tabsSign" id="tabs">
              <span className="tab dim" id="tab">
                Contact
              </span>
              <span className="tab dim" id="tab">
                About
              </span>
              <div className="pricing" id="pricing">
                <span className="tab gradient" id="tab">
                  Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {active === 1 ? <SigninInput /> : <SignupInput />}

      <div className="moreoptions" id="moreoptions">
        <div
          style={{
            width: "50%",
            minWidth: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="google" id="google">
            Continue with Google
          </button>
        </div>
        <div
          style={{
            width: "50%",
            minWidth: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>{message}</span>
            <button
              className="signupAuth"
              onClick={toggleInput}
              id="signupAuth"
            >
              {status}
            </button>
          </div>
        </div>
      </div>

      <div className="footerSign" id="footerSign">
        <div className="glassdiv2" id="glassdiv2">
          <div className="logo" id="logo">
            <Link to="/">
              <span style={{ color: "black" }}>Medi</span>
              <span style={{ color: "#C42121" }}>Go</span>
            </Link>
          </div>
          <div
            className="slogan"
            id="slogan"
            style={{ fontSize: "3vw", color: "#aaaaaa", textAlign: "left" }}
          >
            Your Health our Goal
          </div>
          <hr
            color="#aaaaaa"
            style={{
              marginTop: "2vw",
              marginBottom: "2vw",
              height: "1px",
              border: "none",
            }}
          />
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              color: "#767676",
              fontSize: "1vw",
              fontWeight: "500",
            }}
          >
            <div className="lawsRules" id="lawsRules">
              All Right Reserved 2024
            </div>
            <div className="lawsRules" id="lawsRules">
              Terms and Contditions
            </div>
            <div className="lawsRules" id="lawsRules">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
