import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post("http://localhost:3005/api/v1/student/signin", {
            email: credentials?.email,
            password: credentials?.password,
          }, { withCredentials: true })

          const data = res.data

          if (res.status === 200 && data?.token) {
            return {
              id: data.userInfo.id,
              name: data.userInfo.name,
              token: data.token,
            }
          }

          return null
        } catch (err) {
          console.error("Login failed", err)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }:{token:any, user:any}) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.accessToken = user.token
      }
      return token
    },
    async session({ session, token }:{session:any, token: any}) {
      session.user.id = token.id
      session.user.name = token.name
      session.accessToken = token.accessToken
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }