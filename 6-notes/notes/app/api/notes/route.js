import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import { NextResponse } from "next/server"

export async function GET(request){
    const notes = await prisma.note.findMany()
    console.log(notes)
    return NextResponse.json(notes, {status: 200})
}