import { type ButtonDialog } from "@/utils/types";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Form from "next/form";
import { deleteTodo } from "@/lib/actions/todo";

export default function CancelButtonDialog({ icon, todo }: ButtonDialog){
    console.log(todo.task_name)
    // const deleteId = deleteTodo.bind(null, todo.id)
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'destructive'}> {icon} </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                            <span> Select <strong>Confirm</strong> if you want to proceed and <strong>Cancel</strong>.</span> <br />
                            <span>Please note that This action is not reversible</span> 

                    </DialogDescription>
                </DialogHeader>

                {/* Pass an ID yo the todo */}
                <Form action={deleteTodo}>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={'outline'}> Cancel </Button>
                        </DialogClose>
                        <Button type="submit" variant={'destructive'}>Confirm</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        
        </Dialog>
    )
}