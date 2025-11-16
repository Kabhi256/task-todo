"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import Form from "next/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTodo } from "@/lib/actions/todo";
import { useActionState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function CreateTodo() {
  const router = useRouter();
  //Manage UI updates during form submission
  // Use Start Transition to wrap state update
  const [isPending, startTransition] = useTransition();
  // handle form submission
  const [state, formAction] = useActionState(createTodo, {
    ok: true,
    error: "",
    success: "",
  });

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        router.push("/todo");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.success, router]);

  return (
    <section className="p-8">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
        <h1 className="text-2xl font-bold text-primary mb-6">TODO&apos;S</h1>
        <Link href={"/todo"}>
          <Button>
            <ArrowLeft />
            Back to Todo&apos;s
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
            <Form action={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <Label htmlFor="task_name">
                  Task Name <span className="text-red-500">*</span>{" "}
                </Label>
                <Input
                  id="task_name"
                  disabled={!!state.success}
                  name="task_name"
                  placeholder="e.g. Finish Next Js project"
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>{" "}
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the task details here..."
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="status">
                  {" "}
                  Status <span className="text-red-500">*</span>{" "}
                </Label>
                <Input value={"Pending"} disabled className="cursor-auto" />
              </div>

              <Button
                type="submit"
                variant={"default"}
                className="mt-4"
                disabled={isPending || !!state.success}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating task...
                  </>
                ) : (
                  "Create Task"
                )}
              </Button>
            </Form>
            {state.success && (
              <div className="flex items-center gap-2 text-green-600 mt-4">
                <CheckCircle className="h-5 w-5" />
                <p>{state.success}</p>
              </div>
            )}
            {state.error && <p className="text-red-500 mt-4">{state.error}</p>}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Look through before creating your task
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
