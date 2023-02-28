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
			credentials: { },
			authorize: function (credentials: Record<never, string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
				throw new Error("Function not implemented.");
			}
		})
	]
}

export default NextAuth(authOptions)
