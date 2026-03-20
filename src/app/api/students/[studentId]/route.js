import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import React from "react";

export async function GET(_, { params }) {
  const studentId = (await params).studentId;
  const student = await prisma.studentTable.findUnique({
    where: {
      id: Number(studentId),
    },
  });

  return NextResponse.json({
    status: 200,
    message: `get student by id successfully`,
    payload: student,
  });
}

// export async function PUT(_, {params}) {
//     const {studentId} 
// }