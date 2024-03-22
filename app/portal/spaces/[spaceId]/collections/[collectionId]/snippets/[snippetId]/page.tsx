import Editor from "@components/editor";
import agent from "@libraries/agent";
import Heading from "./_components/heading";

const Snippet: Page = () => {
  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  return (
    <main className="max-h-full space-y-8 overflow-y-auto p-8">
      <Heading />
      <div className="space-y-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem
          doloribus similique ea excepturi, harum cum sapiente corporis error
          fugit aut doloremque fuga enim vel, iusto explicabo esse illo amet.
          Deleniti corrupti laborum similique earum modi minus a iure eaque
          architecto aliquam expedita ipsam cumque qui nemo soluta eligendi,
          molestias magnam fuga labore sunt, optio quaerat. Minus sit numquam
          accusantium. Vero, maiores dolores tempore dolore quasi amet quaerat
          harum ut consectetur repellat, mollitia libero distinctio, at
          assumenda ad expedita. Laborum voluptatum quis quos incidunt ullam
          molestias optio aperiam dolorem a!
        </p>
        <Editor snippet={decrypted} />
      </div>
    </main>
  );
};

export default Snippet;
