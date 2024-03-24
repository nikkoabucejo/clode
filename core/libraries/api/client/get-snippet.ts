import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import API from "@core/types/api";

const getSnippet = async (id: ID) => {
  try {
    return await fetcher<Awaited<ReturnType<API["server"]["get"]["snippet"]>>>(
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
