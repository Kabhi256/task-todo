import { ReactNode } from "react"

export interface Todo {
    id: number
    task_name: string
    description: string
    status: string
    created_at?: Date
    created_by?: string
}

export interface ButtonDialog{
    icon?: ReactNode,
    task_name?: string,
    description?: string
}