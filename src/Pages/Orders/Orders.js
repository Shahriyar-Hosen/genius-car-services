import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../Firebase/Firebase.inite";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://shrouded-beach-15194.herokuapp.com/order/?email=${email}`;

      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getOrders();

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data));
  }, [user]);
  return (
    <div className="w-50 mx-auto ">
      <h1>Your Orders: {orders?.length}</h1>
      {
        orders.map((order) => <div key={order._id}>
          <p>{order.email} : {order.service}</p>
        </div>)
      }
    </div>
  );
};

export default Orders;
