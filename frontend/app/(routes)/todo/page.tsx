import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Todo } from "@/utils/types"
import { Edit, Plus, Trash } from "lucide-react"
import ButtonDialog from "@/components/todo/ButtonDialog"
import CancelButtonDialog from "@/components/todo/cancelButtonDialog"
import Link from "next/link"

function getBadgeVariant(status: string){
    switch(status.toLowerCase()){
        case "completed":
            return "completed"
        case "in progress":
            return "secondary"
        case "pending":
            return "pending"
        case "cancelled":
            return "destructive"
        default:
            return "outline"
    }
}

export default async function Todos(){
    const response = await fetch("http://localhost:3000/api/todo", {  cache: "no-store"})
    const data = await response.json()

    const todos: Todo[] = data.todos ?? []
    
    
    return (
        <section className="p-8 w-full">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h1 className="text-2xl font-bold text-primary mb-6">TODO&apos;S</h1>
                    <Link href={'/todo/create'}>
                        <Button variant={'default'}>
                            <Plus/> Create todo
                        </Button>
                    </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { todos.map((todo) => (
                    <Card key={todo.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle> {todo.task_name} </CardTitle>
                            <CardDescription>
                                {/* Created by and created at */}
                                <div className="flex gap-4 items-center justify-between">
                                    <Badge variant={getBadgeVariant(todo.status)} >{ todo.status }</Badge>
                                    {/* <p> Created by: <span className="font-medium"> {todo.created_by} </span> </p> */}
                                </div>

                            </CardDescription>
                            <CardAction>
                                <Button variant={'secondary'} size={'sm'}> {todo.created_by}   </Button>
                            </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-mute-foreground"> {todo.description} </p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between gap-4">
                                <p className="text-sm font-semibold text-muted-foreground">
                                    { new Date(todo.created_at).toLocaleDateString('en-UG', { year: 'numeric', month: 'long' , day: 'numeric'})}
                                </p>
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-end">
                                    <ButtonDialog icon={<Edit className="w-4 h-4"/>} description={todo.description} task_name={todo.task_name}/>
                                    <CancelButtonDialog icon={<Trash className="w-4 h-4"/>} todo={todo.id}/>
                                </div>

                            </CardFooter>

                    </Card>
                )) }
            </div>
        </section>
    )
}