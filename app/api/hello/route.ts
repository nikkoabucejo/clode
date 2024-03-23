import guard from "@core/libraries/guard";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  return await guard(request.method, {
    authenticated: async ({ session, context }) => {
      try {
        return NextResponse.json(session, { status: context.status });
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          return NextResponse.json(error.message, { status: 500 });
        }
      }
    },
    unauthenticated: (context) => {
      return NextResponse.json(context, { status: context.status });
    },
  });
};
