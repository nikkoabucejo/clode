import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Clode",
  description: "Clode - Store your codes",
};

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid min-h-screen grid-cols-[auto,1fr] gap-4 bg-black text-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Root;
