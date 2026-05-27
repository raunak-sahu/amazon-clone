import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const email =
      localStorage.getItem("email");

    axios.get(
      `https://amazon-backend-dnry.onrender.com/orders/${email}`
    )

    .then((response) => {

      setOrders(response.data);

    })

    .catch((error) => {

      console.log(error);

    });

  }, []);

  return (

    <div className="orders-page">

      <h2>Your Orders</h2>

      {orders.map((order, index) => (

        <div
          key={index}
          className="order-card"
        >

          <h3>Total: ₹{order.total}</h3>

          {order.items.map((item, i) => (

            <div key={i}>

              <p>{item.title}</p>

              <p>{item.price}</p>

            </div>

          ))}

        </div>

      ))}

    </div>

  );

}

export default Orders;