import React, { useState,useEffect } from 'react'
import "../header/Header.scss"
import headerIMG from "../../assets/header.svg"
import { headerLink } from '../../static'

const Header = () => {
    const renderLink = headerLink?.map((item) => (
        <li key={item.id}><span><a href={item.link}>{item.title}</a></span></li>
    ))


  return (
    <header>
        <nav>
           <div className="container">
           <div className='header__wrapper'>
                <div className='header__links'>
                   <a href="index.html">
                        <img src={headerIMG} alt="" />
                   </a>
                    <div className='header__ul'>
                        <ul>
                            {renderLink}
                        </ul>
                    </div>
                </div>
                <button>
                    Booking Now
                </button>
            </div>
           </div>
        </nav>
    </header>
  )
}

export default Header