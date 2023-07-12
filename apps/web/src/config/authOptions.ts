import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "User role",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials) return null

                const response = await fetch(
                    "http://localhost:8000/user/email/" + credentials.email
                )
                const user = (await response.json()) as User[]
                if (user.length === 0) return null

                const currentUser = user[0]
                return {
                    id: currentUser._id,
                    email: currentUser.email,
                    name: currentUser.name,
                    image: currentUser.imageURL,
                }
            },
        }),
    ],
    callbacks: {
        session: ({ session }) => {
            return {
                ...session,
                user: session.user,
            }
        },
        async jwt({ token, user }) {
            if (user)
                return {
                    ...token,
                }
            return token
        },
    },
    pages: {
        signIn: "auth/login",
    },
}
