import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
    const { productList, setProductList } = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductData = {
            title,
            price,
            description,
        };
        axios
            .post("http://localhost:8000/api/product", newProductData)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Product Form</h2>
            <div>
                Title:{" "} 
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} 
                />
            </div>
            <div>
                Price:{" "} 
                <input 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price} 
                />
            </div>
            <div>
                Description:{" "} 
                <input 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;