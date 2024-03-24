import createSnippet from "./create-snippet";
import getSnippet from "./get-snippet";

const client = {
  get: {
    snippet: getSnippet,
  },
  create: {
    snippet: createSnippet,
  },
};

export default client;
