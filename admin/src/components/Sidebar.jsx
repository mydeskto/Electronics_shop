import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineProduct } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FiUsers } from "react-icons/fi";


const Sidebar = () => {
  return (
    <div className='py-7 px-4 flex justify-center gap-x-1 gap-y-5 w-fulll bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6 '>
      <Link to={'/api/allproducts'}>
        <button className='flex justify-center w-[170px] items-center rounded-lg  gap-2 flex-row bg-slate-300 ring-1 ring-slate-900/5  p-3'>
          <MdShoppingCartCheckout/> Product List
        </button>
      </Link>
      <Link to={'/api/addproduct'}>
        <button className='flex justify-center w-[170px] items-center rounded-lg  gap-2 flex-row ring-1 bg-slate-300 ring-slate-900/5  p-3'>
          <AiOutlineProduct/> Add Products
        </button>
      </Link>
      
      <Link to={'/api/users'}>
      <button className='flex justify-center w-[170px] items-center rounded-lg  gap-2 flex-row ring-1 bg-slate-300 ring-slate-900/5  p-3'>
          <FiUsers/> All Users
        </button>
      </Link>
    </div>
  )
}

export default Sidebar
