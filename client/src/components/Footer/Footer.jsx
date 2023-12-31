import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    const navigate =useNavigate();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">"Amid concrete jungles,
                    indoor tree plantations serve as green
                    sanctuaries, providing us with a breath
                    of fresh air and a connection to nature."</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            4567, Mango Lane,
                            Bengaluru, Karnataka-560123,
                            India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                            Phone:987654321
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                            contact@bloomy.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span>
                    <div className="text"onClick={()=>navigate("/category/1")}>Indoor Plants</div>
                    <div className="text"onClick={()=>navigate("/category/2")}>Outdoor Plants</div>
                    <div className="text"onClick={()=>navigate("/category/3")}>Garden Water Sprayer</div>
                    <div className="text"onClick={()=>navigate("/category/4")}>Soil & Fertilizers</div>
                    <div className="text"onClick={()=>navigate("/category/5")}>Tools</div>
                    <div className="text"onClick={()=>navigate("/category/6")}>Books</div>
                    </span>
                </div>
                <div className="col">
                    <span>
                    <div className="title">Pages</div>
                    <div className="text" onClick={()=>navigate("/")}>Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                    </span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Copyright © 2023 Bloomy | Souradip Adhikari
                    </div>
                    <img src={Payment} alt="Payment Options" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
