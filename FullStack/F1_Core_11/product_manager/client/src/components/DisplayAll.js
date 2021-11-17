import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
    
const DisplayAll = (props) => {
    
    const { productList, setProductList } = props;
    // const {submissionDummy} = props;
    // const [productList, setProductList] = useState([]);

        useEffect(() => {
            axios
                .get("http://localhost:8000/api/product")
                .then((res) => {
                    console.log(res.data);
                    setProductList(res.data);
                })
                .catch((err) => console.log(err));
        }, []); //empty array means code will only run once on load
        // }, [submissionDummy]);

        const deleteFilter = (idFromBelow) => {
            axios
                .delete(`http://localhost:8000/api/product/${idFromBelow}`)
                .then((res) => {
                    console.log(res.data);
                    const newList = productList.filter((product, index) => product._id !== idFromBelow);
                    setProductList(newList);                
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    
    return (
        <div>
            <h1>All Products</h1>
            {
            productList?
                productList.map((product, index) => (
                    // <Link key={index} to={`/product/${product._id}`}><p>{product.title}</p></Link> //also works!
                    <div key={index}>
                        {/* {" "} */}
                        <Link to={`/${product._id}`}>
                            <p>{product.title}</p>
                        </Link>                
                        <Link to={`/product/edit/${product._id}`}>
                            <span>Edit</span>
                        </Link>
                        <button onClick = {() => deleteFilter(product._id)}>
                            Delete    
                        </button>             
                    </div>
                ))
            : null}
        </div>
    );
}
    
export default DisplayAll;