import fetcher from "@core/utilities/fetcher";
import Grab from "@core/utilities/grab";
import schemas from "@core/schemas";
import { z } from "zod";
import api from "../server";

const createCollection = async (
  data: z.infer<typeof schemas.create.collection>,
) => {
  try {
    return await fetcher<ReturnType<typeof api.server.create.collection>>(
      `/api/collections`,
      {
        method: "POST",
        data,
      },
    );
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createCollection;
