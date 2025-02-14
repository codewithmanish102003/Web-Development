"use client"
import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>Info : {params.user}</h1>
    </div>
  )
}

export default page
