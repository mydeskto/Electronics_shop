import React, { useState } from "react";
import upload_area from "../asserts/upload_area.svg";
import { MdAdd } from "react-icons/md";
// import axios from "axios";
const AddProduct = () => {
  // const [image, setimage] = useState(false);
  
  return (
    <div className="p-8 box-border w-full rounded-sm mt-4 lg:m-7">
     <form action="">
     <div className="mb-3">
        <h4 className="font-bold pb-2">Product Title: </h4>
        <input
          type="text"
          name="name"
          className="bg-slate-300 outline-none  p-3 w-[300px]  rounded-lg"
          placeholder="Enter Product name"
        />
      </div>
      <div className="mb-3">
        <h4 className="font-bold pb-2">price: </h4>
        <input
          type="text"
          name="old_price"
          
          className="bg-slate-300 outline-none  p-3 w-[300px]  rounded-lg"
          placeholder="Enter Product name"
        />
      </div>
      <div className="mb-3">
        <h4 className="font-bold pb-2">Old Price: </h4>
        <input
          type="text"
          name="new_price"
          
          className="bg-slate-300 outline-none  p-3 w-[300px]  rounded-lg"
          placeholder="Enter Product name"
        />
      </div>
      <div>
        <h4 className="font-bold ">Product Ctegory</h4>
        <select
          name="category"

          className="rounded-lg bg-slate-300 p-3 w-[200px]"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="p-2">
        <label htmlFor="file-input">
          <h4 className="font-bold pb-2"> Product Image:</h4>
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            width={100}
            height={100}
          />
        </label>
        <input
          onChange={imageHandler}
          // value={ProductDetails.image}

          type="file"
          name="image"
          className="bg-primary mx-w-80 w-full py-3 px-4 "
          id="file-input"
          hidden
        />
      </div>
      <input type="submit"
        className="btn_dark_rounded mt-4 flexCenter "
      >
        <MdAdd />
        Add Product
      </input>
     </form>
      
    </div>
  );
};

export default AddProduct;
