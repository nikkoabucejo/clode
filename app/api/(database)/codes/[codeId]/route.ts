import api from "@libraries/api";
import guard from "@libraries/guard";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { codeId: string } },
) => {
  return await guard(request.method, {
    authenticated: async ({ context }) => {
      try {
        const { codeId } = params;
        const code = await api.server.get.code(codeId);
        return NextResponse.json(code, { status: context.status });
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
