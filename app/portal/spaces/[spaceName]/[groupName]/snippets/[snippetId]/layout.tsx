import "@styles/globals.css";
import Providers from "@components/providers";

export const dynamic = "force-dynamic";

const SnippetLayout: Layout = ({ children }) => {
  return (
    <div>
      <nav className="border py-3">navbar</nav>
      <main>
        <Providers>{children}</Providers>
      </main>
    </div>
  );
};

export default SnippetLayout;
