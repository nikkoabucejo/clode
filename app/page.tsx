import api from "@libraries/api";
import { SignIn, SignOut } from "@components/test";
import Code from "@components/code";
import agent from "@libraries/agent";

const Home: Page = async () => {
  const user = await api.get.user();

  const encrypted = agent.encrypt("function add(a, b) {\n  return a + b;\n}");
  const decrypted = agent.decrypt(encrypted);

  console.log({ encrypted, decrypted });

  return (
    <section className="p-16">
      <Code source={decrypted} />
      <h1>Home</h1>
      <div>
        {user ? <SignOut>{`Welcome ${user.email}`}</SignOut> : <SignIn />}
      </div>
    </section>
  );
};

export default Home;
