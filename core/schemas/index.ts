import createSnippet from "./create-snippet";
import createCollection from "./create-collection";

const schemas = {
  create: {
    collection: createCollection,
    snippet: createSnippet,
  },
};

export default schemas;
