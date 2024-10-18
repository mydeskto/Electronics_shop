import React from 'react'
import logo from '../asserts/online.svg'
import profileItem from '../asserts/profile.png'
const Navbar = () => {
  return (
    <nav  className='max_padd_container  flex justify-between items-center  bg-white py-2 ring-1 ring-slate-900/5 relative'>
      <div>
        <span style={{fontSize:'24px', fontWeight:'700'}}>ShopNow</span>
        {/* <img src={logo} alt=""  width={97} height={97}
      /> */}
      </div>
      <div className='uppercase bold-22  '>Admin Panel</div>
      <div><img src={profileItem} alt=""  className='
      h-12 w-12 rounded-full'/></div>
      
    </nav>
  )
}

export default Navbar
