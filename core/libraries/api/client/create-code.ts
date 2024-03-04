import Grab from "@libraries/grab";
import { type Prisma } from "@prisma/client";

const createCode = async (data: Prisma.CodeCreateInput) => {
  try {
    const response = await fetch("/api/codes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    throw new Error(new Grab(error).error().message);
  }
};

export default createCode;
