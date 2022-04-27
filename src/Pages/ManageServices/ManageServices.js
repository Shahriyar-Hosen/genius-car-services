import React from "react";
import useServices from "../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices([]);

  const deleteService = (id) => {
    const proceed = window.confirm("Are you sure");

    if (proceed) {
      const url = `https://shrouded-beach-15194.herokuapp.com/service/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("services id: ", id);

          if (data.deletedCount > 0) {
            console.log("Delete with UI");
            const remaining = services.filter((user) => user._id !== id);

            setServices(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1>Service Manage</h1>
      {services.map((service) => (
        <div key={service._id} className="w-50 mx-auto">
          <p>
            {service.name}{" "}
            <button onClick={() => deleteService(service._id)}>X</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
