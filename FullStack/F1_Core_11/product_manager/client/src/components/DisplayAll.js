import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
    
const DisplayAll = (props) => {
    
    // const { productList, setProductList } = props;
    const {submissionDummy} = props;
    const [productList, setProductList] = useState([]);

        useEffect(() => {
            axios
                .get("http://localhost:8000/api/product")
                .then((res) => {
                    console.log(res.data);
                    setProductList(res.data);
                })
                .catch((err) => console.log(err));
        }, [submissionDummy]); //empty array means code will only run once on load
    
    return (
        <div>
            <h1>All Products</h1>
            {
            // productList?
            productList.map((product, index) => (
                <div key={index}>
                    {" "}
                    <Link to={`/${product._id}`}><p>{product.title}</p></Link>                
                </div>
            // <Link key={index} to={`/product/${product._id}`}><p>{product.title}</p></Link> //also works!
            ))
            // :null
            }
        </div>
    )
}
    
export default DisplayAll;