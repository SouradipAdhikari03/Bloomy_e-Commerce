import "./Cart.scss";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"

const Cart = ({setShowCart}) => {
    return (
        <div className="cart-pannel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">
                        Your Gardening Items
                    </span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <MdClose/>
                        <span className="text">Close</span>
                    </span>
                </div>
                <div className="empty-cart">
                    <BsCartX/>
                    <span>No Items For Your Garden</span>
                    <button className="return-btn">Return</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
