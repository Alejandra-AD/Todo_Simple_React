import { useState } from "react";
import Formulario from "./components/Formulario"; 
import Todos from "./components/Todos";




const initialTodos = [//datos de ejemplo
  {
    id:1,
    title: 'Todo #01',
    description: 'Descripción #01',
    priority: true,
    state: true
  },
  {
    id:2,
    title: 'Todo #02',
    description: 'Descripción #02',
    priority: false,
    state: true
  },
  {
    id:3,
    title: 'Todo #03',
    description: 'Descripción #03',
    priority: false,
    state: false
  },
];


const App = () => {

  const [todos, setTodo]= useState(initialTodos);

  const addTodo = (todo) => {

    setTodo([...todos, todo]); //copio todos los todos y agrego el nuevo desde formulario 

  }

  const deleteTodo = (id) => {//enviando id 

    const filterTodoArray = (todos.filter(todo => todo.id !== id));// filtrando todos los todo con id diferente al id enviado
    setTodo(filterTodoArray);

  };

  const updateTodo = (id)=>{

    const updateTodoArray = todos.map(todo=>{
      if (todo.id === id){todo.state = !todo.state}   
      return todo;
    }
      )
    setTodo(updateTodoArray);
  }

  return (
    <>
      <div className="container mb-2">
        
        <h1>ToDo App</h1>
        <Formulario addTodo={addTodo}/>
        <Todos todos = {todos} deleteTodo = {deleteTodo} updateTodo={updateTodo}/>
        
        </div>
    </>

  );


};

export default App;