import React from 'react'
import "../collection/collection.scss"

import collection1 from "../../assets/collection1.svg"
import collection2 from "../../assets/collection2.svg"
import collection3 from "../../assets/collection3.svg"

const Collection = () => {
  return (
    <section>
        <div className="container">
            <div className="collection__wrapper">
                <div className='collection__item'>
                    <img src={collection1} alt="" />
                    <b>Quality Food</b>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className='collection__item'> 
                    <img src={collection2} alt="" />
                    <b>Food Delivery</b>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className='collection__item'>
                    <img src={collection3} alt="" />
                    <b>Super Taste</b>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection