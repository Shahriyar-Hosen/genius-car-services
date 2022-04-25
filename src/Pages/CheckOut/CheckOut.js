import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.inite";
import useServiceDetails from "../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  return (
    <div className="container text-center">
      <PageTitle title="Order CheckOut"></PageTitle>
      <h1 className="text-primary my-5">Please Order: {service.name}</h1>
      <form action="">
        <input
          className="my-1 w-100"
          type="text"
          name="name"
          placeholder="Name"
          value={user.displayName}
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
          value={user.email}
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
          value={service.name}
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
