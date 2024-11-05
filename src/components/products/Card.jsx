import React, { useEffect, useState } from "react";
import "../products/card.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdExposurePlus1 } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { useAxios } from "../../hooks/useAxios";

const Card = () => {
  const [category, setCategory] = useState("/");
  const [offset, setOffset] = useState(1);

  const { data, error } = useAxios(
    `/products${category}`,
    { limit: offset * 4 },
    [offset, category]
  );
  const { data: categories } = useAxios("/products/category-list");

  const categoryItems = categories?.map((el) => (
    <li key={el}>
      <data onClick={() => setCategory(`/category/${el}`)}>{el}</data>
    </li>
  ));

  const renderCard = data?.products?.map((item) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <IoStar
        key={index}
        style={{
          color: index < item.rating ? "#d8d849" : "#ddd",
          fontSize: "20px",
        }}
      />
    ));
    return (
      <div key={item.id} className="card">
        <div className="card__image">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <div className="card__text">
          <div>
            <div className="card__top">
              <b>{item.title}</b>
              <b>{item.price}$</b>
            </div>
            <p>{item.description}</p>
          </div>
          <div className="card__icons">
            <button
              onClick={() => {
                toast.success("Savatga qo`shildi");
              }}
            >
              <MdExposurePlus1 />
            </button>
            <div className="card__icons-star">{stars}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="container">
        <div className="category">
          <ul>
            <li onClick={() => setCategory('/')}>All</li>
            {categoryItems}
          </ul>
        </div>
        <div className="card__title">
          <p className="card__title-top">MENU</p>
          <b>Food Full of treaty Love</b>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls <br /> with Persons but also
            specialized equipment, Skills to manage Customers
          </p>
        </div>
        <div className="card__wrapper">{renderCard}</div>
        <button onClick={() => setOffset((p) => p + 1)} className="card__more">
          More
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Card;
