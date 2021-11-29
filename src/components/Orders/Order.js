import React from "react";
import { useSelector } from "react-redux";


const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const myOrders = useSelector((state) => state.orders);

  React.useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const userOrders = myOrders.filter(
      (order) => order.customer.customer_id === user_id
    );
    setOrders(userOrders);
  }, [myOrders]);

  return (
    <div className="shopping-cart">
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8 table-responsive">
            <div className="p-2 border-bottom mb-3">
              <h4 className="text-dark">Your Orders</h4>
            </div>
            {
              orders.length > 0 ? 
              <table className="table">
              <thead className="table-dark text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>



              {orders.map((order, index) => {
                return <tr key={order._id}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-center">{order._id}</td>
                  <td className="text-center">₹ {order.order_price}</td>
                  <td className="text-center"><span className="badge bg-success m-0">Order placed</span>  </td>
                </tr>      
              })}

                  

              </tbody>
            </table> :
            <div className="w-100 text-center">
              <h3>No Orders Placed</h3>
            </div> 
            }
            
            


          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
