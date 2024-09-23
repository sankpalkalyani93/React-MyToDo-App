import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Todo(){

    const [task, setTask] = useState('');
    const [todo, setTodos] = useState([]);
    
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTodo = () => {
        if(task.trim()){
            setTodos([...todo, task]);
            setTask('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodo = todo.filter((_, i) => i !== index);
        setTodos(newTodo);
    }

    return(
        <div className="container">
            <h2 className="text-center mb-4">My ToDo App</h2>

            <div className="row mb-3">
                <div className="col-md-8 offset-md-2">
                <input className="form-control" type="text" placeholder="Enter a new task" 
                value={task} onChange={handleInputChange}/>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100"
                    onClick={handleAddTodo}>Add</button>
                </div>
        </div>    
        <ul className="list-group col-md-8 offset-md-2">
            {todo.map((todo, index) => (
                <li key={index} 
                className="list-group-item justify-content-between d-flex align-items-center">{todo}
                <button onClick={() => handleDeleteTodo(index)} 
                className="btn btn-danger btn-sm">Delete</button>
                </li>
            ))}
        </ul>
        
        </div>
    );
}

export default Todo;