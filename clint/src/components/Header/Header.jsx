import { useEffect , useState  , useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

import Search from './Search/Search'
import { FaRegUser } from "react-icons/fa";
import Cart from '../Cart/Cart'
import {Context} from '../../Utils/Context'
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
// import { useContext } from "react";
const Header = () => {
    const {cartCount } = useContext(Context)
    const [scrolled , setscrolled] =useState(false);
    const [showCart , setshowCart] =useState(false);
    const [showSearch , setshowSearch] =useState(false);
    const navigate = useNavigate();

    const handleScroll =()=>{
        const offset = window.scrollY;
        if(offset>100){
            setscrolled(true);
        } else{
            setscrolled(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll' , handleScroll);
    },[]);
    return (
        <>
        <header className={`main-header ${scrolled ? 'sticky-header': ""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=> navigate("/")}>Home</li>
                
                <li onClick={()=> navigate('/about')}>About</li>
                
                {/* <li onClick={()=> navigate('/category')}>Category</li> */}
            </ul>
            <div className="center" onClick={()=> navigate("/")}>
                    ShopNow
            </div>
            <div className="right">
                <TbSearch onClick={()=>{
                    setshowSearch(true);
                }}/>
                <FaRegUser onClick={()=> navigate('/profile')}/>
                
                <span className="cart-icon" onClick={()=>{
                    setshowCart(true);
                }} >
                    <CgShoppingCart/>
                    {!!cartCount &&<span>{cartCount}</span>}

                </span>
            </div>
        </div>
            
    </header>
      {showCart && <Cart setshowCart={setshowCart}  />}
      {showSearch && <Search setshowSearch={setshowSearch}/>}
      
        </>
    );
};

export default Header;
