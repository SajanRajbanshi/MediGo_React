import "./signinInput.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

export default function SigninInput() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <div>
      <section className="page1Signin" id="page1Signin">
        <div
          style={{
            display: "flex",
            padding: "0 10%",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "100%",
            height: "fit-content",
          }}
        >
          <div className="textwrapper" id="textwrapper">
            <div>
              <span
                className="gradient"
                id="gradient"
                style={{ fontSize: "5vw", fontWeight: "600" }}
              >
                Welcome back
              </span>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "2vw",
                color: "#aaaaaa",
                margin: "2vw",
              }}
            >
              <span
                style={{ textAlign: "left", fontSize: "2vw", color: "#aaaaaa" }}
              >
                Being away means
                <br />
                Your were Healthy <br />
                And We are <br />
                Happy
              </span>
            </div>
          </div>
          <div className="glassdivSignin" id="glassdivSignin">
            <div className="placeholder" id="placeholder">
              <span>Email</span>
            </div>
            <div className="inputbox" id="inputbox1">
              <div className="inputBoxWrapper" id="inputBoxWrapper1">
                <input type="text" className="ipbox" id="ipbox1" />
              </div>
            </div>
            <div className="placeholder" id="placeholder">
              <span>Password</span>
            </div>
            <div className="inputbox" id="inputbox2">
              <div className="inputBoxWrapper" id="inputBoxWrapper2">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="ipbox"
                  id="ipbox2"
                />
                <button
                  className="passwordVisibilityToggle"
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  id="passwordVisibilityToggle"
                >
                  {isPasswordVisible ? (
                    <IoMdEyeOff
                      className="passwordVisibilityToggleIcon"
                      id="passwordVisibilityToggleIcon"
                    />
                  ) : (
                    <IoEye
                      className="passwordVisibilityToggleIcon"
                      id="passwordVisibilityToggleIcon"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="button_signin" id="button_signin">
              <div className="button_wrapper" id="button_wrapper">
                <button className="signinInput" id="signinInput">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bigcircle" id="bigcircle"></div>
          <div className="smallcircle1" id="smallcircle1"></div>
          <div className="smallcircle2" id="smallcircle2"></div>
        </div>
      </section>
    </div>
  );
}
