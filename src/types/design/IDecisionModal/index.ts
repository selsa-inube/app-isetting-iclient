import { IIconAppearance } from "@inubekit/inubekit";

interface IDecisionModal {
  actionText: string;
  description: string;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
  appearance?: IIconAppearance;
  icon?: React.JSX.Element;
  isLoading?: boolean;
  withIcon?: boolean;
  withCancelButton?: boolean;
  moreDetails?: string;
  sizeIcon?: string;
}

export type { IDecisionModal };
