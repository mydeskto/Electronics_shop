import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Category from "./components/Home/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./Utils/Context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import Header2 from "./pages/Header2";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Category from "./components/Category/Category";
import CategoryFor from "./components/Home/Category/CategoryFor";
// import { useNavigate } from "react-router-dom";



// import jwt from 'jsonwebtoken';


function App() {


 

  const [loged, setloged] = useState(false);
  const [user, setuser] = useState();
  // const Navigate = useNavigate()
  useEffect(() => {
    const item = localStorage.getItem("token");
    if (item) {
      setloged(!loged);
    }
    // window.location.href = "/";
    handleNavigation()

    
    
  }, []);

  // if(loged){
  //   const token = loged; // Replace with your JWT
  // const secret = process.env.REACT_APP_SECRET_KEY; // Use the same secret key used to sign the JWT
  
  // try {
  //   const decoded = jwt.verify(token, secret);
  //   console.log(decoded);
  //   setuser(decoded) // This will log the verified payload of the JWT
  // } catch (error) {
  //   console.error('Invalid token:', error);
  // }
  // }

 const handleLoged = ()=>{
  localStorage.removeItem("token");

 }

  const handleNavigation = () => {
    window.history.href ='/'
  };

  return (
    <BrowserRouter>
      <AppContext>
        {loged ? <Header /> : <Header2 />}

        {loged ? (
          <>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile  />} />
              <Route path="/category" element={<CategoryFor />} />
            </Routes>
          </>
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {loged ? (
          <>
            <Routes>
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </>
        ) : (
          ""
        )}
        {loged ? (
          <>
            <Newsletter />
            <Footer />{" "}
          </>
        ) : (
          ""
        )}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
