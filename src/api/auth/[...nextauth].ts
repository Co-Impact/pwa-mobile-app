// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// We now define and export authOptions as a constant.
// This is a common pattern that allows other parts of your app
// (like server components) to import and use it.
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ⚠️ Action Required: Replace this with your actual user authentication logic.
        // You should query a database to find a user by email and then
        // validate their password (e.g., using bcrypt.compare).

        // Example Placeholder Logic:
        // const user = await db.user.findUnique({ where: { email: credentials.email } });
        // if (user && await bcrypt.compare(credentials.password, user.hashedPassword)) {
        //   return user;
        // }

        // Mock user data for demonstration
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = token;
      }
      return session;
    },
  },
};

// Now, we create the handler using the authOptions constant.
// This single handler manages both GET and POST requests to the API route.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
