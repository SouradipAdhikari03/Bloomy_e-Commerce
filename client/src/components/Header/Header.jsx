import {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai"

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled]=useState(false);
    const [showCart, setShowCart]=useState(false);
    const [showSearch, setshowSearch]=useState(false);
    const {cartCount} = useContext(Context);
    const navigate =useNavigate();
    const handelScroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        };
    };


    useEffect(()=>{
        window.addEventListener("scroll",handelScroll)
    },[]);
    return (
        <>
        <header className={`main-header ${scrolled? "sticky-header":" "}`}>
            <div className="header-content">
                <ul>
                    <div className="left">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li>About</li>
                    <li onClick={()=>navigate("/category")}>Categories</li>
                    </div>
                </ul>
                <div className="centre" onClick={()=>navigate("/")}>Bloomy</div>
                <div className="right">
                    <TbSearch onClick={()=> setshowSearch(true)}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon"
                        onClick={()=> setShowCart(true)}
                    >
                        <CgShoppingCart/>
                        {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart= {setShowCart}/>}
        {showSearch && <Search  setshowSearch={setshowSearch}/>}
        </>
    );
};

export default Header;
