import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import api from "..";

const deleteSnippet = async (id: ID) => {
  try {
    return await fetcher<ReturnType<typeof api.server.delete.snippet>>(
      `/api/snippets/${id}`,
      {
        method: "DELETE",
      },
    );
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default deleteSnippet;
