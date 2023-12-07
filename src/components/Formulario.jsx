import { useState } from 'react';

const Formulario = () => {

    const [error, setError] = useState(false);

    const [todo, setTodo] = useState({

        title: 'Todo #01',
        description: 'Descripción Todo #01',
        priority: true,
        state: 'complete'

    });


    const { title, description, priority, state } = todo; // object destructuring

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log('me diste click');        

        console.log(title, description, priority, state);

        validaciones

        if(!title.trim()||!description.trim()){

            setError(true);
            return;
        }else{
            setError(false);
        }

    };

    const handleChange = (e) => {

        const { name, type, checked, value } = e.target;
        console.log(name);

        setTodo({

            ...todo,//copia todas las propiedades presentes en el objeto todo.
            [name]: type === "checkbox" ? checked : value
        })// Si el tipo de entrada es un checkbox, asigna el valor de 'checked'; de lo contrario, usa el valor de 'value'.


        //validación para mostrar en tiempo real 
        if (name === "title" || name === "description") {

            if (!value.trim()) {

                setError(true);
                return;
            } else {
                setError(false);
            }
        }
    };


    return (

        <form onSubmit={handleSubmit}>

            {error && <div className="alert alert-danger">Todos los campos son requeridos</div>}

            <input type="text" name="title" className="form-control mb-2" placeholder="Ingrese ToDo" value={title} onChange={handleChange} />
            <textarea name="description" className="form-control mb-2" placeholder="Ingrese descripción de la tarea" value={description} onChange={handleChange}></textarea>
            <div>
                <input type="checkbox" name="priority" className="form-check-input mb-2 mx-1" id="inputCheck" checked={priority} onChange={handleChange} />
                <label htmlFor="inputCheck"> Dar prioridad</label>
            </div>
            <select name="state" className="form-select mb-2" value={state} onChange={handleChange}>
                <option value="incomplete">Pendiente</option>
                <option value="complete">Completada</option>
            </select>
            <button type="submit" className="btn btn-primary">Guardar Tarea</button>

        </form>

    )


};

export default Formulario;