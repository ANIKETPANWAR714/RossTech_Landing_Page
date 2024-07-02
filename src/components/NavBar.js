import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Assuming you have CSS for styling
import RossTech from "../Assets/RossTech.png";

import LoginModal from './LoginModal';



function NavBar() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    
  return (
    <div className="navbar">
      <div className="logo">
        <img src={RossTech} alt=""  id="logo"/>
      </div>

      <div className="navigation">
        <Link to="/about-us">About Us</Link>

        <Link to="/how-it-works">How It Works</Link>

        <Link to="/contact-us">Contact Us</Link>


        
      </div>

      <div className="login">
          <button onClick={openModal} className="login-button">Log in</button>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default NavBar;
