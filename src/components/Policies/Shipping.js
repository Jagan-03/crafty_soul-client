import React from "react";

const Shipping = () => {
    return (
        <div className="container policy d-flex pt-5">
      <div className="d-flex flex-column">
        <h5 className="text-black">How long will it take for my order to be delivered?</h5>
        <p>
        An order placed from within the country is normally shipped within 1-3 business days. However due to the ongoing COVID-19, the shipping of your orders could be delayed. Post shipping the normal delivery time is 2-4 working days. We appreciate your patience. This timeline is subject to change due to both external or internal factors.
        </p>
        <h5 className="text-black">What is the price for the shipping?</h5>
        <p>
        For prepaid orders, there are no shipping charges. However, for products bought with the Cash on Delivery option, a charge of Rs. 99 shall be levied on each order.
        </p>
        <h5 className="text-black">What if my order doesn’t get delivered?</h5>
        <p>Our courier partner will make three attempts to get your delivery to you. If he cannot deliver the product, then a refund shall be credited to your bank account.</p>
        <h5 className="text-black">Import Duty Charges for International Shipments</h5>
        <p>During the time of delivery of an International shipment, there might be additional charges levied by the importing country's customs department. These charges are subject to the regulatory authority governing the country and we do not have any control over it. Please note that these charges are not included in your shopping cart while placing your order.</p>
      </div>
    </div>
    )
}

export default Shipping;