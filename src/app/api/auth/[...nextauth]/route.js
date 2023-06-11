import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// https://authjs.dev/getting-started/oauth-tutorial

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})

export { handler as GET, handler as POST }