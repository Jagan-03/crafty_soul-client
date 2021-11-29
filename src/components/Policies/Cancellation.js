import React from "react";

const Cancellation = () => {
  return (
    <div className="container policy d-flex pt-5">
      <div className="d-flex flex-column">
        <h5 className="text-black">How do I cancel my order?</h5>
        <p>
          Kindly drop an e-mail to craftsyhelp@gmail.com requesting the same
        </p>
        <h5 className="text-black">Cash on Delivery Orders:</h5>
        <p>
          If the situation ever arises where you're inclined to cancel your
          order and you don't have a Time Turner, you'd have to do so before the
          order is shipped out from our facility. Our production team has
          borrowed powers from The Flash to make your cases superfast. However,
          in certain cases, your order might've already been shipped and past
          that point, cancellations may not be possible. If you still wish to
          not accept the order, all you have to do is reject the package upon
          delivery. If you aren't home when the package arrives, please keep
          your family or your neighbors informed to not collect the order. Once
          an order is delivered, it will not be eligible for return.
        </p>
        <h5 className="text-black">Prepaid Orders:</h5>
        <p>Prepaid orders can be cancelled at any instance, but it has to be done within the first four hours of placing the order to get a refund to your original payment method. Past that point, the refund shall be credited to your Crafty soul account. Please note that a refund will take 5-7 days to reflect in your original bank account.</p>
      </div>
    </div>
  );
};

export default Cancellation;
