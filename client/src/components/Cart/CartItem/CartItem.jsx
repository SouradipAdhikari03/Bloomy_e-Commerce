import "./CartItem.scss";
import prod from "../../../assets/products/snake-plant.webp"
import {MdClose} from "react-icons/md"
const CartItem = () => {
    return(
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">Product name</div>
                    <MdClose className="close-btn"/>
                    <div className="quantity-btns">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>2</span>
                        <span>X</span>
                        <span className="highlight">&#8377;1234</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
