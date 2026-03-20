import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

// GetAllStudent

// export async function GET() {
//     const res = await prisma.studentTable.findMany();
//     console.log(res);
//     return NextResponse.json({
//         status : 200,
//         success : true,
//         message : `Get all students successfully`,
//         payload : res
//     })
// }

// SearchByName

export async function GET(res) {
  const {searchParams} = new URL(res.url)
  const name = searchParams.get("name")
  const data = await prisma.studentTable.findMany({
    where : {
      name : {
        contains : name,
        mode : "insensitive"
      }
    }
  })

  return NextResponse.json({
    status : 200,
    message: `search by studentName ${name} successfully`,
    payload : data
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