import { RequestStatus } from "@enum/requestStatus";
import { IMessageModal } from "../IMessageModal";

interface ICancelRecord {
  showModal: boolean;
  messageCancel: IMessageModal;
  loading: boolean;
  status: RequestStatus;
  onToggleModal: () => void;
  onClick: () => void;
}

export type { ICancelRecord };
