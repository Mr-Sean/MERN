import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
    
const OneProduct = (props) => {
    
    const { id } = props;
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((response) => {
                console.log(response.data)
                setProductInfo(response.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const deleteHandler = () => {
        axios
            .delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <div>
                <h2>{productInfo.title}</h2>
                <p>{productInfo.price}</p>
                <p>{productInfo.description}</p>
                <button onClick={deleteHandler}>Delete</button>
           </div>;
       
};
    
export default OneProduct;