import { ITextSize } from "@inubekit/inubekit";

interface ITitle {
  title: string;
  description?: string;
  icon?: JSX.Element;
  navigatePage?: string;
  sizeTitle?: ITextSize;
  onClick?: () => void;
}

export type { ITitle };
