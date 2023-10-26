import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"


const Navbar = () => {
    const [navToggler, setNavToggler] = useState(false);
    const closeNavbar = () => setNavToggler(false);

  return (
    <nav className='navbar'>
        <div className='container1'>
            <div className='navbar-content'>
                <div className='brand-and-toggler'>
                    <div className='navbar-brand'>WebGuard</div>
                    <button type = "button" className='navbar-open-btn text-white' onClick={() => setNavToggler(!navToggler)}>
                        <FaBars size = {30} />
                    </button>

                    <div className={navToggler ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                        <button type = "button" className='navbar-close-btn text-white' onClick={closeNavbar}>
                            <FaTimes size = {30} />
                        </button>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                               Pricing
                            </li>
                            <li className='nav-item'>
                               Resources
                            </li>
                            <li className='nav-item'>
                               Supports
                            </li>
                            <li className='nav-item'>
                               Partners
                            </li>
                        </ul>
                    </div>
                   
                   <button className='btn-left'><Link to = "/login" className='nav-link '>Log in</Link></button>
                   
                 
                    <button className='btn-right'><Link to = "/signup" className='nav-link'>sign up</Link></button>
                 
                    </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
