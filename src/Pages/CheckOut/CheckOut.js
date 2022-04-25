import { useParams } from "react-router-dom";
import useServiceDetails from "../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <h1>Please Order: {service.name}</h1>
    </div>
  );
};

export default CheckOut;
