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
  },
};

export default api;
