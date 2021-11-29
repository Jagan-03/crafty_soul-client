import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { addOrder } from "../../actions/order";
import { refreshCart } from "../../actions/cart";

const PaymentForm = ({shippingData, cart}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);
    const [shippingDetails, setShippingDetails] = React.useState([]);

    React.useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity
        })
        setTotalPrice(total);
        setCartItems(cart);
        setShippingDetails(shippingData)
    }, [cart, shippingData]);
  

        const stripePromise = loadStripe("pk_test_51K11LVSEPEmhN4c2o2qQmMK7N07mPHzJMmSy5CpwXb9mgbTRotBNrxl9lnWiY6qkbEVz3PQbIqNKdwhyqMhTGwLw003V1gclUL");

        const handleSubmit = async (e, elements, stripe) => {
            e.preventDefault();

            if(!stripe || !elements) return;

            const cardElement = elements.getElement(CardElement);

            const { error, paymentMethod } = await stripe.createPaymentMethod({type : "card", card: cardElement});

            if(error) console.log(error);
            else {
                const orderData = {
                    list_items : cartItems,
                    customer : {firstname : shippingDetails.firstName, lastName : shippingDetails.lastName, email : shippingDetails.email, customer_id : cartItems[0].user_id},
                    shipping : {
                        name : "primary",
                        street : shippingDetails.address1,
                        town_city : shippingDetails.city,
                        country_state : shippingDetails.state,
                        postal_zip_code : shippingDetails.zip,
                    },
                    order_price : totalPrice,
                    payment : {
                        gateway : "stripe",
                        stripe : {
                            payment_method_id : paymentMethod.id,
                        }
                    }
                };

                const orderConfirmation = await dispatch(addOrder(orderData));
                dispatch(refreshCart());
                history.push("/orderConfirmation", orderConfirmation);

            }
        }

    return (
        <div className="pt-4 d-flex flex-column align-items-center justify-content-center">
            
                <h5>Order Summary</h5>

            <div className="d-flex flex-column border-top order-summary">
                {cart.map(item => (
                   <div className="d-flex mt-4" key={item._id}>         
                <div className="d-flex mx-3">
                <img
                  className="rounded"
                  src={item.image}
                  width="50"
                  alt={item.name}
                />
                </div>

                <div className="d-flex flex-fill">
                    <div className="row w-100">
                        <div className="col-md-6">
                            <span className="font-weight-bold cart-chec">{item.name}</span><br />
                            <span className="text-grey cart-chec-p">{item.description}</span>
                        </div>
                        <div className="col-md-6">
                            <span className="font-weight-bold cart-chec">Rs. {item.quantity * item.price}</span><br />
                            <span className="text-grey cart-chec-p">Qty: {item.quantity}</span>
                        </div>
                    </div>
                </div>

                </div>
                ))}
            </div>

            <div className="border-top border-bottom mt-4 mb-4 pt-3 pb-3 d-flex w-50 justify-content-center">
                    <h5 className="m-0">Total Price - ₹{totalPrice}</h5>
            </div>

            <Typography cariant="h6" gutterBottom className="fw-bold">
                Payment Method
            </Typography>

            <div className="d-flex">
            <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                            <form onSubmit={(e) => handleSubmit(e, elements, stripe)} className="stripe-elements">
                                <CardElement className=""/>
                                <br /><br />
                                <div className="d-flex justify-content-between">
                                    <a href="/cart" className="btn btn-light m-2">
                                        Back to Cart
                                    </a>
                                    <button className="btn btn-primary m-2">
                                        Place order
                                    </button>
                                </div>
                            </form>
                        )}
                    </ElementsConsumer>
            </Elements>
            </div>


        </div>
    )
}

export default PaymentForm;