import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { addCart, deleteCart } from "../../actions/cart";
import jwt from "jsonwebtoken";

const ShoppingCart = () => {

  const history = useHistory();

  React.useEffect(() => {
    (async() => {
        const token = localStorage.getItem("userToken");
        const decodedToken = jwt.decode(token);
        if(decodedToken){
            if(decodedToken.exp*1000 <= Date.now()){
                history.push("/login");
                localStorage.setItem("userToken", "null");
                localStorage.setItem("user", null);
                localStorage.setItem("user_id", null);
            }
        } else history.push("/login");
    })();
}, [history]);

  const dispatch = useDispatch();

  const [cart, setCart] = React.useState([]);
  const cartItems = useSelector(state => state.cart);

  React.useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    const userCart = cartItems.filter(item => item.user_id === user_id);
    setCart(userCart);
  }, [cartItems]);

  const addItem = (item) => {
    dispatch(addCart(item));
  }

  const reduceItem = (item) => {
    dispatch(deleteCart(item));
  }

  const deleteItem = (item) => {
    dispatch(deleteCart({
      ...item, 
      quantity : 1
    }));
  }
  
  return (
    <div className="shopping-cart">
    
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2 border-bottom">
              <h4 className="text-dark">Your cart</h4>
            </div>

            {cart.length > 0 ? (<>
              {cart.map(item => {
            return <div key={item._id} className="d-flex border-bottom flex-row align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="mr-1">
                <img
                  className="rounded"
                  src={item.image}
                  width="70"
                  alt={item.name}
                />
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-between p-3">
              <div className="d-flex flex-column product-details">
                <span className="font-weight-bold">{item.name}</span>
                <div className="d-flex flex-row product-desc">
                  <div className="desc mr-1">
                    <span className="text-grey">{item.description}</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-end">

              <div className="d-flex flex-row align-items-center qty">
              <button onClick={() => reduceItem(item)} className="btn btn-danger btn-sm p-2 ms-2"><i className="fa fa-minus"></i></button>
                <h5 className="text-grey mt-1 mr-1 ml-1 ms-3">{item.quantity}</h5>
                <button onClick={() => addItem(item)} className="btn btn-success btn-sm p-2 ms-2"><i className="fa fa-plus"></i></button>
              </div>
              
              <div className="ms-5">
                <h5 className="text-black ms-5">Rs. {item.quantity * item.price}</h5>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-link" onClick={() => deleteItem(item)}><i className="fa fa-trash text-dark"></i></button>
              </div>

              </div>
            </div>
              </div>
          })}
           
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <a
                className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
                href="/checkout"
              >
                Proceed to Checkout
              </a>
            </div></>
            ) : (
              <div className="d-flex justify-content-center pt-5">
                <h1>No items in the Cart.</h1>
              </div>
            )}

                


          </div>

        </div>
      </div>
    </div>
  );
};


export default ShoppingCart;