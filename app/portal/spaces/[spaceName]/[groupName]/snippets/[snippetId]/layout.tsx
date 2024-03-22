import "@styles/globals.css";
import Providers from "@components/providers";
import Navbar from "./_components/navbar";

export const dynamic = "force-dynamic";

const SnippetLayout: Layout = ({ children }) => {
  return (
    <div className="space-y-4">
      <Navbar />
      <main>
        <Providers>{children}</Providers>
      </main>
    </div>
  );
};

export default SnippetLayout;
