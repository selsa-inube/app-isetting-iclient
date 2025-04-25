import { ICardData } from "@ptypes/home/ICardData";

interface IPayrollAgreementUI {
  isSelected: string;
  descriptionOptions: ICardData;
  showPayrollAgreementTab: boolean;
  showRequestsInProgressTab: boolean;
  smallScreen: boolean;
  smallScreenTab: boolean;
  handleTabChange: (id: string) => void;
}

export type { IPayrollAgreementUI };
