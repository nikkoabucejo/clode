import Editor from "@components/editor";
import agent from "@libraries/agent";
import Heading from "./_components/heading";

const Snippet: Page = () => {
  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  return (
    <main className="max-h-full space-y-8 overflow-y-auto p-8">
      <Heading />
      <Editor snippet={decrypted} />
    </main>
  );
};

export default Snippet;
