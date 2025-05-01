import { useContext } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { useCheckingCredentials } from "@hooks/authentication/useCheckingCredentials";
import { ICheckingCredentials } from "@ptypes/home/ICheckingCredentials";
import { CheckingCredentialsUI } from "./interface";

const CheckingCredentials = (props: ICheckingCredentials) => {
  const { businessUnits } = props;

  const { appData, setBusinessUnitSigla } = useContext(AuthAndPortalData);

  useCheckingCredentials({ businessUnits, appData, setBusinessUnitSigla });

  return <CheckingCredentialsUI />;
};

export { CheckingCredentials };
