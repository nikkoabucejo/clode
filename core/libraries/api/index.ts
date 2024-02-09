import { auth } from "../auth";
import getUser from "./get-user";

const api = {
  get: {
    auth: auth,
    user: getUser,
  },
};

export default api;
