import api from "@core/libraries/api/server";
import guard from "@core/libraries/guard";
import schemas from "@core/schemas";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  return await guard(request.method, {
    authenticated: async ({ context }) => {
      try {
        const body = await request.json();

        const result = schemas.create.snippet.safeParse(body);

        if (!result.success) {
          return NextResponse.json(result.error.errors, { status: 400 });
        }

        const createdCode = await api.server.create.snippet(result.data);
        return NextResponse.json(createdCode, { status: context.status });
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
