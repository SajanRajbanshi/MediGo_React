import "./header.css";

export default function Header(){
    return (
        <div className="header">
            <div className="headerdiv">
                <div className="left">
                    <div className="logo">
                        <a href="https://sajanrajbanshi.github.io/Landing/"><span style={{color: "black"}}>Medi</span><span style={{color: "#C42121"}}>Go</span></a>
                    </div>
                    <div className="tabs">
                        <span className="tab dim">Contact</span>
                        <span className="tab dim">About</span>
                        <div className="pricing">
                            <span className="tab gradient">Pricing</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <a href="https://sajanrajbanshi.github.io/Medigo_signin/">
                            <button className="signin">Sign in</button>
                        </a>
                    </div>
                    <div>
                        <a href="https://sajanrajbanshi.github.io/medigo_signup/">
                            <button className="signup">Sign up</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};