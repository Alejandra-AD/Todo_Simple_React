
const Todos = ({ todos }) => {

    return (

        <div>
            <h2 className="text-center mb-5">Todos</h2>

            <ul>
                {todos.map(todo => (//iterando el array de objetos con map
                    <li key={todo.id}>{todo.title}</li> //recordar siempre pasar la key
                ))}
            </ul>

        </div>

    )

    //


}

export default Todos;