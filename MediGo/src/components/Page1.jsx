import "./page1.css";
import earphone from "./assets/earphone.png";

export default function Page1()
{
    return (
        <div>
            <div className="page1">
                <div>
                    <div className="slogan">
                        <span>Your </span>
                        <span className="sloganblue">Health</span><br/>
                        <span>Our </span>
                        <span className="slogangreen">Goal</span>
                    </div>
                    <div className="bio">
                        <span>
                            Make your life easy<br/>
                            with this one step toward<br/>
                            Quality medical service. Now is the time.
                        </span>
                    </div>
                    <div className="btn_Join_Us">
                        <a href="https://sajanrajbanshi.github.io/Medigo_signin/">
                            <button className="Join_Us">Join Us</button>
                        </a>
                    </div>
                </div>
                <img src={earphone} alt="earphone" className="earphone1"/>
                <img src={earphone} alt="earphone" className="earphone2"/>
            </div>
        </div>
    );
};