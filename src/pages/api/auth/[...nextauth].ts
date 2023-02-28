import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},

	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			authorize(credentials, req) {
				const { email, password } = credentials as { email: string, password: string }

				if (email !== 'prouzad' && password === '1234') {
					return null
				}

				return { id: '1234', name: 'Abdulla', email: 'example@mail.com' }
			}
		})
	]
}

export default NextAuth(authOptions)
