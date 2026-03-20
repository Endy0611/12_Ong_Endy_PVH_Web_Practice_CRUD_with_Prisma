import React from 'react'
import CardComponent from '../component/CardComponent';

const page = async () => {
  const res = await fetch("http://localhost:3000/api/students")
  const data = await res.json();
  console.log(data.payload);

  return (
    <div>
      {data.payload.map((student) => (
        <CardComponent key={student.id} student={student}/>
      ))}
    </div>
  )
}

export default page