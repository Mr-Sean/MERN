import React, { useState } from "react";


const Display = (props)=>{

    // deconstruct props object

    const {todoList, setTodoList} = props;
    
    
    // function to handle style change when the checkbox is clicked
    
    const handleCompleted = (todo)=> {
        todo.markedDelete = !todo.markedDelete;
        let updateTodos = [...todoList];
        setTodoList(updateTodos);
    }
    
    // simple marked complete (no ninja) functionality
    
    const styled = (markedDelete)=>{
        if(markedDelete === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }
    
        // delete functionality

        const deleteButton = (idFromBelow) => {
            setTodoList(
                
                todoList.filter((todo, index) => {
                    return todo.id !== idFromBelow;
                })
            )

        }


    return (
        <div>
            {
                todoList.map((todo, index)=>(
                    <div className={styled(todo.markedDelete)} key={index}>
                        <p>{todo.content}</p>
                        <input type="checkbox" onChange={(e)=>handleCompleted(todo)}/>
                        <button onClick={(e)=>deleteButton(todo.id)}>Delete</button>
                    </div>
                ))
            }
         
        </div>
    )
}

export default Display;