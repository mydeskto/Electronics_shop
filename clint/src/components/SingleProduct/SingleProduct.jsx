import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFe from "../../hooks/useFe";
import { useEffect, useState } from "react";
import { useContext } from "react";
import "./SingleProduct.scss";
import { Context } from "../../Utils/Context";
import axios from 'axios'

const SingleProduct = () => {
  const { handleAddToCart } = useContext(Context);
  const [quentity, setQuentity] = useState(1);
  const { id } = useParams();
  const [yes , setyes] = useState(false)
  const [data, setData] = useState([]); // State to store product data

  useEffect(() => {
    filterById(id);
    // window.location.reload()
    

}, [id]); 
console.log(id)

  const filterById = async (id) => {
      if (!id) {
          console.error("Invalid ID provided.");
          return;
      }

      try {
          // window.location.reload()
          const url = `http://localhost:3000/api/products/${id}`;
          console.log('Fetching product from:', url); // Log URL for debugging
          const res = await axios.get(url);
          setData(res.data);
          if (res.data && Object.keys(res.data).length > 0) { // Ensure there's data
            console.log(res.data); // Log the fetched data
            setyes(true); // Toggle the state
        } // Update state with the single product data
      } catch (error) {
          console.error("Error fetching product by ID: ", error);
      }
  };

  
  // if (!data) return <div>Loading...</div>;

  // console.log(data)
  // const product = data?.data?.[0]?.attributes;
  //   const imageUrl = data.image;
  // const title = data.name;
  // const price = data.new_price;
  // const description = data.des;

  const increment = () => {
    setQuentity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuentity((prevState) => {
      if (quentity === 1) return 1;
      return prevState - 1;
    });
  };
  return (

    
    <>

{yes ? (<>
  <div className="single-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={ data.image}
              alt=""
            />
          </div>
          
          <div className="right">
            <span className="name">{data.name}</span>
            <span className="price">{data.new_price}</span>
            <span className="price">{data.des}</span>

            <div className="cart-buttons">
              <div className="quentity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quentity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-card-btn"
                onClick={() => {
                  handleAddToCart(data, quentity);
                  setQuentity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD To Cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>{data.categories}</span>
              </span>
            </div>
            <div className="info-item">
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={data._id}
          categoryId={data.categories}
        />
      </div>
    </div>

</>):(<> 

loading...

</>)}
    
    </>
  );
};

export default SingleProduct;
