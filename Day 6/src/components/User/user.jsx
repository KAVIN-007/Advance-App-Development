import React from 'react'
import User_Services from './Components/User_Services'
import User_Categories from './Components/User_Categories'
import './user.css';
import { User_Feedback } from './Components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function User(){
  return (
    <>
    <Navbar />
    <User_Services />
    <User_Categories />
    <User_Feedback />
    <Footer />
    </>
  )
}

export default User;