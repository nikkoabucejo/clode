import deleteAccount from "./delete-account";
import getAccounts from "./get-accounts";
import getUser from "./get-user";

const api = {
  get: {
    user: getUser,
    accounts: getAccounts,
  },
  delete: {
    account: deleteAccount,
  },
};

export default api;
