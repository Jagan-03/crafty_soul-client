import React from "react";
import useInterval from 'use-interval';
import { useSelector } from "react-redux"; 

import { Avatar } from '@mui/material';


const Navbar = () => {

  const [userSignedIn, setUserSignedIn] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [userData, setUserData] = React.useState("");
  const cartItems = useSelector(state => state.cart);

  React.useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    const userCart = cartItems.filter(item => item.user_id === user_id);
    setCart(userCart);
    if(localStorage.getItem('profile')){
      if(localStorage.getItem('profile') !== "null") {  
        setUserData(JSON.parse(localStorage.getItem('profile')).result);
      }
    }
  }, [cartItems, userSignedIn]);

  useInterval(() => {
    const token = localStorage.getItem("userToken");
    if(token !== "null") setUserSignedIn(true);
    else setUserSignedIn(false);
  }, 1000);

  const signOut = () => {
    localStorage.setItem("profile", "null");
    localStorage.setItem("userToken", "null");
    localStorage.setItem("user", null);
    localStorage.setItem("user_id", null);
  }

  

  return (
    <div className="sticky-top">
      <div className="nav-label d-flex justify-content-center align-content-center p-2">
        <p className="m-0 text-white-50">
          FREE shipping across India on all orders.
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Crafty soul
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                <a
                  className="border btn btn-outline-dark nav-link dropdown-toggle text-dark"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/collection/1">
                    Earrings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/collection/2">
                    Wall decors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/collection/3">
                    Felt home decor
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li> */}
            </ul>
              {userSignedIn ? <h5 className="m-0 text-black">Hello {userData.name} !!!</h5> : <></>}
            <div className="dropdown d-flex align-items-center">
              <button
                className="btn btn-floating btn-secondary ms-2"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="far fa-user text-light"></i>
              </button>
              
              {userSignedIn ? (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="p-2 border-bottom m-2 d-flex flex-column align-items-center justify-content-center">
                  <Avatar alt={userData.name} src={userData.imageUrl} />
                  <p className="m-0 mt-2">{userData.email}</p>
                </li>
                <li>
                  <a className="dropdown-item" href="/orders">
                    My Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item btn-link" type="button" onClick={signOut} href="/login">
                    Sign out
                  </a>
                </li>
              </ul>
              ) : (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/register">
                    Register
                  </a>
                </li>
              </ul>
              )}

              

              
            </div>
            <a href="/cart" className="btn btn-link">
              <i className="fas fa-shopping-bag fa-2x text-dark"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                {cart.length}
              </span>
            </a>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
