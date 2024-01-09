import { useEffect,useState} from "react";
import Formulario from "./components/Formulario"; 
import Todos from "./components/Todos";



//   {
//     id:1,
//     title: 'Todo #01',
//     description: 'Descripción #01',
//     priority: true,
//     state: true
//   },
//   {
//     id:2,
//     title: 'Todo #02',
//     description: 'Descripción #02',
//     priority: false,
//     state: true
//   },
//   {
//     id:3,
//     title: 'Todo #03',
//     description: 'Descripción #03',
//     priority: false,
//     state: false
//   },
// ];

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodo]= useState(initialTodos);

  //useEffect = (()=>{},[]);
  
  useEffect(() => {localStorage.setItem('todos',JSON.stringify(todos))},[todos]);


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

  const orderTodo = (orderTodoArray) => { 

     return orderTodoArray = todos.sort((todoA,todoB) => {

      if(todoA.priority === todoB.priority) return 0; //si tareas tiene misma prioridad se mantiene el orden actual
      if(todoA.priority) return -1; //si tarea A (todoA) tiene prioridad (true), se mueve hacia arriba en el orden actual
      if(!todoA.priority) return 1;  //si tarea A (todoA) no tiene prioridad (false), se mueve hacia abajo en el orden actual

     })

  }

  return (
    <>
      <div className="container mb-2">
        
        <h1>ToDo App</h1>
        <Formulario addTodo={addTodo}/>
        <Todos todos = {orderTodo(todos)} deleteTodo = {deleteTodo} updateTodo={updateTodo}/>
        
        </div>
    </>

  );


};

export default App;