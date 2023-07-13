import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

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

                const response = await fetch(`${SERVER_URL}/user/iscorrect/`, {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(credentials),
                })

                if (response.status === 200) {
                    const user = (await response.json()) as User
                    return {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        image: user.imageURL,
                        role: user.role,
                    }
                }
                return null
            },
        }),
    ],
    callbacks: {
        session: ({ session, token, user }) => {
            return {
                ...session,
                user: { ...session.user, role: token.role },
            }
        },
        async jwt({ token, user, session }) {
            if (user) {
                const currentUser = user as any
                return {
                    ...token,
                    role: currentUser.role,
                }
            }
            return token
        },
    },
    pages: {
        signIn: "auth/login",
    },
}
