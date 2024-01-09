import Todo from './Todo';


const Todos = ({ todos,deleteTodo }) => {

    return (

            <div className="mt-5">
                <h2 className="text-center mb-5">Todos</h2>
                <ul className='list-group'>
                    {todos.map(todo => (//iterando el array de objetos con map
                        // <li key={todo.id}>{todo.title}</li> //recordar siempre pasar la key
                        <Todo todo={todo} deleteTodo={deleteTodo}/>
                    ))}
                </ul>
            </div>


    )

    //


}

export default Todos;