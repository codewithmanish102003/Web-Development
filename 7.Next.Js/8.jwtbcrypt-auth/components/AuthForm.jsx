"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const url = type === "register" ? "/api/auth/register" : "/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) return setError(data.message);
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl text-black  font-bold text-center">{type === "register" ? "Register" : "Login"}</h2>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        {type === "register" && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2 text-black"
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2 text-black"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2 text-black"
          required
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-4">{type === "register" ? "Register" : "Login"}</button>
      </form>
    </div>
  );
}
