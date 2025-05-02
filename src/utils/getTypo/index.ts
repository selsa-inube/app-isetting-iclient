import { ISize } from "@ptypes/design/ISize";

const getTypo = (size: ISize) => {
  return size === "compact" ? "small" : "medium";
};

export { getTypo };
