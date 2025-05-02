const status = ["valid", "invalid", "pending"] as const;
type IStatus = (typeof status)[number];

export type { IStatus };
export { status };
