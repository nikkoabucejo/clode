import auth from "@core/libraries/auth";

export default auth(() => {
  console.log("Middleware is running");
  // Do something with the request
});
