import createCollection from "./create-collection";
import createSnippet from "./create-snippet";
import deleteAccount from "./delete-account";
import deleteSnippet from "./delete-snippet";
import getAccounts from "./get-accounts";
import getCollection from "./get-collection";
import getCollections from "./get-collections";
import getPreferences from "./get-preferences";
import getSettings from "./get-settings";
import getSnippet from "./get-snippet";
import getSpace from "./get-space";
import getSpaces from "./get-spaces";
import getUser from "./get-user";

const api = {
  server: {
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
      snippet: createSnippet,
      collection: createCollection,
    },
    delete: {
      account: deleteAccount,
      snippet: deleteSnippet,
    },
  },
};

export default api;
