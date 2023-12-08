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

  return (
    <>
      <div className="container mb-2">
        
        <h1>ToDo App</h1>
        <Formulario/>
        <Todos todos = {todos}/>
        
        
        </div>
    </>

  );


};

export default App;