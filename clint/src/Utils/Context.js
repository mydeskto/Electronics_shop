import { createContext, useState } from "react"
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
export const Context = createContext();

const AppContext =({children})=>{

    const [categories , setCategories] = useState([]);
    const [products , setProducts] =useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    useEffect(() => {
        let count = 0;
        cartItems.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.new_price
                    * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        // Ensure quantity is a number
        const validQuantity = Number(quantity);
        
        // Clone the current cart items
        let items = [...cartItems];
        
        // Find the index of the product in the cart
        let index = items.findIndex((p) => p.id === product.id);
        
        if (index !== -1) {
            // Check if attributes exist before accessing quantity
            if (items[index].attributes && items[index].attributes.quantity) {
                items[index].attributes.quantity += validQuantity;
            } else {
                // If attributes don't exist, initialize them
                items[index].attributes = { quantity: validQuantity };
            }
        } else {
            // If the product is not in the cart, set its initial quantity and add it to the cart
            product.attributes = { quantity: validQuantity }; // Initialize attributes here
            items = [...items, product];
        }
        
        // Update the cart items state
        setCartItems(items);
    };
    


    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };
   
    const handleCartProductQuentity = (type, product) => {
        if (!product) return; // Check if product is defined
    
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
    
        if (index === -1) return; // Check if the product exists in the cart
    
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
    
        setCartItems(items);
    };
    return (
        <Context.Provider value={{categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuentity
        }}>
           {children}
        </Context.Provider>
    );
}

export default AppContext;