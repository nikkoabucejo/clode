import api from "@libraries/api";
import { SignIn, SignOut } from "@components/test";
import Code from "@components/code";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";
import agent from "@libraries/agent";

const Home: Page = async () => {
  const user = await api.get.user();
  const settings = await api.get.settings();
  const preferences = await api.get.preferences();
  const collections = await api.get.collections();
  const memberships = await api.get.memberships();

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
