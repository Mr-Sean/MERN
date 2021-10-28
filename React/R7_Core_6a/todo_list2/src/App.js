import React, { useState } from "react";
import './App.css';

import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  // Below array destructure syntax is equivalent to next 3 lines:
  // const newTodoStateArr = useState();
  // const newTodo = newTodoStateArr[0];
  // const setNewTodo = newTodoStateArr[1];

  // const [newTodo, setNewTodo] = useState("");

  const [todoList, setTodoList] = useState([]);
  

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <Display todoList={todoList} setTodoList={setTodoList}/>


   
    </div>
  );
}

export default App;