import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import { useDispatch } from "react-redux";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Actions
import { getCollection } from "./actions/collection";
import { getCart } from "./actions/cart";
import { getOrder } from "./actions/order";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollection());
    dispatch(getCart());
    dispatch(getOrder());
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

