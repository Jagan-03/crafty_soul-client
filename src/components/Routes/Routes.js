import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Collection from "../../pages/Collection";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ShoppingCart from "../Cart/ShoppingCart";
import Orders from "../Orders/Order";
import Shipping from "../Policies/Shipping";
import Return from "../Policies/Return";
import Cancellation from "../Policies/Cancellation";
import Checkout from "../Checkout/Checkout";
import OrderConfirmation from "../Checkout/OrderConfirmation";

const Routes = () => {
    return (
        <>
        <Switch>
            <Route path="/shipping" component={Shipping} />
            <Route path="/return" component={Return} />
            <Route path="/cancellation" component={Cancellation} />
            <Route path="/orders" component={Orders} />
            <Route path="/OrderConfirmation" component={OrderConfirmation} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/collection/:id" component={Collection} />
            <Route path="/Register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
        </>
    )
}

export default Routes;