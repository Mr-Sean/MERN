import React, {useEffect, useState} from "react";
import {Link, navigate} from "@reach/router";
import axios from "axios";


const EditAuthor = (props) => {

    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthorName(res.data.authorName);
            })
            .catch((err) => {
                console.log(err);
                navigate('/error');
            })
    }, [id])


    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, 
        {authorName} // this is shorthand syntax for "authorName: authorName"
        )
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }


    return (
        <div>
            <form onSubmit={updateSubmitHandler}>
                
                <header>
                    <h1>Edit Author</h1>
                    <Link to={"/"}>Home</Link>
                </header>

                <label>Name: </label>
                <input onChange={(e) => setAuthorName(e.target.value)}
                type="text" 
                name="authorName" 
                value={authorName}/>

                {errors.authorName 
                ? <span>{errors.authorName.message}</span> 
                :null}
                
                <button>Submit</button>
                <button onClick={(e) => navigate("/")}>Cancel</button>
            
            </form>
            
        </div>
    )

}

export default EditAuthor;