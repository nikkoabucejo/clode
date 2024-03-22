import "@styles/globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@app/portal/spaces/[spaceId]/collections/[collectionId]/snippets/[snippetId]/_components/sidebar";
import api from "@libraries/api";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

type Props = {
  params: Pick<Params, "spaceId" | "collectionId" | "snippetId">;
};

const Space: Layout<Props> = async ({ children, params }) => {
  const { spaceId } = params;

  return (
    <div
      className={`${inter.className} grid min-h-screen grid-cols-[auto,1fr] bg-black text-white`}>
      <Sidebar spaceId={spaceId} />
      <div className="bg-panel-primary p-8">{children}</div>
    </div>
  );
};

export default Space;
