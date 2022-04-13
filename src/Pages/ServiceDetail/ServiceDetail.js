import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      <h1>This is service detail page</h1>
    </div>
  );
};

export default ServiceDetail;
