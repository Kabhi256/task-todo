import { type Todo } from "@/utils/types"

export default async function Todo({ params } : { params : Promise<{ id: number }>}){
    
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api/todo/${encodeURIComponent(id)}`, { cache: 'no-cache' })
    const data: Todo = await response.json()

    const todo = data?.todo
    console.log(data)
    return (
        <section className="p-8">
            Todo id {todo.id} <br />
            Tod task name {todo.task_name} <br />
            todo 


        </section>
    )
}