import DetailComponent from '@/app/component/DetailComponent';
import React from 'react'

const page = async () => {

  const res = await fetch("http://localhost:3000/api/students/1")
  const student = await res.json()
  return (
    <div>
      <DetailComponent student = {student} />
    </div>
  )
}

export default page