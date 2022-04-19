import React from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
    <PageTitle title="Service Detail"></PageTitle>
      <h1>This is service detail page:{serviceId}</h1>
      <div className="text-center mt-3">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
