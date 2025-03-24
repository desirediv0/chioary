"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const NextAuth = ({ children }) => {
    return <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>{children}</SessionProvider>;
};

export default NextAuth;
