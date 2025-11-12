import { type ButtonDialog } from "@/utils/types";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { X } from "lucide-react";

export default function CancelButtonDialog({ icon }: ButtonDialog){
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

                <form >
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={'outline'}> Cancel </Button>
                        </DialogClose>
                        <Button type="submit">Confirm</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        
        </Dialog>
    )
}