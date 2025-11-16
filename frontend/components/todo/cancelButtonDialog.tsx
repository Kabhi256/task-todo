'use client'
import { type ButtonDialog } from "@/utils/types";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Form from "next/form";
import { deleteTodo } from "@/lib/actions/todo";
import { useActionState, useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

export default function CancelButtonDialog({ icon, todo }: ButtonDialog) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  // handle form submission
  const [state, formAction] = useActionState(deleteTodo, {
    ok: true,
    error: "",
    success: "",
  });

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });

    if (state.ok) {
      setOpen(false);
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant={"destructive"}> {icon} </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            <span>
              {" "}
              Select <strong>Confirm</strong> if you want to proceed and{" "}
              <strong>Cancel</strong>.
            </span>{" "}
            <br />
            <span>Please note that This action is not reversible</span>
          </DialogDescription>
        </DialogHeader>
                    {state.error && <p className="text-red-500 mt-4">{state.error}</p>}

        {/* Pass an ID yo the todo */}
        <Form action={handleSubmit}>
            <input hidden name="id" readOnly value={todo.id}/>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"outline"}> Cancel </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant={"destructive"}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating task...
                </>
              ) : (
                "Confirm"
              )}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
