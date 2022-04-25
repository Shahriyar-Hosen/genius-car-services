import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div>
      <PageTitle title="Service Detail"></PageTitle>
      <h1>This is service detail page:{service.name}</h1>
      <div className="text-center mt-3">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
