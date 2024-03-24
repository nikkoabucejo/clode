import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";
import api from "..";

const createSnippet = async (data: z.infer<typeof schemas.create.snippet>) => {
  try {
    return await fetcher<ReturnType<typeof api.server.create.snippet>>(
      `/api/snippets`,
      {
        method: "POST",
        data,
      },
    );
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createSnippet;
