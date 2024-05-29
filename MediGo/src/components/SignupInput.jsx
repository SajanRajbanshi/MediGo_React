import "./signupInput.css";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

export default function SignupInput() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  return (
    <div>
      <div className="page1Signup" id="page1Signup">
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
                style={{
                  fontSize: "6vw",
                  fontWeight: "600",
                  margin: "2vw 0 0 0",
                }}
              >
                Welcome
              </span>
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "2vw",
                color: "#aaaaaa",
                padding: "0 0 0 2vw",
              }}
            >
              <span
                style={{ textAlign: "left", fontSize: "2vw", color: "#aaaaaa" }}
              >
                Life Begins with
                <br />
                Good chioces
                <br />
                Lets Start
                <br />
                New Life
              </span>
            </div>
          </div>

          <div className="glassdivSignup" id="glassdivSignup">
            <div className="placeholder" id="placeholder">
              <span>Email</span>
            </div>
            <div className="inputbox" id="inputbox1">
              <div className="inputBoxWrapper">
                <input type="text" className="ipbox" name="email" id="email" />
              </div>
            </div>
            <div className="placeholder" id="placeholder">
              <span>Password</span>
            </div>
            <div className="inputbox" id="inputbox2">
              <div className="inputBoxWrapper">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="ipbox"
                  name="password"
                  id="password"
                />
                <button
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  className="passwordVisibilityToggle"
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
            <div className="placeholder" id="placeholder">
              <span>Re-Password</span>
            </div>
            <div className="inputbox" id="inputbox3">
              <div className="inputBoxWrapper">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="ipbox"
                  name="re_password"
                  id="re_password"
                />
                <button
                  onClick={() => {
                    setPasswordVisibility(!isPasswordVisible);
                  }}
                  className="passwordVisibilityToggle"
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
                <button className="signupInput" id="signin">
                  Sign up
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
      </div>
    </div>
  );
}
