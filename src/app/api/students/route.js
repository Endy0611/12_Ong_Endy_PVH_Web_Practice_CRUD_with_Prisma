import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";


export async function GET() {
    const res = await prisma.studentTable.findMany();
    console.log(res);
    return NextResponse.json({
        status : 200,
        success : true,
        message : `Get all students successfully`,
        payload : res
    })
}

export async function POST(request) {
    const body = await request.json();
    const addData = await prisma.studentTable.create({

        data : {
            name : body.name,
            email : body.email,
            class : body.class
        }
    })

    return NextResponse.json({
        status : 201,
        message: `create student successfully`,
        payload: addData
    })

}