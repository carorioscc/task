
import { useEffect, useState} from "react";
//importa la funcion
import {getAllTasks } from "../api/tasks.api";
import {TaskCard} from "./TaskCard";
//Listar tareas usseefect se ejecuta cuando carga la pagina, mada a llamar getAllTasks y muestra en consola la respuesta
export function TasksList(){
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadTasks(){
            const res=await getAllTasks();
            console.log(res);
            setTasks(res.data);
        }
        loadTasks();
      
    },[]);
    return (
        <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
        ))}
        </div>
    )
    
}