import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
import AllUsers from '../components/AllUsers'
import {Routes , Route} from 'react-router-dom'
const Admin = () => {
  return (
    <div className='lg:flex '>
      <Sidebar />
      <Routes>
        <Route path='/api/addproduct' element={<AddProduct />} />
        <Route path='/api/allproducts' element={<ListProduct />} />
        <Route path='/api/users' element={<AllUsers />} />
      </Routes>
    </div>
  )
}

export default Admin
