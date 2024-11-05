import React from "react";
import "../hero/hero.scss";
import heroIMG from "../../assets/hero.svg";

const Hero = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__text">
              <h1>Making time a good time by making food the good food.</h1>
              <p>
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment,
              </p>
              <div className="hero__btns">
                <button>Order now</button>
                <button>Food Details</button>
              </div>
            </div>
            <div className="hero__img">
              <img src={heroIMG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
