    
import type { ReactNode } from "react";
import "../globals.css";
import Navbar from "../components/ui/Navbar";

export default function LandingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>
  <Navbar />
  {children}
  </>;
}
