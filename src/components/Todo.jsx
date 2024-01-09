
const Todo = ({ todo }) => {

    const { id, title, description, state, priority } = todo;

    return (

        <li className="list-group-item my-3">
            <div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className="d-flex gap-2"> 
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                    <button className="btn btn-sm btn-warning">Actualizar</button>
                </div>
            </div>

        </li>


    )

};

export default Todo;