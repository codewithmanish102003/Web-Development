import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard =async ()=>{
    const session = await getServerSession();

    if (!session?.user?.email) {
        redirect("/");
        return null;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <p>Welcome, {session.user.email}</p>
        </div>
    )
}

export default Dashboard;