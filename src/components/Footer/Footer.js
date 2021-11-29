import React from "react";

const Footer = () => {

    const collectionsList = [
        {
            id : 1,
            name : "Earrings",
            products : [],
            thumbnail : "/Assets/2.jpg"
        },
        {
            id : 2,
            name : "Wall decors",
            products : [],
            thumbnail : "/Assets/4.jpg"
        },
        {
            id : 3,
            name : "Felt home decor",
            products : [],
            thumbnail : "/Assets/5.jpg"
        },
    ]

    return (
        <div className="footer">
            <div className="row container">
                <div className="col-md-4">
                    <h6>OUR COLLECTIONS</h6>
                    <ul className="list-unstyled">
                        {collectionsList.map(collection => {
                            return <a key={collection.id} href={`/collection/${collection.id}`} className="footer-link"><li>{collection.name}</li></a>
                        })}
                        
                    </ul>
                </div>
                <div className="col-md-4">
                    <h6>INFORMATION & SUPPORT</h6>
                    <ul className="list-unstyled">
                        <a href="/shipping" className="footer-link"><li>Shipping Policy</li></a>
                        <a href="/return" className="footer-link"><li>Return Policy</li></a>
                        <a href="/cancellation" className="footer-link"><li>Cancellation Policy</li></a>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h6>CONTACT US</h6>
                    <ul className="list-unstyled mb-1">
                        <a href="mailto:someone@example.com" className="footer-link"><li>crafty3soul@gmail.com</li></a>
                    </ul>
                    <ul className="list-inline">
                        <a href="https://instagram.com/craftysoul_handmade_with_love?utm_medium=copy_link" target="_blank" rel="noreferrer" className="footer-link"><i className="fab fa-instagram mx-2"></i> Follow us on Instagram</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;