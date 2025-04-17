import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
    
      <h1 className="text-4xl font-bold mt-10">Welcome to Next.js Auth System</h1>
      <p className="text-lg mt-4">Authenticate users using JWT and MongoDB</p>
      <div className="mt-6 flex space-x-4">
        <Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg">Login</Link>
        <Link href="/register" className="px-6 py-2 bg-green-600 text-white rounded-lg">Register</Link>
      </div>
    </div>
  );
}
