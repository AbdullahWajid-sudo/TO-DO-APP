"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { JSX } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}
