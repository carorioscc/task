export function TaskCard(task){
    return(
        <div>

            <h1> {task.title}</h1>
            <hr></hr>
            <p>{task.description}</p>

        </div>
    )
}