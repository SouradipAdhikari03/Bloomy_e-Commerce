import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>"LIFE.."</h1>
                <p>
                "Bringing nature indoors through 
                tree plantations not only enhances 
                the aesthetics of your space but also
                nourishes your soul."
                </p>
                <div className="ctas">
                    <div className="banner-ctas">Read More</div>
                    <div className="banner-ctas v2">Order Now</div>
                </div>
            </div>
                <img className="banner-img" src={BannerImg} alt="Indoor-Plants" />
        </div>
    </div>
    );
};

export default Banner;
