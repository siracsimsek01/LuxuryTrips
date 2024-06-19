import {  Forum } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/app/components";

const forum = Forum({ subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "Luxury Trips",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={forum.className}>
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
