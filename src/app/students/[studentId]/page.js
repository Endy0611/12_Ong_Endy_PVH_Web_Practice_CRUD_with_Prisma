import DetailComponent from '@/app/component/DetailComponent';
import React from 'react'

const page = async ({params}) => {
  const {studentId} = await params
  const res = await fetch(`http://localhost:3000/api/students/${studentId}`)
  const data = await res.json()
  const student = data.payload

  return (
    <div>
      <DetailComponent student = {student} />
    </div>
  )
}

export default page