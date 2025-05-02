import { FormikValues } from "formik";
import { IServerDomain } from "@ptypes/IServerDomain";

interface IAddCycleModal {
  actionText: string;
  comparisonData: boolean;
  formik: FormikValues;
  isLoading: boolean;
  portalId: string;
  title: string;
  numberDaysUntilCutOptions: IServerDomain[];
  onClick: () => void;
  onCloseModal: () => void;
  onChange: (name: string, value: string) => void;
  onToggleInfoModal?: () => void;
  periodicityOptions?: IServerDomain[];
  paydayOptions?: IServerDomain[];
  typePaymentOptions?: IServerDomain[];
  monthOptions?: IServerDomain[];
  dayOptions?: IServerDomain[];
  isOrdinary?: boolean;
  isExtraordinary?: boolean;
}

export type { IAddCycleModal };
