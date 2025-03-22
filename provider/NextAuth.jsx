"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const NextAuth = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuth;
