import api from "@libraries/api";
import { signIn, signOut } from "@libraries/auth";

export const LinkedSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}>
      <button type="submit">Link account</button>
    </form>
  );
};

export const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}>
      <p>You are not logged in</p>
      <button type="submit">Sign in</button>
    </form>
  );
};

export const SignOut = async ({ children }: { children: Children }) => {
  const accounts = await api.get.accounts();

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <div>{children}</div>
        <button type="submit">Sign out</button>
      </form>
      <LinkedSignIn />
      <ul>
        {accounts?.map((account) => (
          <li key={account.id}>{account.provider}</li>
        ))}
      </ul>
    </div>
  );
};
