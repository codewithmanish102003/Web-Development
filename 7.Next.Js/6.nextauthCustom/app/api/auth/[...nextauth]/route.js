import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/config/db";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            id: "credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
                async authorize(credentials) {
                    await connectDB();
                    const user = await User.findOne({email: credentials.email});
                    if (!user) {
                        throw new Error("User not found");
                    }
                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    if (!isValid) {
                        throw new Error("Invalid password");
                    }
                    return user;
                }
            })
        ],

        callbacks: {
            async signIn({user,account}) {
                if (account?.provider === "credentials") {
                    return true;
                }
                return false;
            }
        }
    }

    export const handler=NextAuth(authOptions);
    export {handler as GET,handler as POST}
