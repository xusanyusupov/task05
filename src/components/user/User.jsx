import React from 'react'
import "../user/user.scss"
import userIMG from "../../assets/user.svg"
const User = () => {
  return (
    <section>
        <div className="container">
            <div className="user__wrapper">
                <div className='user__img'>
                    <img src={userIMG} alt="" />
                </div>
                <div className='user__text'>
                    <b>ABOUT US</b>
                    <p className='user__main-title'>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </p>
                    <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default User