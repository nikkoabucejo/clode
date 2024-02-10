import auth from "@libraries/auth";

export default auth((request) => {
  console.log("HELLO");
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/api/hello"],
};
