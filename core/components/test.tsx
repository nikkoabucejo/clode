import api from "@libraries/api";
import { signIn, signOut } from "@libraries/auth";
import { Button } from "@nextui-org/react";

export const LinkedSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}>
      <Button color="secondary" type="submit">
        Link account
      </Button>
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
      <Button color="primary" type="submit">
        Sign in
      </Button>
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
        <Button color="danger" type="submit">
          Sign out
        </Button>
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
