import { NextPage } from 'next'
import TaskTable from '~/components/task/TaskTable'
import Link from 'next/link'
import { Task } from '~/src/tasks/model/entities/task.entity'

interface Props {
    tasks: Task[]
}


const TaskIndex: NextPage<Props> = ({tasks}) => {
    return (
        
        <div className="container text-center">
            <h1>Listado de Tareas</h1>

            <div className="my-2 text-left">
                <Link href="/task/form">
                    <button className="btn btn-primary btn-rounded">Crear Tarea</button>
                </Link>
                <TaskTable tasks={tasks} />
            </div>
        </div >
    )
  }
  
export async function getServerSideProps() {
    const res = await fetch(process.env.API_URL + '/api/tasks/')
    const tasks = await res.json()
    return { props: { tasks }}
}
  
  export default TaskIndex