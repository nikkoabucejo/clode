import Editor from "@components/editor";
import agent from "@libraries/agent";
import Navbar from "./_components/heading";
import Heading from "./_components/heading";

type Props = {
  params: Pick<Params, "spaceId" | "collectionId" | "snippetId">;
};

const Snippet: Page<Props> = ({ params }) => {
  const { spaceId, collectionId, snippetId } = params;
  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  return (
    <main>
      <Heading />
      <Editor snippet={decrypted} />
    </main>
  );
};

export default Snippet;
