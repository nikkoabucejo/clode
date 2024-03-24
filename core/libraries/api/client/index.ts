import createCollection from "./create-collection";
import createSnippet from "./create-snippet";
import getSnippet from "./get-snippet";

const api = {
  client: {
    get: {
      snippet: getSnippet,
    },
    create: {
      snippet: createSnippet,
    },
    collection: createCollection
  },
};

export default api;
