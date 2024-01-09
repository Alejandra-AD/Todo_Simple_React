
const Todo = ({ todo, deleteTodo}) => {

    const { id, title, description, state, priority } = todo;

    return (

        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h3 className={`${state && "text-decoration-line-through"}`}> {title}</h3>
                    <h5 className={`${state && "text-decoration-line-through"}`}>{description}</h5>
                    <div className="d-flex gap-2">
                        <button onClick={() => deleteTodo(id)} className="btn btn-sm btn-danger">Eliminar</button>
                        <button className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-primary">{priority && "prioritario"}</span>
            </div>
        </li>


    )

};

export default Todo;