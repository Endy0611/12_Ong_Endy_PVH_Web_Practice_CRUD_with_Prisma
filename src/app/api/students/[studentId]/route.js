import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import React from "react";

// get student by Id

export async function GET(_, { params }) {
  const studentId = (await params).studentId;
  const student = await prisma.studentTable.findUnique({
    where: {
      id: Number(studentId),
    },
  });

  return NextResponse.json({
    status: 200,
    message: `get student by id ${studentId} successfully`,
    payload: student,
  });
}

// update student by id

export async function PUT(request, { params }) {
  const { studentId } = await params;
  const content = await request.json();

  const data = await prisma.studentTable.update({
    where: {
      id: +studentId,
    },
    data: {
      name: content.name,
      email: content.email,
      class: content.class,
    },
  });

  return NextResponse.json({
    status: 200,
    message: `update student by id ${studentId} successfully`,
    payload: data,
  });
}

// delete student by id

export async function DELETE(_, {params}) {
  const {studentId} = await params;
  const data = await prisma.studentTable.delete({
    where : {
      id: +studentId
    }
  })

  return NextResponse.json({
    status : 200,
    message : `delete student by id ${studentId} successfully`,
    payload : data
  })
}