import { useEffect , createContext, useContext, useState} from "react";
import "./Home.scss";
// import Category from "./Category/CategoryFor";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import {fetchDataFromApi} from '../../Utils/api';
import {Context} from '../../Utils/Context'
import axios from 'axios'

const Home = () => {

    const{categories,setCategories,products, setProducts} =useContext(Context);
    useEffect(() => {
        getProducts();
        
        
    }, []);

    const [loged , setloged] = useState(false)

    useEffect(()=>{
        const item = localStorage.getItem('token')
        if(item){
          setloged(true)
        }
    },[])

   
    const getProducts = async () => {
        try {
            // const res = await fetchDataFromApi("/api/products?populate=*");
            const res = await axios.post('http://localhost:3000/api/allproducts')
            setProducts(res.data);
            // console.log(res.data)
        } catch (error) {
            console.error("Error fetching Products: ", error);
        }
    };
    return <div >
        <Banner/>
        {loged ? <>
            <div className="main-contant">
            <div className="layout">
                {/* <Category categories={categories}/> */}
                <Products products={products} headingText="Popular Products"/>
            </div>
        </div>
        </> : ""}
        
        </div>;
};

export default Home;




