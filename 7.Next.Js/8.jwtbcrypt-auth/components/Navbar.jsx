"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        if (data.user) setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (!res.ok) throw new Error("Failed to logout");
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">NextAuth</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="px-4 py-2 bg-blue-500 rounded">Login</Link>
            <Link href="/register" className="px-4 py-2 bg-green-500 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}