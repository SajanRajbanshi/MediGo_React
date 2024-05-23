import "./footer.css";

export default function Footer()
{
    return(
        <div className="footer">
        <div className="glassdiv2">
            <div className="logo">
                <a href="https://sajanrajbanshi.github.io/Landing/"><span style={{color: "black"}}>Medi</span><span style={{color: "#C42121"}}>Go</span></a>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="slogan" style={{fontSize: "2vw", color: "#aaaaaa", width:"fit-content"}}>
                    Your Health our Goal
                </div>
                <div className="tabs">
                    <span className="tab dim">Contact</span>
                    <span className="tab dim">About</span>
                    <div className="pricing">
                        <span className="tab gradient">Pricing</span>
                    </div>
                </div>
            </div>
            <hr color="#aaaaaa" style={{marginTop: "3vw",marginBottom: "3vw",height: "1px",border: "none"}}/>
            <div style={{width: "60%",display: "flex", justifyContent: "space-between",color: "#767676",fontSize: "1vw",fontWeight: "500"}}>
                <div>All Right Reserved 2024</div>
                <div>Terms and Contditions</div>
                <div>Privacy Policy</div>
            </div>
        </div>
    </div>
    );
};