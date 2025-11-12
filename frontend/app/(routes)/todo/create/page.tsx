import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Form from "next/form"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { clientApi } from "@/utils/api/clientAPi";


async function createTodo(form_data: FormData){
    "use server"
    const task_name = form_data.get('task_name') as string
    const description = form_data.get('description') as string

    try{
        await clientApi('todos', {
            method: "POST",
            body: JSON.stringify({ task_name, description })
        })
    }catch(error){
        console.error("Error creating todo: ", error)
    }
}

export default async function CreateTodo(){

    return(
        <section className="p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <h1 className="text-2xl font-bold text-primary mb-6">TODO&apos;S</h1>
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