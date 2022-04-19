import React from "react";
import Helmet from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Genius Car Services</title>
    </Helmet>
  );
};

export default PageTitle;
