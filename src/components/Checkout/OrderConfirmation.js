import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {

    const { state } = useLocation();

    return (
        <div className="pt-5 d-flex align-items-center justify-content-center">
            <div className="card order-card rounded d-flex justify-content-center border">
                <div className="bg-dark text-light text-center p-4">
                    CRAFTY SOUL
                </div>
                <div className="text-center p-4">
                    <i className="fas fa-check-circle text-success fa-5x mb-3"></i>
                    <h3 className="text-black mb-3">Thanks for Your Order</h3>
                    <h5 className="text-black border-bottom pb-3 mb-3">{state.customer.firstname + " " + state.customer.lastName}</h5>
                    <h6 className="text-black mb-3 border-bottom pb-3">Order id - {state._id}</h6>
                    <div className="text-start">
                        <h6 className="text-black">Shipping Details</h6>
                        <p className="m-0">{state.shipping.street}</p>
                        <p className="m-0">{state.shipping.town_city + ", " + state.shipping.postal_zip_code}</p>
                    </div>
                </div>

                <div className="continue-shop text-center p-4">
                    <a href="/" className="btn btn-light">Continue Shopping</a>
                </div>

            </div>  
        </div>
    )
}

export default OrderConfirmation;