"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
    const router = useRouter()
    const { data: session, status: sessionStatus } = useSession()

    useEffect(() => {
        if (sessionStatus === 'authenticated') {
            router.push("/dashboard")
        }
    }, [sessionStatus, router])

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const email = e.target[0].value
        const password = e.target[1].value

        if (!email || !password) {
            toast.error("Please fill both input fields")
            return
        }

        const res = await signIn("credentials", { redirect: false, email, password })

        if (res?.error) {
            toast.error("Invalid credentials")
        } else {
            toast.success("Login successful")
            if (res?.url) {
                router.replace('/dashboard')
            }
        }
    }

    return sessionStatus !== 'authenticated' && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text font-bold mb-4">Login</h1>
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-600 rounded "  />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border border-gray-600 rounded "  />
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white w-full p-2 rounded">Submit</button>
                    </div>
                    <div className="mt-4 text-center">
                        <p>Don't have an account? <Link href="/register" className="text-blue-500">Register</Link></p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login