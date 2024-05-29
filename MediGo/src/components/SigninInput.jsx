import "./signinInput.css";

export default function SigninInput() {
  return (
    <div>
      <section className="page1Signin">
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
          <div className="textwrapper">
            <div>
              <span
                className="gradient"
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
          <div className="glassdivSignin">
            <div className="placeholder">
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input type="text" className="ipbox" />
            </div>
            <div className="placeholder">
              <span>Password</span>
            </div>
            <div className="inputbox">
              <input type="password" className="ipbox" />
            </div>
            <div className="button_signin">
              <div className="button_wrapper">
                <button className="signinInput">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bigcircle"></div>
          <div className="smallcircle1"></div>
          <div className="smallcircle2"></div>
        </div>
      </section>
    </div>
  );
}
