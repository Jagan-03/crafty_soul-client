import React from "react";

const collectionsList = [
    {
        id : 1,
        name : "Earrings",
        products : [
            {
                id : 1,
                image : "/Assets/1.jpg",
                description : "Earring model 1",
                price : 60
            },
            {
                id : 2,
                image : "/Assets/2.jpg",
                description : "Earring model 2",
                price : 80
            },
            {
                id : 3,
                image : "/Assets/3.jpg",
                description : "Earring model 3",
                price : 70
            },
            {
                id : 4,
                image : "/Assets/4.jpg",
                description : "Earring model 4",
                price : 80
            },
            {
                id : 5,
                image : "/Assets/5.jpg",
                description : "Earring model 5",
                price : 40
            },
            {
                id : 6,
                image : "/Assets/6.jpg",
                description : "Earring model 6",
                price : 100
            },
            {
                id : 7,
                image : "/Assets/7.jpg",
                description : "Earring model 7",
                price : 70
            },
            {
                id : 8,
                image : "/Assets/8.jpg",
                description : "Earring model 8",
                price : 50
            },
            {
                id : 9,
                image : "/Assets/9.jpg",
                description : "Earring model 9",
                price : 30
            },
            {
                id : 10,
                image : "/Assets/10.jpg",
                description : "Earring model 10",
                price : 60
            },
            {
                id : 11,
                image : "/Assets/11.jpg",
                description : "Earring model 11",
                price : 40
            },
            {
                id : 12,
                image : "/Assets/12.jpg",
                description : "Earring model 12",
                price : 60
            },
        ],
        thumbnail : "/Assets/Collections/earrings.jpg"
    },
    {
        id : 2,
        name : "Wall decors",
        products : [],
        thumbnail : "/Assets/Collections/wallDecors.jpg"
    },
    {
        id : 3,
        name : "Felt home decor",
        products : [],
        thumbnail : "/Assets/Collections/homeDecors.jpg"
    },
]

const Collections = () => {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h3 className="text-dark mb-3">OUR COLLECTIONS</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {collectionsList.map(collection => {
                    return <div key={collection.id} className="text-center m-2">
                    <div className="bg-image hover-zoom hover-overlay ripple products-home" data-mdb-ripple-color="light">
                        <img src={collection.thumbnail} className="img-fluid product-image" alt="product"/>
                        <a href={`/collection/${collection.id}`}>
                            <div className="mask d-flex justify-content-center align-items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.651)"}}>
                                <span className="text-light border badge">{collection.name}</span>
                            </div>
                        </a>
                    </div>
                </div>
                })}           
            </div>
            <h3 className="text-dark mb-3 mt-4">MORE TO COME...</h3>
        </div>
    )
}

export default Collections;