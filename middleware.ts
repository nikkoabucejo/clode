import auth from "@libraries/auth";

export default auth(() => {
  console.log("Middleware is working!");
});
