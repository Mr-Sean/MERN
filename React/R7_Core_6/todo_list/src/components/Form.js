import React, { useState } from "react";


const Form = (props)=>{

    // stat for todoText
    const [todoText, setTodoText] = useState("");


    // deconstruct props object
    const {todoList, setTodoList} = props;


const submitHandler = (e) => {
    e.preventDefault();

    setTodoList([...todoList, {
        content: todoText,
        markedDelete: false,
        id: Math.floor(Math.random() * 100000000)
    }])

    setTodoText("");
}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input value={todoText} onChange={(e)=>setTodoText(e.target.value)} type="text" />
                <button>Add</button>
            </form>

        </div>
    )
}

export default Form;