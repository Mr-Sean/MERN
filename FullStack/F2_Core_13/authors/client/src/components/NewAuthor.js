import React, {useState} from "react";
import {Link, navigate} from "@reach/router";
import axios from "axios";


const NewAuthor = (props) => {

    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, 
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
            <form onSubmit={newSubmitHandler}>
                
                <header>
                    <h1>Add an Author</h1>
                    <Link to={"/"}>Home</Link>
                </header>

                <label>Name: </label>
                <input onChange={(e) => setAuthorName(e.target.value)}
                type="text" 
                name="authorName" 
                value={authorName}/>
                {errors.authorName ? <span>{errors.authorName.message}</span> :null}
                <button>Submit</button>
                <button onClick={(e) => navigate("/")}>Cancel</button>
            
            </form>
            
        </div>
    )

}

export default NewAuthor;