import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Created by Nick Talledo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <style id={inter.styleId}>{inter.fontStylesheet}</style>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
