import Editor from "@core/components/editor";
import Heading from "./_components/heading";
import api from "@core/libraries/api/server";

type Props = {
  params: Params;
};

const Snippet: Page<Props> = async ({ params }) => {
  const { spaceId, collectionId, snippetId } = params;
  const space = await api.server.get.space(spaceId);
  const collection = await api.server.get.collection(collectionId);
  const snippet = await api.server.get.snippet(snippetId);

  return (
    <main className="max-h-full space-y-8 overflow-y-auto p-8">
      <Heading space={space} collection={collection} snippet={snippet} />
      <Editor snippet={snippet} />
    </main>
  );
};

export default Snippet;
