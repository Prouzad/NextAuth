import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},

	providers: [
	],

	pages: {
		signIn: '/auth/signin',
		error: '/auth/signin',
	}
}

export default NextAuth(authOptions)
