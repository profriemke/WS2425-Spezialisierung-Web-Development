import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import { NextResponse } from "next/server"

export async function GET(request){
    const notes = await prisma.note.findMany()
    console.log(notes)
    return NextResponse.json(notes, {status: 200})
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    const note = await prisma.note.create({data:{content: data.text}})
    console.log(note)
    return NextResponse.json(note, {status: 200})

}

export async function DELETE(request){
    const data = await request.json()
    console.log(data)
    const result  = await prisma.note.delete({where: {id: data.id}})
    // und genius Code
    return NextResponse.json(result, {status: 200})
}