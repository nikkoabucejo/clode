import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import API from "@core/types/api";

const deleteSnippet = async (id: ID) => {
  try {
    return await fetcher<ReturnType<API["server"]["delete"]["snippet"]>>(
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
