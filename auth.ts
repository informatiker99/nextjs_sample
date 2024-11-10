import NextAuth from "next-auth";

export const { handlers, auth } = NextAuth({
  providers: [],
  callbacks: {
    authorized: ({ req, token }): boolean => {
      console.log("in authorized");
      return true;
    },
  },
});
