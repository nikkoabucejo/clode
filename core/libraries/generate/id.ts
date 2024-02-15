import { createId } from "@paralleldrive/cuid2";

const id = (type: "cuid"): ID => {
  switch (type) {
    case "cuid": {
      const cuid = createId();
      return cuid;
    }
    default:
      throw new Error("Invalid ID type");
  }
};

export default id;
