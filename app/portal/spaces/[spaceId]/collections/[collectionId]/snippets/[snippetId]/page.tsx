import Editor from "@components/editor";
import agent from "@libraries/agent";
import Navbar from "./_components/navbar";

type Props = {
  params: Pick<Params, "spaceId" | "collectionId" | "snippetId">;
};

const Snippet: Page<Props> = ({ params }) => {
  const { spaceId, collectionId, snippetId } = params;
  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);
  

  return (
    <section>
      <Navbar />
      <Editor snippet={decrypted} />
    </section>
  );
};

export default Snippet;
