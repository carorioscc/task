import {useForm} from 'react-hook-form'
export function TaskFormPage(){

    const { register, handleSubmit, formState :{errors}} = useForm();
    //cuando extrae los datos los va a obtener y mostrar en consola
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Titulo" 
                 {...register("title", {required:true})}
                />
                {errors.title && <span>Este campo es requerido</span>}
                <textarea 
                rows="3" 
                placeholder="Descripción"
                {...register("description", {required :true})}
                ></textarea>
                <button>Guardar</button>
            </form>
        </div>
    )
}
