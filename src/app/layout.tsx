import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <Sidebar/>
        <main className="pl-[300px] w-full h-full">
          <Header/>
          <div className="p-5">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
