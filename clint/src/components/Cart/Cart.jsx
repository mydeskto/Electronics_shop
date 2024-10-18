import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext, useState } from "react";
import CartItem from './CartItem/CartItem'
import "./Cart.scss";
import { Context } from "../../Utils/Context";
import { useNavigate } from "react-router-dom";
const Cart = ({ setshowCart }) => {
  

  const navigate = useNavigate();

    const {cartSubTotal ,cartItems }=useContext(Context)
    console.log(cartItems)
  return (
    <div className="cart-panel">
      <div className="opac-layer"  onClick={()=>{setshowCart(false)}}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shoping Cart </span>
          <span className="close-btn"
            onClick={() => {setshowCart(false); }}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {!cartItems.length && <div className="empty-cart">
          <BsCartX/>
          <span >No Products in Cart</span>
          <button className="return" onClick={()=>{ navigate('/') ; setshowCart(false)}}>Return To Shop</button>
        </div>}

        {!!cartItems.length && <>
        <CartItem/>
        <div className="cart-footer">
          <div className="sub-total">
            <span className="text">Subtotal:</span>
          <span className="text total">Rs = {cartSubTotal}</span>

          </div>
          <div className="btn">
            <button className="checkout-cta">CheckOut</button>
          </div>
        </div>
        </>
         }
        
      </div>
    </div>
  );
};

export default Cart;
