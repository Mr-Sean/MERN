import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
    
const UpdateProduct = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`,
        {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input 
                    onChange = {(e) => setTitle(e.target.value)}
                    value = {title}
                    name = "title"
                    type = "text" 
                />
            </div>

                <br />
                
            <div>
                <label>Price: </label>
                <input 
                    onChange = {(e) => setPrice(e.target.value)}
                    value = {price}
                    name = "price"
                    type = "number" 
                    />
            </div>

                <br />

            <div>
                <label>Description: </label>
                <input 
                    onChange = {(e) => setDescription(e.target.value)}
                    value = {description}
                    name = "description"
                    type = "text" 
                    />
            </div>
            
                <br />

                <input type = "submit" />

            </form>
    )
}
    
export default UpdateProduct;