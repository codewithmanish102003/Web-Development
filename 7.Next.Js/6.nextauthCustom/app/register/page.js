"use client"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
    const router = useRouter()
    const { data: session, status: sessionStauts } = useSession()

    useEffect(() => {
        if (sessionStauts === 'authenticated') {
            router.push("/dashboard")
        }
    }, [sessionStauts, router])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const confirmPassword = e.target[3].value

        if (password !== confirmPassword) {
            console.log("clicked password")
            toast.error("Passwords do not match")
            return
        }
    
        if (!username ||!email ||!password ||!confirmPassword) {
            toast.error("All fields are required")
            return
        }
        try {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password, confirmPassword }),
        })
        const { error } = await res.json()
        if (res.status === 400) {
            toast.error(error)
        }else if (res.status === 200) {
            toast.success("Registration successful")
            router.push(`/login`)
        }
        }
        catch (error) {
            toast.error("An error occurred")
        }
    }

    return (sessionStauts !== "authenticated" ? (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold">Username</label>
                    <input type="text" id="username" name="username" className="w-full p-2 border border-gray-600 rounded "required />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold">Email</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-gray-600 rounded "required />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 border border-gray-600 rounded " required />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-bold">Confirm Password</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" className="w-full p-2 border border-gray-600 rounded " required />
                </div>
                <div>
                    <button className="bg-blue-500 text-white w-full p-2 rounded">Register</button>
                </div>

                <div className="mt-4 text-center">
                    <p>Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
                </div>
            </form>
            </div>
            <ToastContainer />
        </div>
    ) : null)
}

export default Register