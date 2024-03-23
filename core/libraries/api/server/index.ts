import createCode from "./create-code";
import deleteAccount from "./delete-account";
import getAccounts from "./get-accounts";
import getCollection from "./get-collection";
import getCollections from "./get-collections";
import getPreferences from "./get-preferences";
import getSettings from "./get-settings";
import getSnippet from "./get-snippet";
import getSpace from "./get-space";
import getSpaces from "./get-spaces";
import getUser from "./get-user";

const server = {
  get: {
    user: getUser,
    accounts: getAccounts,
    settings: getSettings,
    preferences: getPreferences,
    collections: getCollections,
    collection: getCollection,
    spaces: getSpaces,
    space: getSpace,
    snippet: getSnippet,
  },
  create: {
    code: createCode,
  },
  delete: {
    account: deleteAccount,
  },
};

export default server;
