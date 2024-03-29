import Todo from './Todo';


const Todos = ({ todos,deleteTodo,updateTodo }) => {


    return (

            <div className="mt-5">
                <h2 className="text-center mb-5">Todos</h2>
                <ul className='list-group'>
                    {todos.map(todo => (//iterando el array de objetos con map , recordar que map necesita key
                        // <li key={todo.id}>{todo.title}</li> //recordar siempre pasar la key
                        <Todo key ={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    ))}

                     {
                        todos.length === 0 && (<li className='list-group-item text-center'> Sin tareas 📝 </li>)
                     }
                     
                </ul>
            </div>


    )

    //


}

export default Todos;