import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Banner = () => {

  const [loged , setloged] = useState(false)


    useEffect(()=>{
        const item = localStorage.getItem('token')
        if(item){
          setloged(true)
        }
    },[])
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          {loged ? <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            velit, officia aspernatur fuga modi temporibus expedita molestias
            libero omnis explicabo.
          </p> :
          <h3>
          For Continue Shopping, Please Signup & Login
        </h3>
           }
          
          
          <div className="ctas">
            {loged ? <>
              <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
            
            </> : <>
            <Link to={'/signup'} style={{textDecoration:"none"}}>
            <div className="banner-cta v3">Signup</div>
            </Link>
            
            
            <Link to={'/login'} style={{textDecoration:"none"}}>

            <div className="banner-cta v2">Login</div>
            </Link>
            
            
            </>}
            
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="content" />
      </div>
    </div>
  );
};

export default Banner;
