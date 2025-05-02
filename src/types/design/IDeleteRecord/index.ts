import { IMessageModal } from "../IMessageModal";

interface IDeleteRecord {
  showModal: boolean;
  messageDelete: IMessageModal;
  loading: boolean;
  onToggleModal: () => void;
  onClick: () => void;
}

export type { IDeleteRecord };
