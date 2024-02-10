import guard from "@libraries/guard";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { response } = await guard({
    safe: async (session) => {
      try {
        return NextResponse.json(session);
      } catch (error: any) {
        console.error(error);
        return NextResponse.json(error.message, { status: 500 });
      }
    },
    unsafe: (context) => {
      return NextResponse.json(context, { status: context.status });
    },
    error: (context) => {
      return NextResponse.json(context, { status: context.status });
    },
  });

  if (response) return response;
};
