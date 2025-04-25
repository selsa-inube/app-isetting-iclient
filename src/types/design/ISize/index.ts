const sizes = ["wide", "compact"] as const;
type ISize = (typeof sizes)[number];

export type { ISize };
export { sizes };
