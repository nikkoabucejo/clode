import api from "@libraries/api";
import guard from "@libraries/guard";
import { type Prisma } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  return await guard(request.method, {
    authenticated: async ({ context }) => {
      try {
        const body: Prisma.CodeCreateInput = await request.json();
        const createdCode = await api.server.create.code(body);
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
