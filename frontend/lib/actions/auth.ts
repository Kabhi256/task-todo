"use server"

import { api } from "@/utils/api/serverApi"
import { redirect } from "next/navigation"

export async function loginUser(formData: FormData){

        const username = formData.get('username')
        const password = formData.get('password')
        
        const response = await api.post('auth/login', { username, password })

        if (!response || response.status !== 200){
            return { error : "Invalid credentials" }
        }
        
        redirect('/todo')    
}

