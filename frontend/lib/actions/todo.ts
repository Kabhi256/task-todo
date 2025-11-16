"use server";

import { api } from "@/utils/api/serverApi";
import { clientApi } from "@/utils/api/clientAPi";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface FormState {
  ok: boolean;
  error: string;
  success: string;
}

export async function createTodo(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const task_name = formData.get("task_name") as string;
  const description = formData.get("description") as string;

  if (!task_name || !description) {
    return {
      ok: false,
      error: "Task name and description are required.",
      success: "",
    };
  }

  try {
    await api.post("todos/", { task_name, description });
    // redirect('/todo')
    return {
      ok: false,
      error: "",
      success: "Task Created successfully",
    };
  } catch (err) {
    console.log("🚀 ~ createTodo ~ err:", err);
    return {
      ok: false,
      error: "Failed to create todo. Please try again",
      success: "",
    };
  }
}

export async function updateTodo(id: number, formData: FormData) {
  const task_name = formData.get("task_name") as string;
  const description = formData.get("description") as string;

  await api.put(`todos/${id}/`, { task_name, description });
  redirect("/todo");
}

export async function deleteTodo(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const id = formData.get("id") as string;
  if (!id) {
    return {
      ok: false,
      error: "ID is required to delete todo.",
      success: "",
    };
  }
  try {
    await clientApi(`todos/${id}/`,{
        method: "DELETE"
    });
    revalidatePath('/todo')
    return {
      ok: false,
      error: "",
      success: "Task Deleted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      error: "Failed to delete todo. Please try again",
      success: "",
    };
  }
}
