"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className="bg-black fixed p-4 w-[15%] h-screen">
            <div className="container mx-auto">
                <h1 className="text-white text-2xl font-bold">NextAuth</h1>
                <ul className="flex h-screen flex-col justify-between">
                    <div className="one">
                        <li className="text-white mx-4 mt-5">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="text-white mx-4 mt-2">
                            <Link href="/dashboard">
                                DashBorad
                            </Link>
                        </li>
                    </div>

                    {
                        !session ? (
                            <div className="auth flex flex-col gap-3">
                                <li className="text-white mx-4 mt-2">
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="text-white mx-4 mb-[4rem]">
                                    <Link href="register">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            <>
                            <div className="items-center justify-center">
                                <p className="text-white mb-4">{session.user?.email}</p>
                                <button onClick={signOut} className="text-white p-2 px-5 mb-[4rem] bg-red-600 rounded-lg">Logout</button>
                            </div>
                            </>
                        )
                    }
 
                </ul>
            </div>
        </ nav>
    )

}

export default Navbar