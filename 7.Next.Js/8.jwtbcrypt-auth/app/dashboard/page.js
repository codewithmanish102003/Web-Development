"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      const data = await res.json();
      if (!data.user) router.push("/login");
      else setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.username}!</p>}
    </div>
  );
}
