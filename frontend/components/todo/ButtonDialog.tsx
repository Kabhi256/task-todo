"use client"

import { type ButtonDialog as ButtonDialogType } from "@/utils/types";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Textarea } from "../ui/textarea";

interface ButtonDialogProps extends ButtonDialogType {
  icon: ReactNode
}

export default function ButtonDialog({ icon, task_name, description }: ButtonDialogProps) {
    return (
        <Dialog>
        {/* This is what opens the dialog */}
        <DialogTrigger asChild>
            <Button variant="outline">{icon}</Button>
        </DialogTrigger>

        {/* This is the content that shows AFTER clicking */}
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogDescription>
                    Make changes to your todo here, click save when you&apos;re done.
                </DialogDescription>
            </DialogHeader>

            {/* Now we put the form INSIDE the dialog */}
            <form>
            <div className="grid gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="task_name">Task name</Label>
                    <Input id="task_name" name="task_name" defaultValue={task_name} />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="description">Task description</Label>
                    <Textarea id="description" name="description" defaultValue={description} />
                </div>
            </div>

            <DialogFooter className="mt-4">
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>
        </DialogContent>
        </Dialog>
    )
}
