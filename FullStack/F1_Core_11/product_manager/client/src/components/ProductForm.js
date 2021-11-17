import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {

    const { productList, setProductList } = props;

    // const { submissionDummy, setSubmissionDummy } = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/product", {
            title, //shorthand for this: title:title
            price,
            description
        })
        .then((response) => {
            console.log(response);
            console.log(response.data);
            
            setProductList([...productList, response.data.product])
            setTitle("");
            setPrice("");
            setDescription("");

            // setSubmissionDummy(!submissionDummy);

        })
        .catch((err) =>  {
            console.log(err);
        })
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>Product Manager</h2>

            <div>
                {/* Title:{" "}  */}
                <label>Title: </label>
                <input 
                    name="title"
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} // set "value" to same as Getter above
                />
            </div>
            <br />

            <div>
                {/* Price:{" "}  */}
                <label>Price: </label>
                <input 
                    name="price"
                    type="number" 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price} 
                />
            </div>
            <br />

            <div>
                {/* Description:{" "}  */}
                <label>Description: </label>
                <input 
                    name="description"
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} 
                />
            </div>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;