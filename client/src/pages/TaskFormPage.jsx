
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
//import { createTask } from '../api/tasks.api';
//para refrescar pagina despues de crear tarea
import { useNavigate, useParams } from 'react-router-dom';
import {createTask, deleteTask, getTask, updateTask} from "../api/tasks.api";
import {toast} from "react-hot-toast";

export function TaskFormPage(){

    const { register, handleSubmit, formState :{errors}, setValue,} = useForm();
    const navigate = useNavigate();
    const params= useParams();
    //cuando extrae los datos los va a obtener y mostrar en consola
    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            //actualizando
            console.log('Actualizando task')
            await updateTask(params.id, data);
            toast.success("Tarea Actualizada", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            //crea tarea
            console.log('Crea tarea');
            await createTask(data);
            //FUNCION DE TOASTER y recibe los parametros de estilos, donde aparece
            toast.success("Nueva Tarea creada", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }
    
        navigate("/tasks");
    });
    //para mostrar los datos a la hora de actualizar, obtiene los datos
    useEffect(() => {
        async function loadTask() {
          if (params.id) {
            //obtiene los datos
            const { data } = await getTask(params.id);
            console.log(data);
            //setvalue permite mostrar en el form
            setValue("title", data.title);
            setValue("description", data.description);
          }
        }
        loadTask();
    }, []);

    return(
        <div className='max-w-xl mx-auto'> 
            <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
                <input type="text" placeholder="Titulo" 
                 {...register("title", {required:true})}
                 className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.title && <span>Este campo es requerido</span>}
                <textarea 
                rows="3" 
                placeholder="Descripción"
                {...register("description", {required :true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full'
                ></textarea>
                {errors.description && <span>Este campo es requerido</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {
                params.id && (
                    <div className='flex justfy-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                    onClick={async ()=> {
                        const accepted = window.confirm('¿Estas seguro(a)?')
                        if(accepted){
                            await deleteTask(params.id);
                            toast.success("Tarea Eliminada",{
                                position: "bottom-right",
                                style:{
                                    background: "#101010",
                                    color: "#fff",
                                },
                        });
                            navigate("/tasks");
                        }
                    }}>
                        Eliminar
                    </button>
                    </div>
                )
            }
            
        </div>
    )
}
