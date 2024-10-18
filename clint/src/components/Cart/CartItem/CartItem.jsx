import {MdClose} from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-1.webp'
import { useContext } from 'react';
import "./CartItem.scss";
import { Context } from '../../../Utils/Context';
const CartItem = () => {
            
            
     const {cartItems,handleRemoveFromCart, handleCartProductQuentity} =useContext(Context)

     console.log(cartItems)

    return <div className="cart-products">
          {cartItems.map((item) => (
                <div
                    className="search-result-item"
                    key={item.id}
                    onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                                item.image
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.name}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => handleRemoveFromCart(item)}
                        />
                        <div className="quantity-buttons">
                            <span
                                onClick={() =>
                                    handleCartProductQuentity("dec", item)
                                }
                            >
                                -
                            </span>
                            <span>{item.attributes.quantity}</span>
                            <span
                                onClick={() =>
                                    handleCartProductQuentity("inc", item)
                                }
                            >
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>Rs</span> 
                                {item.attributes.price}&nbsp;= &nbsp;
                            { item.new_price *
                                    item.attributes.quantity}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        
        </div>;
};

export default CartItem;
