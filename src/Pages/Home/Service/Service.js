import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="service-container">
      <img className="w-100" src={img} alt="" />
      <div className="px-2">
        <h3>{name}</h3>
        <p>Price: $ {price}</p>
        <p>
          <small>{description}</small>
        </p>
      </div>
      <button className="btn btn-primary">Book: {name}</button>
    </div>
  );
};

export default Service;
