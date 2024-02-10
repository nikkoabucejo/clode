import auth from "@libraries/auth";

export default auth((request) => {});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/api/hello"],
};
