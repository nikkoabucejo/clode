import fetcher from "@core/libraries/fetcher";
import Grab from "@core/libraries/grab";
import schemas from "@core/schemas";
import { z } from "zod";

type Data = z.infer<typeof schemas.create.collection>;

const createCollection = async (data: Data) => {
  try {
    const response = await fetcher(`/api/collections`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createCollection;
