import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Nicole Liang | Portfolio",
  description: "Minimalist developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Added flex-row-reverse to push Sidebar to the right */}
      <body className="antialiased flex flex-row-reverse">
        <Sidebar />
        
        {/* 2. Changed ml-64 to mr-64 for right-side spacing */}
        <main className="mr-64 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}