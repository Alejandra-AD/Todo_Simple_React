
const Formulario = () => {

    const handleSubmit = (e) => {

        e.preventDefault();


    };

    // const handleChange = (e) => {

    //         const [name]


    // };


    return(

        <form onSubmit={handleSubmit}>

            <input type="text" name="title" className="form-control mb-2" placeholder="Ingrese ToDo" />
            <textarea name="description" className="form-control mb-2" placeholder="Ingrese descripción de la tarea"></textarea>
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