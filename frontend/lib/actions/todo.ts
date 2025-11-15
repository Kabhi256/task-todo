"use server"

import { api } from '@/utils/api/serverApi'
import { redirect } from 'next/navigation'

export async function createTodo(formData: FormData){

    const task_name = formData.get('task_name') as string
    const description = formData.get('description') as string

    await api.post('todos/', { task_name, description })
    redirect('/todo')
}

export async function updateTodo(id: number, formData: FormData){

    const task_name = formData.get('task_name') as string
    const description = formData.get('description') as string
    
    await api.put(`todos/${id}/`, { task_name, description })
    redirect('/todo')
    
}

export async function deleteTodo(id: number){
    try{
        console.log(`Delete todo ${id}`)
        // await api.delete(`todos/${id}`)
        // redirect('/todo')
    }catch(error){
        console.error(error)
    }
}