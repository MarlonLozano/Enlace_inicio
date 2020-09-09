import Link from 'next/link'
import { Task } from '~/src/tasks/model/entities/task.entity'
import TaskFormIndex from '~/pages/task/form'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Props {
    tasks?: Task[]
}

function TaskTable({ tasks }: Props) {
    const router = useRouter();
    const [taskList, setTaskList] = useState(tasks);

    const deleteTask = async (task: Task) => {
        const res = await fetch(`/api/tasks/${task.id}`, {
            method: 'DELETE',
        })
        setTaskList(taskList.filter(t => t !== task))
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha de Creación</th>
                        <th scope="col">Fecha de Actualización</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task: Task) => (
                        <tr>
                            <th scope="row">{task.id}</th>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.createdAt}</td>
                            <td>{task.updatedAt}</td>
                            <td><Link href="/task/form/[id]" as={`/task/form/${task.id}`}><button className="btn btn-primary">Editar</button></Link></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTask(task)}>Eliminar</button></td>
                        </tr >
                    ))}
                </tbody >
            </table >
            {taskList.length == 0 ? <h3 className="text-center">No hay tareas</h3> : null}
        </>
    )
}

export default TaskTable