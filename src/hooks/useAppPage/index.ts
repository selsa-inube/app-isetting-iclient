import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inubekit/inubekit";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";

import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { decrypt } from "@utils/crypto/decrypt";
import { mainNavigation } from "@config/mainNavigation";
import { IUseAppPage } from "@ptypes/hooks/IUseAppPage";

const useAppPage = (props: IUseAppPage) => {
  const { appData, businessUnitSigla, setBusinessUnitSigla } = props;
  const [collapse, setCollapse] = useState(false);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards } = useOptionsByBusinessUnit({
    businessUnit: businessUnitSigla,
    staffPortalId,
  });

  const navigate = useNavigate();

  const location = useLocation();

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
    navigate("/");
  };

  const isTablet = useMediaQuery("(max-width: 849px)");
  const isTabletMain = useMediaQuery("(max-width: 1000px)");

  const { optionsHeader, optionsNav } = mainNavigation(optionsCards, location);

  return {
    collapse,
    collapseMenuRef,
    businessUnitChangeRef,
    selectedClient,
    isTablet,
    isTabletMain,
    optionsHeader,
    optionsNav,
    setCollapse,
    handleLogoClick,
  };
};

export { useAppPage };
