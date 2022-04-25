// import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.inite";
import useServiceDetails from "../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  const handlePleaseOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    // axios.post("http://localhost:5000/order", order)
    // .then((response) => {
    //   console.log(response);
    // });

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Your order is booked");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container text-center">
      <PageTitle title="Order CheckOut"></PageTitle>
      <h1 className="text-primary my-5">Please Order: {service.name}</h1>
      <form onSubmit={handlePleaseOrder}>
        <input
          className="my-1 w-100"
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="my-1 w-100"
          type="email"
          name="email"
          placeholder="email"
          value={user?.email}
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="my-1 w-100"
          type="text"
          name="service"
          placeholder="service"
          value={service?.name}
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="my-1 w-100"
          type="text"
          name="address"
          placeholder="address"
          autoComplete="of"
          id=""
        />
        <br />
        <input
          className="my-1 w-100"
          type="text"
          name="phone"
          placeholder="phone"
          id=""
        />
        <br />
        <input
          className="btn btn-primary mt-3 px-5 fs-5"
          type="submit"
          value="Please Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
