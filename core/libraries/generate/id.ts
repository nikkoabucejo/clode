import { createId } from "@paralleldrive/cuid2";

const generateId = (type: "cuid") => {
  switch (type) {
    case "cuid":
      const cuid = createId();
      return cuid;
    default:
      throw new Error("Invalid ID type");
  }
};

export default generateId;
