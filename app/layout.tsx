import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SideNavbar from "./components/navbar/SideNavbar";
import ClientOnly from "./components/ClientOnly";
// import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moviebox",
  description: "A movie discovery web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
          <SideNavbar />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
}
