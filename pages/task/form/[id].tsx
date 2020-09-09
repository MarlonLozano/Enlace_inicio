// El nombramiento del archivo [id].tsx corresponde a una vista dinamica o Dinamic Route (https://nextjs.org/docs/routing/dynamic-routes)
// Por ejemplo: http://.../task/form/1 , http://.../task/form/2 ...

import { useRouter } from 'next/router'
import { NextPage } from 'next'

const TaskPage: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <p>Task: {id}</p>
    )
}

export default TaskPage