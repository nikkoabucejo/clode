import deleteAccount from "./delete-account";
import getAccounts from "./get-accounts";
import getPreferences from "./get-preferences";
import getSettings from "./get-settings";
import getUser from "./get-user";

/**
 * @description API object for React Server Components.
 */
const api = {
  get: {
    user: getUser,
    accounts: getAccounts,
    settings: getSettings,
    preferences: getPreferences,
  },
  delete: {
    account: deleteAccount,
  },
};

api;

export default api;
