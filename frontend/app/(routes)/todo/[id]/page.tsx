export default async function Todo({ params } : { params : Promise<{ id: number }>}){
    
    const { id } = await params
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, { cache: 'no-cache' })
    const todo = await response.json()

    return (
        <section className="p-8">
            Todo {todo.title}
        </section>
    )
}