import "./header.css";

export default function Header(){
    return (
        <div 
            className="header" 
            id="header">
            <div 
                className="headerdiv" 
                id="headerdiv">
                <div 
                    className="left" 
                    id="left">
                    <div 
                        className="logo" 
                        id="logo">
                        <a href="https://sajanrajbanshi.github.io/Landing/">
                            <span style={{color: "black"}}>Medi</span>
                            <span style={{color: "#C42121"}}>Go</span>
                        </a>
                    </div>
                    <div 
                        className="tabs" 
                        id="tabs">
                        <span 
                            className="tab dim" 
                            id="tab">Contact
                        </span>
                        <span 
                            className="tab dim" 
                            id="tab">About
                        </span>
                        <div 
                            className="pricing" 
                            id="pricing">
                            <span 
                                className="tab gradient" 
                                id="tab">Pricing
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    className="right" 
                    id="right">
                    <div>
                        <a 
                            href="https://sajanrajbanshi.github.io/Medigo_signin/">
                            <button 
                                className="signin" 
                                id="signin">Sign in
                            </button>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://sajanrajbanshi.github.io/medigo_signup/">
                            <button 
                                className="signup" 
                                id="signup">Sign up
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};