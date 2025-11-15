import { api } from "@/utils/api/serverApi";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest, { params } : { params : { id : number } } ){
    try{
        const { id } = await params
        const response = await api.get(`todos/${id}`)
        return NextResponse.json(response.data, {status: 200} )
    }catch(error){
        return NextResponse.json({ success : false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 })
    }
}

export async function POST( request: NextRequest ){
    try{
        const body = await request.json()
        const response = await api.post('todos', body)
        return NextResponse.json(response.data, { status: 201 })

    }catch(error){
        return NextResponse.json({ success : false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 })
    }
}

export async function PUT( request: NextRequest, { params } : { params: { id : number} } ){
    try{    
        const { id } = params
        const body = await request.json()
        const response = await api.put(`todos/${id}`, body)
        return NextResponse.json(response.data, { status: 200 }) 
    }catch(error){
        return NextResponse.json({ success : false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 })
    }
} 

export async function DELETE( request: NextRequest, { params } : { params: { id: number } } ){
    try{
        const { id } = params
        const response = await api.delete(`todos/${id}`)
        return NextResponse.json(response.data, { status: 204 })
    }catch(error){
        return NextResponse.json({ success : false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 })
    }
}