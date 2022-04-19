import React from "react";
import sleeping from '../../../images/sleeping.jpg';
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div>
    <PageTitle title="Not Found"></PageTitle>
      <h2 className="text-primary text-center">Mechanic is Sleeping</h2>
      <img className="w-100" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
