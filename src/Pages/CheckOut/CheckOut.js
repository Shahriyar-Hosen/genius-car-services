import axios from "axios";
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

    //  npm
    /* axios er new version 0.27.0 এটাতে কিছু bug আছে may b. তাই এরকম হচ্ছে। 😦 

নিচের soln গুলো try out করে দেখতে পারেন। (not confimed that will solve but may be solved)
npm i url এটা দিয়ে try করুন। সমাধান না হলে নিচের sreps follow করেও try করুন।
Step-1: package.json এ গিয়ে axios এর ভার্সন 0.27.0 থেকে চেঞ্জ করে 0.25.0  করে দিন।

Step-2: node_modules ডিলিট করে আবার ইন্সটল করুন।

Step-3: npm install web-vitals --save-dev এই কমান্ড টি আপনার টার্মিনাল এ রান করুন। */

    axios.post("https://shrouded-beach-15194.herokuapp.com/order", order).then((response) => {
      console.log("Success:", response);
        toast("Your order is booked");
        event.target.reset();
    });

    // fetch("https://shrouded-beach-15194.herokuapp.com/order", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     toast("Your order is booked");
    //     event.target.reset();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
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
          required
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
          required
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
          required
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
          required
          id=""
        />
        <br />
        <input
          className="my-1 w-100"
          type="text"
          name="phone"
          placeholder="phone"
          required
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
