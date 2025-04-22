import { useMediaQueries } from "@inubekit/inubekit";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { decrypt } from "@utils/crypto/decrypt";

const useHome = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    businessUnitSigla,
    setBusinessUnitSigla,
  } = useContext(AuthAndPortalData);

  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");

  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);

  const { optionsCards, loading } = useOptionsByBusinessUnit({
    businessUnit: businessUnitSigla,
    staffPortalId,
  });

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    setCollapse(false);
  };

  const username = appData.user.userName.split(" ")[0];

  const {
    "(max-width: 532px)": screenMobile,
    "(max-width: 805px)": screenTablet,
    "(max-width: 944px)": screenTabletHeader,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 532px)",
    "(max-width: 805px)",
    "(max-width: 944px)",
  ]);

  const hasMultipleBusinessUnits = businessUnitsToTheStaff.length > 1;

  const dataExists = optionsCards && optionsCards?.length > 0;

  return {
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    optionsCards,
    loading,
    appData,
    username,
    screenMobile,
    screenTablet,
    screenTabletHeader,
    hasMultipleBusinessUnits,
    dataExists,
    setCollapse,
    handleLogoClick,
  };
};

export { useHome };
