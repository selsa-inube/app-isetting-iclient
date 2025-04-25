import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useContext } from "react";

const useLanding = () => {
  const { businessUnitSigla } = useContext(AuthAndPortalData);

  const isBusinessUnitSiglaEmpty = businessUnitSigla.length === 0;

  return { isBusinessUnitSiglaEmpty };
};

export { useLanding };
