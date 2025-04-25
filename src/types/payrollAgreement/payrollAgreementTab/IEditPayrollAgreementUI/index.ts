import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../forms/IGeneralInformationPayroll";
import { IEditPayrollAgreementForms } from "../forms/IEditPayrollAgreementForms";
import { IServerDomain } from "@ptypes/IServerDomain";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IRequestSteps } from "@ptypes/design/IRequestSteps";
import { IOrdinaryCyclesEntry } from "../forms/IOrdinaryCyclesEntry";
import { IExtraordinaryCyclesEntry } from "../forms/IExtraordinaryCyclesEntry";
import { IEditPayrollTabsConfig } from "../IEditPayrollTabsConfig";

interface IEditPayrollAgreementUI {
  isSelected: string;
  onTabChange: (id: string) => void;
  formReferences: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  formValues: IEditPayrollAgreementForms;
  initialValues: IEditPayrollAgreementForms;
  smallScreen: boolean;
  sourcesOfIncomeValues: IServerDomain[];
  companyAgreement: string;
  showGoBackModal: boolean;
  showRequestProcessModal: boolean;
  savePayrollAgreement: ISaveDataResponse;
  requestSteps: IRequestSteps[];
  showEditedModal: boolean;
  loadingSendData: boolean;
  typeRegularPayroll: boolean;
  regularPaymentCycles: IOrdinaryCyclesEntry[];
  extraordinaryPayment: IExtraordinaryCyclesEntry[];
  filteredTabsConfig: IEditPayrollTabsConfig;
  showDeletedAlertModal: boolean;
  typePayroll: string;
  showRegularPaymentCyclesForm: boolean;
  showExtraPaymentCyclesForm: boolean;
  showGeneralInfPayrollForm: boolean;
  showRequestStatus: string | false | undefined;
  setExtraordinaryPayment: React.Dispatch<
    React.SetStateAction<IExtraordinaryCyclesEntry[]>
  >;
  setRegularPaymentCycles: React.Dispatch<
    React.SetStateAction<IOrdinaryCyclesEntry[]>
  >;
  setSourcesOfIncomeValues: React.Dispatch<
    React.SetStateAction<IServerDomain[]>
  >;
  handleOpenModal: () => void;
  onReset: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseGoBackModal: () => void;
  onGoBack: () => void;
  onCloseRequestStatus: () => void;
  onClosePendingReqModal: () => void;
  onToggleEditedModal: () => void;
  onEditedModal: () => void;
  onToggleDeletedAlertModal: () => void;
}

export type { IEditPayrollAgreementUI };
