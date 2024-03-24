type Endpoint =
  | "/api/snippets"
  | `/api/snippets/${string}`
  | "/api/collections"
  | `/api/collections/${string}`;

const fetcher = async (endpoint: Endpoint, options: RequestInit) => {
  return await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
};

export default fetcher;
