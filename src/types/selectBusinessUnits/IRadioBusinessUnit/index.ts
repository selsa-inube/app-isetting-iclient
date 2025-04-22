import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

interface IRadioBusinessUnit {
  id: string;
  label: string;
  logo: string;
  name: string;
  value: string;
  selectedBusinessUnit: IBusinessUnitsPortalStaff;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type { IRadioBusinessUnit };
