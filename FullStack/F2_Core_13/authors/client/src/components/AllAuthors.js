import React, {useState, useEffect} from "react";
import {Link, navigate} from "@reach/router";
import axios from 'axios';

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);
    // const {id} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => {
                console.log(err);                
            })
        }, [])
        
        const deleteHandler = (idFromBelow) => {
            axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
                .then((res) => {
                    console.log(res.data);
                    setAuthorList(authorList.filter((author) => author._id !== idFromBelow))
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    return (
        <div>
            <header>
                <h1>We have quotes by:</h1>
                <Link to={"/new"}>Add New Author</Link>

                <table style={{margin:"auto", border:"1px solid black"}}>
                    <thead style={{backgroundColor:"lightgray", color:"white"}}>
                        <tr>
                            <th>Author</th>    
                            <th>Action Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authorList?

                            authorList.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.authorName}</td>
                                    <td>
                                        <button 
                                            style={{backgroundImage:"linear-gradient(red,yellow)", 
                                            padding:"7px 13px", color:"white", fontWeight:"bold", 
                                            margin:"5px", border:"none", borderRadius:"5px"}}
                                            onClick={() => {navigate(`/edit/${author._id}`)}}
                                        >Edit</button>

                                        <button 
                                            style={{backgroundImage:"linear-gradient(green, blue)", 
                                            padding:"7px 13px", color:"white", fontWeight:"bold", 
                                            margin:"5px",border:"none", borderRadius:"5px"}}
                                            onClick={() => deleteHandler(author._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))

                            :null
                        }
                    </tbody>

                </table>
            </header>
        </div>
    )
}

export default AllAuthors;