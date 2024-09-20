"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./Auth";
const Provider = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Provider;
