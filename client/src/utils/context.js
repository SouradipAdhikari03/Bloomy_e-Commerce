import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context =createContext();


const AppContext =({children })=>{
const[categories, setCategories]=useState();
const[products, setProducts]=useState();
const[cartItems, setCartItems]=useState([]);
const[cartCount, setcartCount]=useState(0);
const[cartSubTotal, setcartSubTotal]=useState(0);
const location=useLocation();

useEffect(()=>{
    window.scrollTo(0,0);
},[location])

useEffect(()=>{
    let count=0;
    cartItems.map(items=>count+=items.attributes.quantity)
    setcartCount(count);
    let subTotal=0;
    cartItems.map(items=> subTotal+=items.attributes.price * items.attributes.quantity);
    setcartSubTotal(subTotal);
},[cartItems])

const handelAddCart=(product, quantity)=>{
    let items=[...cartItems];
    let index=items.findIndex(p=> p.id===product.id)
    if(index!==-1){
        items[index].attributes.quantity+=quantity
    }else{
        product.attributes.quantity=quantity;
        items=[...items, product]
    }
    setCartItems(items);
}
const handelRemoveFromCart=(product)=>{
    let items=[...cartItems];
    items=items.filter((p)=>p.id !== product.id);
    setCartItems(items);
}
const handelCartProductQuantity=(type, product)=>{
    let items=[...cartItems];
    let index=items.findIndex(p=> p.id===product.id)
    if(type === "inc"){
        items[index].attributes.quantity+=1
    }else if(type=== "dec"){
        if(items[index].attributes.quantity===1) return
        items[index].attributes.quantity-=1
    }
    setCartItems(items);
}
    return (
        <Context.Provider 
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cartItems,
                setCartItems,
                cartCount,
                setcartCount,
                cartSubTotal,
                setcartSubTotal,
                handelAddCart,
                handelRemoveFromCart,
                handelCartProductQuantity
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;