import { useEffect , useState  } from "react";
// import { useNavigate } from "react-router-dom";

// import {Context} from '../Utils/Context'
import { useNavigate } from "react-router-dom";
import "./header2.scss";
// import { useContext } from "react";
const Header2 = () => {
    
    const [scrolled , setscrolled] =useState(false);
    
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
                <li>Catogery</li>
            </ul>
            <div className="center" onClick={()=> navigate("/")}>
                    ShopNow
            </div>
            <div className="right">
            <ul className="left">
                <li onClick={()=> navigate("/login")}>Login</li>
                <li onClick={()=> navigate('/signup')}>Signup</li>
                
            </ul> 
            </div>
        </div>
            
    </header>
      
      
        </>
    );
};

export default Header2;