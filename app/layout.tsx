import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import NextUIProvider from "@libraries/providers/nextui";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Clode",
  description: "Clode - Store your codes",
};

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
};

export default Root;
