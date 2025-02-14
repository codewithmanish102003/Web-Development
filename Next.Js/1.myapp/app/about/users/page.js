"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center'>
      Users Dashboard
      <button onClick={() => router.push("/about/users/projects")} className='bg-red-500 rounded-lg p-2'>Go To Projects</button>
    </div>
  )
}

export default page
