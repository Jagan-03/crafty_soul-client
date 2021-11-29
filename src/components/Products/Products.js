import React from "react";
import { useDispatch, useSelector } from "react-redux"; 

// Actions
import {addCart} from "../../actions/cart";

const Products = ({ products, collectionName }) => {

  const dispatch = useDispatch();
  const [userID, setUserID] = React.useState({});
  const [cart, setCart] = React.useState([]);
  const cartItems = useSelector(state => state.cart);

  React.useEffect(() => {
      const userId = localStorage.getItem("user_id");
      setUserID(userId);
  }, []);

  React.useEffect(() => {
    const cartItemNames = cartItems.map(item => item.name + item.description);
    setCart(cartItemNames);
  }, [cartItems]);

  const updateCart = (item) => {
    dispatch(addCart({...item, user_id: userID, quantity : 1}))
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <h3 className="text-dark mb-3">{collectionName.toUpperCase()}</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((item) => {
          return (
            <div key={item.id} className="m-2">
              <div className="card">
                <img
                  src={item.image}
                  className="img-fluid product-image"
                  alt="product"
                />
                <div className="card-body product-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-dark">{item.name}</h5>
                  <p className="card-title">{item.description}</p>
                  <p className="card-text text-dark fw-bold justify-self-end">
                    Rs. {item.price}
                  </p>
                </div>
                {cart.indexOf((item.name + item.description)) >= 0 ? (
                  <a href="/cart" className="btn btn-warning m-2">
                      Go to cart
                  </a>
                ) : (
                  <button onClick={() => updateCart(item)} className="btn btn-dark m-2">
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
