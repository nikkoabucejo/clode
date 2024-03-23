import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@core/styles/globals.css";
import Toaster from "@core/components/toaster";
import Providers from "@core/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Clode",
  description: "Clode - Store your codes",
};

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Providers>
          <Toaster />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default Root;
