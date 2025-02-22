"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center h-screen">
      {session ? (
        <div className="text-center">
          <p>Welcome, {session.user.name}</p>
          <img src={session.user.image} alt="Profile" className="rounded-full w-12 h-12 mx-auto" />
          <button onClick={() => signOut()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
