import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <AuthForm type="register" />
    </div>
  );
}
