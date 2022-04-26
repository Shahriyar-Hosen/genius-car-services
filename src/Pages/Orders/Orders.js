import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.inite";

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/order/?email=${email}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, [user]);
  return (
    <div>
      <h1>Your Orders: {orders?.length}</h1>
    </div>
  );
};

export default Orders;
