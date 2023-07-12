import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/snake-plant.webp"
const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="img" />
                    </div>
                    <div className="right">
                        <span className="name">product name</span>
                        <span className="price">price</span>
                        <span className="desc">product description</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>4</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20}/>
                                Add To Cart
                            </button>
                        </div>
                        <span className="divider"></span>
                        <div className="info-item">
                            <span className="text-bold">Category:
                                <span>Indoor Plant</span>
                            </span>
                            <span className="text-bold">Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaWhatsapp size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
        );
};

export default SingleProduct;
