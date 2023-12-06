import {useState} from 'react'; 

const Formulario = () => {


    const [todo,setTodo] = useState({

        title : 'Todo #01',
        description : 'Descripción Todo #01',
        priority: true,
        state : 'complete'

    }); 

    
    const {title,description,priority,state} = todo; // object destructuring

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log('me diste click');        

        console.log(title, description, priority, state);

    };

    const handleChange = (e) => {

        const{name,type,}= e.target;
        console.log(name);

        setTodo({ ...todo, [name]: e.target.value })



    };


    return(

        <form onSubmit={handleSubmit}>

            <input type="text" name="title" className="form-control mb-2" placeholder="Ingrese ToDo" value={title} onChange={handleChange}/>
            <textarea name="description" className="form-control mb-2" placeholder="Ingrese descripción de la tarea" value={description} onChange={handleChange}></textarea>
            <div>
                <input type="checkbox" name="priority" className="form-check-input mb-2 mx-1" id="inputCheck"/>
                <label htmlFor="inputCheck"> Dar prioridad</label>
            </div>
            <select name="state" className="form-select mb-2">
                <option value="incomplete">Pendiente</option>
                <option value="complete">Completada</option>
            </select>
            <button type="submit" className="btn btn-primary">Guardar Tarea</button>

        </form>

    )


};

export default Formulario;