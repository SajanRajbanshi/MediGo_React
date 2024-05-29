import "./signupInput.css";

export default function SignupInput() {
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

          <div className="glassdivSignup">
            <div className="placeholder">
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input type="text" className="ipbox" name="email" id="email" />
            </div>
            <div className="placeholder">
              <span>Password</span>
            </div>
            <div className="inputbox">
              <input
                type="password"
                className="ipbox"
                name="password"
                id="password"
              />
            </div>
            <div className="placeholder">
              <span>Re-Password</span>
            </div>
            <div className="inputbox">
              <input
                type="password"
                className="ipbox"
                name="re_password"
                id="re_password"
              />
            </div>
            <div className="button_signin">
              <div className="button_wrapper">
                <button className="signupInput" id="signin">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bigcircle"></div>
          <div className="smallcircle1"></div>
          <div className="smallcircle2"></div>
        </div>
      </div>
    </div>
  );
}
