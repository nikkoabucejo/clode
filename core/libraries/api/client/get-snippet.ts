import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import api from "../server";

const getSnippet = async (id: ID) => {
  try {
    return await fetcher<Awaited<ReturnType<typeof api.server.get.snippet>>>(
      `/api/snippets/${id}`,
      {
        method: "GET",
      },
    );
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default getSnippet;
