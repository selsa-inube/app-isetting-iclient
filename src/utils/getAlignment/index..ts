import { alignedColumns } from "@config/alignedColumns";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAlignment = (titleId: string, value: any): "left" | "right" => {
  if (alignedColumns.includes(titleId)) {
    return "right";
  }
  return typeof value === "string" ? "left" : "right";
};

export { getAlignment };
