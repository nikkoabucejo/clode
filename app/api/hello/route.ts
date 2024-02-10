import guard from "@libraries/guard";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { response } = await guard(request.method, {
    authenticated: async ({ session, context }) => {
      try {
        return NextResponse.json(session, { status: context.status });
      } catch (error: any) {
        console.error(error);
        return NextResponse.json(error.message, { status: 500 });
      }
    },
    unauthenticated: (context) => {
      return NextResponse.json(context, { status: context.status });
    },
  });
  if (response) return response;
};
