import React from "react";

const Return = () => {
    return (
        <div className="container policy d-flex pt-5">
        <div className="d-flex flex-column">
            <h5 className="text-black">What products are eligible for return or replacement?</h5>
            <p>
            When raising an issue, please attach an image of the shipping invoice to your issue to speed up the process.
Due to hygiene reasons, we do not accept the replacement/return of masks.
            </p>
            <h5 className="text-black">What products are not eligible for return or replacement?</h5>
            <p>
                The following products shall not be eligible for return or replacement:
                <br />
                Any product that exhibits physical damage to the box or to the product.
                <br />
                Due to hygiene reasons, we do not accept the replacement/return of masks.
                <br />
                Any product that is returned without all original packaging and accessories, including the retail box, manuals, cables, and all other items originally included with the product at the time of delivery.
                <br />
                A used product is like kryptonite to us. We won't be able to take that back.
            </p>
        </div>
    </div>
    )
}

export default Return;