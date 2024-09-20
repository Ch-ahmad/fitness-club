import useCookies from "@/utils/hooks/useCookies";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import MainScreenLoader from "./MainScreenLoader";

type UserRoles = "admin" | "trainer" | "trainee";

interface IAuth {
  token: string | null;
  role: UserRoles | null;
  addCookies: (token: string, role: UserRoles) => void;
  removeCookies: () => void;
}

const AuthContext = createContext<IAuth | null>(null);

export function useAuth(): IAuth {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { getCookie, deleteCookie, setCookies } = useCookies();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<UserRoles | null>(null);
  async function addCookies(token: string, role: UserRoles) {
    await setCookies(token, role);
    setToken(token);
    setRole(role);
  }
  async function removeCookies() {
    await deleteCookie();
    setRole(null);
    setToken(null);
  }
  async function getCookieSession() {
    setIsLoading(true);
    const res = await getCookie();
    setRole(res?.session?.role);
    setToken(res?.session?.token);
    setIsLoading(false);
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getCookieSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, role]);
  return (
    <AuthContext.Provider
      value={{
        addCookies,
        removeCookies,
        token,
        role,
      }}
    >
      {isLoading ? <MainScreenLoader /> : children}
    </AuthContext.Provider>
  );
}
