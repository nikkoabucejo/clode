import api from "@core/libraries/api/server";
import guard from "@core/libraries/guard";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Params },
) => {
  return await guard(request.method, {
    authenticated: async ({ context }) => {
      try {
        const { snippetId } = params;
        const snippet = await api.server.get.snippet(snippetId);
        return NextResponse.json(snippet, { status: context.status });
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

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Params },
) => {
  return await guard(request.method, {
    authenticated: async ({ context }) => {
      try {
        const { snippetId } = params;
        const deletedSnippet = await api.server.delete.snippet(snippetId);
        return NextResponse.json(deletedSnippet, { status: context.status });
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
