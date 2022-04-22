import React from "react";
import useServices from "../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices([]);

  const deleteService = (id) => {
    const proceed = window.confirm("Are you sure");

    if (proceed) {
      console.log("services id: ", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            console.log("delete");
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
