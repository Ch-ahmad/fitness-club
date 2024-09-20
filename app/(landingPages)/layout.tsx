import type { ReactNode } from "react";
import LandingHeader from "./components/Header";

const LandingRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
};

export default LandingRootLayout;
