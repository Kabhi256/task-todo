import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTodo } from "@/lib/actions/todo";
import { ArrowLeft } from "lucide-react";
import Form from "next/form";
import Link from "next/link";

export default async function EditTodo({ params } : { params:  { id: string }  }){
    const { id } = params
    const idNumber = Number(id)
    const response = await fetch(`http://localhost:3000/api/todo/${idNumber}`)
    const data = await response.json()
    const todo = data.todo

    console.log('========================')
    console.log(`TODO: ${todo}`)
    return (
        <section className="p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h1 className="text-2xl font-bold text-primary mb-6">Edit {id} TODO&apos;S</h1>
                <Link href={'/todo'}>
                    <Button>
                        <ArrowLeft />Back to Todo&apos;s
                    </Button>
                </Link>
            </div>
            <div className="">
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle>Create a new Task</CardTitle>
                        <CardDescription>
                            Fill in the details below to add a new task to you todo list
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <Form action={createTodo} className="space-y-4">
                            <div className="space-y-4">
                                <Label htmlFor="task_name">Task Name <span className="text-red-500">*</span> </Label>
                                <Input id="task_name" name="task_name" placeholder="e.g. Finish Next Js project"/>
                            </div>

                            <div className="space-y-4">
                                <Label htmlFor="description">Description <span className="text-red-500">*</span> </Label>
                                <Textarea id="description" name="description" placeholder="Describe the task details here..."/>
                            </div>
                            <div className="space-y-4">
                                <Label htmlFor="status"> Status <span className="text-red-500">*</span> </Label>
                                <Input value={'Pending'} disabled className="cursor-auto"/>
                            </div>

                            <Button type="submit" variant={'default'} className="mt-4">Create Task</Button>

                        </Form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground">Look through before creating your task</p>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}