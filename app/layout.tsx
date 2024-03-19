import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Providers from "../core/components/providers";
import Sidebar from "@components/sidebar";

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
        <Sidebar />
        <div>
          <nav className="border py-3">navbar</nav>
          <main>
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
};

export default Root;
