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
    message: `update student by ${studentId} successfully`,
    payload: data,
  });
}

export async function DELETE(_, {params}) {
  const {studentId} = await params;
  const data = await prisma.studentTable.delete({
    where : {
      id: +studentId
    }
  })

  return NextResponse.json({
    status : 200,
    message : `delete student by ${studentId} successfully`,
    payload : data
  })
}