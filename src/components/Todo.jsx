
const Todo = (todo) => {

    const {id,title,description,state,priority}= todo;

    return(
    <div>
        <li className="list-group-item my-3" key={{id}}>
        <div><h3>{title}</h3></div>
        <div><h5>{description}</h5></div>
        <button className="btn btn-primary">{state}</button> 
        </li>
        
        
    </div>

    )

};

export default Todo;