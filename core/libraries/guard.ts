import auth from "@libraries/auth";
import { Session } from "next-auth";

type Context = { message: string; status: 500 };

type Functions<TSafeResponse, TUnsafeResponse, TErrorResponse> = {
  safe: (session: Session) => TSafeResponse;
  unsafe: (context: Context) => TUnsafeResponse;
  error: (context: Context) => TErrorResponse;
};

const guard = async <TSafeResponse, TUnsafeResponse, TErrorResponse>({
  safe,
  unsafe,
  error,
}: Functions<TSafeResponse, TUnsafeResponse, TErrorResponse>) => {
  try {
    const session = await auth();

    if (!session)
      return {
        response: unsafe({
          message: "Unauthorize",
          status: 500,
        }),
      };

    return { response: safe(session) };
  } catch (e: any) {
    console.error(e);
    return {
      response: error({
        message: e.message,
        status: 500,
      }),
    };
  }
};

export default guard;
