import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

import { CircularProgress } from "@mui/material"; 

// components
import Products from "../components/Products/Products";

const Collection = () => {
    
    const params = useParams();
    const history = useHistory();
    const [collectionName, setCollectionName] = React.useState("");
    const [products, setProducts] = React.useState([]);
    const collection = useSelector((state) => state.collection);

    React.useEffect(() => {
        (async() => {
            const token = localStorage.getItem("userToken");
            const decodedToken = jwt.decode(token);
            if(decodedToken){
                if(decodedToken.exp*1000 <= Date.now()){
                    history.push("/login");
                    localStorage.setItem("userToken", "null");
                    localStorage.setItem("user", null);
                    localStorage.setItem("profile", "null");
                } else {
                    const collectionList = collection.filter(collection => collection.collection_id.toString() === params.id);
                    if(collectionList.length > 0){
                        setCollectionName(collectionList[0].name);
                        setProducts(collectionList[0].products);
                    }
                }
            } else history.push("/login");
        })();
    }, [params, history, collection]);
    
    return (
        <div className="pt-5 d-flex align-items-center justify-content-center">
            {collectionName === "" ? <CircularProgress /> : <Products products={products} collectionName={collectionName}/>}
        </div>
    )
}

export default Collection;