import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      {/* <p>Price: $ {price}</p>
      <small>{description}</small> */}
    </div>
  );
};

export default Service;
