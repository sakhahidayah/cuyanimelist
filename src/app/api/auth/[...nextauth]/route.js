import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH,
};

const handleAuth = NextAuth(authOption);

export { handleAuth as GET, handleAuth as POST };
