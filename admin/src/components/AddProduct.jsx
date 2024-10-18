import React, { useRef, useState } from "react";
import upload_area from "../asserts/upload_area.svg";
import { MdAdd } from "react-icons/md";
import axios from "axios";
import {toast} from 'react-hot-toast'

const AddProduct = () => {
  // const [image, setimage] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState("Headphones");
  const [image, setImage] = useState();

  const fileInputRef = useRef(null);

  // function convertToBase(e) {
  //   const file = e.target.files[0]; // Get the selected file from the input
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImage(reader.result); // Set the base64 string to the state
  //     };
  //     reader.readAsDataURL(file); // Read the file as a Data URL (base64)
  //   } else {
  //     console.error('No file selected');
  //   }
  // }


  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
        setImage(file); // Store the file object directly in state
        console.log(file); // Log the file object
    }
};

  // const formData = new FormData();
  // formData.append('file', selectedFile);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file); // Create a URL for the file
  //     setImage(fileUrl); // Update the state with the file URL
  //   }
  // };

  
  
  async function handleSubmit(event){
    event.preventDefault()

    const formData = new FormData();
    formData.append('name', name);
    formData.append('new_price', price);
    formData.append('des', des);
    formData.append('category', category);
    formData.append('image', image);

    const response = await axios.post('http://localhost:3000/api/addproduct', formData , {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // setImage(response.data.fileUrl);
    console.log(response.data)
    const data = response.data

    if(data.success == true){
      toast.success('Successfully Addes')
      setName('')
      setImage()
      fileInputRef.current.value = '';
      setCategory('')
      setPrice('')
      setDes('')
    }else{
      toast.error(data.message)
    }
  }


  return (
    <div className="p-8 box-border w-full rounded-sm mt-4 lg:m-7 flex justify-start ">
      <form action="" className="flex justify-start items-center flex-col" onSubmit={handleSubmit}
      encType="multipart/form-data">
        <div className="flex justify-center flex-col gap-2">
          <label htmlFor="name" className="font-bold ">
            Product Name:
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-[150] h-[150] p-2 rounded-md outline-none bg-slate-300"
          />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <label htmlFor="name" className="font-bold ">
            New Price:
          </label>
          <input
            type="number"
            placeholder="Enter Product Name"
            value={price}
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="w-[150] h-[150] p-2 rounded-md outline-none bg-slate-300"
          />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <label htmlFor="name" className="font-bold ">
            Description:
          </label>
          <input
            type="text"
            placeholder="Enter des..."
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
            className="w-[150] h-[150] p-2 rounded-md outline-none bg-slate-300"
          />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <label htmlFor="file" className="font-bold ">
            Product Image:
          </label>
          <input
            type="file"
            accept="image/*" // Accept only image files
            required
            onChange={handleFileChange}
            ref={fileInputRef}
            // onChange={(e) => {
            //   setImage(e.target.value);
            // }}
            className="w-[150] h-[150] p-2 rounded-md outline-none bg-slate-300"
          />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <label htmlFor="name" className="font-bold ">
            Ctegory:
          </label>
          <input
            type="text"
            required
            placeholder="Enter Product category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="w-[150] h-[150] p-2 rounded-md outline-none bg-slate-300"
          />
        </div>

        <div className="flex justify-center flex-col gap-2">
          <button className="btn_dark_rounded mt-4 flexCenter">
            <MdAdd />
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
