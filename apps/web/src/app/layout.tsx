import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Z-Maths",
  description: "welcome to z-maths, a place where you can learn and practice mathematics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
