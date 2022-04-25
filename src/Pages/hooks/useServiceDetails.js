import { useEffect, useState } from "react";


const useServiceDetails = (serviceId) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

    return [service]
};

export default useServiceDetails;