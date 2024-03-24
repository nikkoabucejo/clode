import "@core/styles/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./collections/[collectionId]/snippets/[snippetId]/_components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

type Props = {
  params: Params;
};

const Space: Layout<Props> = async ({ children, params }) => {
  const { spaceId } = params;

  return (
    <div
      className={`${inter.className} grid min-h-screen grid-cols-[auto,1fr] bg-black text-white`}>
      <Sidebar spaceId={spaceId} />
      <div className="h-screen overflow-hidden bg-panel-primary">
        {children}
      </div>
    </div>
  );
};

export default Space;
