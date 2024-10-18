import React from 'react';

import { BiLogOut } from "react-icons/bi";
// import UserProfileDisplay from './UserProfileDisplay';
import './Profile.scss'
import { Link } from 'react-router-dom';
const Profile = () => {
  const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    bio: 'Hello! I am a passionate tech enthusiast.',
  };

const handle= ()=>
{
  localStorage.removeItem("token")
  window.location.reload()
  window.location.href = '/'
}
  return (
  <>
  <div>
  
  </div>
  <div className="user-profile-display-container">
  <span onClick={handle} style={{cursor:'pointer' }} className='hov'> <BiLogOut  style={{width:'24px' , }}/><span>Logout</span></span>
    <h2>User Profile</h2>
    <div className="profile-info">
      <div className="profile-item">
        <strong>Username:</strong> {user.username}
      </div>
      <div className="profile-item">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="profile-item">
        <strong>Bio:</strong> {user.bio}
      </div>

    </div>
  </div>
  </>
  );
};

export default Profile;
