import Editor from "@components/editor";
import agent from "@libraries/agent";
import Heading from "./_components/heading";
import api from "@libraries/api";

type Props = {
  params: Params;
};

const Snippet: Page<Props> = async ({ params }) => {
  const { spaceId, collectionId, snippetId } = params;
  const space = await api.server.get.space(spaceId);
  const collection = await api.server.get.collection(collectionId);
  // const snippet = await api.server.get.snippet(snippetId);

  const encrypted = agent.encrypt(`import Editor from "@components/editor";
import agent from "@libraries/agent";
import Heading from "./_components/heading";
import api from "@libraries/api";

type Props = {
  params: Params;
};

const Snippet: Page<Props> = async ({ params }) => {
  const { spaceId, collectionId, snippetId } = params;
  const space = await api.server.get.space(spaceId);
  const collection = await api.server.get.collection(collectionId);
  // const snippet = await api.server.get.snippet(snippetId);

  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  return (
    <main className="max-h-full space-y-8 overflow-y-auto p-8">
      <Heading space={space} collection={collection} />
      <div className="space-y-8">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          molestias optio aperiam dolorem a!
        </p>
        <Editor snippet={decrypted} />
      </div>
    </main>
  );
};

export default Snippet;`);

  const decrypted = agent.decrypt(encrypted);

  return (
    <main className="max-h-full space-y-8 overflow-y-auto p-8">
      <Heading space={space} collection={collection} />
      <Editor snippet={{ code: decrypted } as any} />
    </main>
  );
};

export default Snippet;
