import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between items-center text-yellow-500 bg-zinc-600 p-5">
        <div>Logo</div>
        <ul className="flex justify-around space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/users">Users</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
