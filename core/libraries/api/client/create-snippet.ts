import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";

type Data = z.infer<typeof schemas.create.snippet>;

const createSnippet = async (data: Data) => {
  try {
    const response = await fetcher(`/api/snippets`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createSnippet;
