import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
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
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
