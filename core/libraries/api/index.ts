import getAccounts from "./get-accounts";
import getUser from "./get-user";

const api = {
  get: {
    user: getUser,
    accounts: getAccounts,
  },
};

export default api;
