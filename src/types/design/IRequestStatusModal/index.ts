import { ComponentAppearance } from "@enum/appearances";

interface IRequestStatusModal {
  portalId: string;
  title: string;
  actionText: string;
  description: string;
  isLoading: boolean;
  requestNumber: string;
  onClick: () => void;
  onCloseModal: () => void;
  appearance?: ComponentAppearance;
}

export type { IRequestStatusModal };
