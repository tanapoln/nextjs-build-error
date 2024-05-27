import nextAuth, { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
    secret: 'a-secret',
    providers: []
}

export const { handlers, auth, signIn, signOut } = nextAuth(authConfig);
