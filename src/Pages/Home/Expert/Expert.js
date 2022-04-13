import React from "react";

const Expert = ({ expert }) => {
  const { img, name } = expert;
  return (
    <div className="card col-sm-12 col-md-6 col-lg-4 mx-auto g-5 mt-1" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Expert;
