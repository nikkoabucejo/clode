import auth from "@libraries/auth";

export default auth((request) => {
  console.log(request.nextUrl.origin);
  console.log("Middleware is working!");
});
