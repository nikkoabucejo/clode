import { Inter } from "next/font/google";
import "@styles/globals.css";
import Sidebar from "@components/sidebar";
import Providers from "@components/providers";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

const SpaceLayout: Layout = ({ children }) => {
  return (
    <div
      className={`${inter.className} grid min-h-screen grid-cols-[auto,1fr] gap-4 bg-black text-white`}>
      <Sidebar />
      <main>
        <Providers>{children}</Providers>
      </main>
    </div>
  );
};

export default SpaceLayout;
