import React, { useState } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";


function TodoFunction() {
    // Initialize todos as an array
  let [todos,setTodos] = useState([]);
  const [todoToShow,setTodoToShow] = useState("all");  
  const [toggleAllComplete,setToggleAllComplete] = useState(true);

  const addTodo = (todo) => {
    // Use the spread operator to create a new array with the new todo added
    setTodos([todo, ...todos]);

  };
  const handleDeleteTodo = (id) =>{
    setTodos(
        todos.filter(todo => todo.id !== id)
    )
}
const updateTodoToShow = (s)=>{

  setTodoToShow(
      s
  )
}
const toggleComplete = id =>{
  setTodos(todos.map(todo =>{
      if (todo.id === id){
          // suppose to update
          return {
              ...todo,
              complete : ! todo.complete
          }
       }else{
           return todo
       }
  }))
}
const removeAllTodosThatAreComplete = () =>{
  setTodos(
      todos.filter(todo => !todo.complete)
  )

}

   //update todoToShow in state  
   if(todoToShow === "active"){
    todos = todos.filter(todo => (!todo.complete));

    
}else if(todoToShow === "complete"){
    todos = todos.filter(todo => (todo.complete));
}

  return (
    <div className="container">
      <Todoform onSubmit={addTodo} />
      {todos.map((todo, index) => (
        // Assuming Todo component requires a key prop for each item in the list
        <Todo
        key= {todo.id} todo = {todo} 
        toggleComplete = {() => toggleComplete(todo.id)} 
        onDelete = {()=> handleDeleteTodo(todo.id)} />      ))}
      <div>
        <button className='update-btn btn'  onClick={()=> updateTodoToShow("all")}>All</button>
        <button className='update-btn btn'  onClick={()=> updateTodoToShow("active")}>Active</button>
        <button className='update-btn btn'  onClick={()=> updateTodoToShow("complete")}>Complete</button>
        <button className='all-btn btn' onClick={removeAllTodosThatAreComplete}>Remove all complete todos</button> 
        <button className='all-btn btn' onClick={
                    ()=>{
                        setTodos(
                            todos.map(todo =>({
                                ...todo,
                                complete : toggleAllComplete,
                            }
                            ))
                        )
                        setToggleAllComplete(
                            !toggleAllComplete
                        )
                      
                    }
                }>Toggle all complete : {`${toggleAllComplete}`}</button>
      </div>
    </div>
  )
}

export default TodoFunction
