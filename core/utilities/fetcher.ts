import Grab from "./grab";

type Endpoint =
  | "/api/snippets"
  | `/api/snippets/${string}`
  | "/api/collections"
  | `/api/collections/${string}`;

const fetcher = async <TReturnType extends unknown>(
  endpoint: Endpoint,
  {
    method,
    data,
  }: { method: "GET" | "POST" | "PUT" | "DELETE"; data?: unknown },
): Promise<TReturnType> => {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    return response.json();
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default fetcher;
