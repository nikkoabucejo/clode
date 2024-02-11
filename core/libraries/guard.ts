import auth from "@libraries/auth";
import { Session } from "next-auth";

type Context = { message: string; status: number };

type Functions<TAuthenticatedResponse, TUnauthenticatedResponse> = {
  authenticated: ({
    session,
    context,
  }: {
    session: Session;
    context: Context;
  }) => TAuthenticatedResponse;
  unauthenticated: (context: Context) => TUnauthenticatedResponse;
};

/**
 * @description Secure the API route for use exclusively by authenticated users.
 */
const guard = async <TAuthenticatedResponse, TUnauthenticatedResponse>(
  method: string,
  {
    authenticated,
    unauthenticated,
  }: Functions<TAuthenticatedResponse, TUnauthenticatedResponse>,
) => {
  const session = await auth();

  if (!session) {
    return unauthenticated({
      message: "Unauthorize",
      status: 401,
    });
  }

  const context = {
    message: "Success",
    status: 200,
  };

  switch (method) {
    case "GET":
    case "DELETE":
      context.status = 200;
      break;
    case "POST":
    case "PATCH":
    case "PUT":
      context.status = 201;
      break;
    default:
      console.log(method, "Method is not an option");
      context.status = 200;
  }

  return authenticated({ session, context });
};

export default guard;
