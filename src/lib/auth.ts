import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock users for static site export (in production, this would use a database)
const mockUsers = [
  {
    id: "user_1",
    name: "John Customer",
    email: "customer@example.com",
    password: "$2a$10$77rRO.QLtFOlSQYG6K9NReCGRFyGM/JLx3U5d0lzBK0TsKhW7NbfW", // 'password123'
    role: "CUSTOMER",
  },
  {
    id: "user_2",
    name: "Jane Retailer",
    email: "retailer@example.com",
    password: "$2a$10$77rRO.QLtFOlSQYG6K9NReCGRFyGM/JLx3U5d0lzBK0TsKhW7NbfW", // 'password123'
    role: "RETAILER",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // For static site export, we're mocking the authorization
        // In production, this would use a database
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = mockUsers.find(user => user.email === credentials.email);
        if (!user) {
          return null;
        }

        // In a real app, we would compare passwords with bcrypt
        // const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        // For demo purposes, just check if the password is 'password123'
        const isPasswordValid = credentials.password === 'password123';

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "CUSTOMER" | "RETAILER" | "ADMIN";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Mock auth function for static export - returns a mock session
export function auth() {
  return Promise.resolve({
    user: {
      id: "user_1",
      name: "John Customer",
      email: "customer@example.com",
      role: "CUSTOMER",
    }
  });
}
