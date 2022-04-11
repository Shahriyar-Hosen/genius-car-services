import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div>
        <h3>{name}</h3>
        <p>Price: $ {price}</p>
        <p>
          <small>{description}</small>
        </p>
      </div>
      <button>Book: {name}</button>
    </div>
  );
};

export default Service;
