import Todo from './Todo';


const Todos = ({ todos }) => {

    return (

        <div>
            <h2 className="text-center mb-5">Todos</h2>

            <div className='list-group'>
                <ul>
                {todos.map(todo => (//iterando el array de objetos con map
                    // <li key={todo.id}>{todo.title}</li> //recordar siempre pasar la key
                    <Todo key={todo.id} title={todo.title} description={todo.description}/>
                ))}
            </ul>
            </div>


        </div>

    )

    //


}

export default Todos;