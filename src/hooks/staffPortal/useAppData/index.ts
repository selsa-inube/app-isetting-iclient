import { useContext, useEffect } from "react";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import { IUseAppData } from "@ptypes/hooks/staffPortal/IUseAppData";
import { useBusinessManagers } from "../useBusinessManagers";
import { usePortalData } from "../usePortalData";

const useAppData = (props: IUseAppData) => {
  const { portalCode: portalIdentifier, code, user, businessUnit } = props;
  const { setBusinessUnitSigla, setAppData } = useContext(AuthAndPortalData);
  const updateAppData = () => {
    if (code) {
      localStorage.setItem("portalCode", code);
    }

    if (businessUnit) {
      localStorage.setItem("businessUnitSigla", businessUnit);
      setBusinessUnitSigla(businessUnit);
    }

    if (user) {
      setAppData((prev) => ({
        ...prev,
        user: {
          userAccount: user.email,
          userName: user.name,
        },
      }));
    }
  };

  useEffect(() => {
    updateAppData();
  }, []);

  let hasError = false;
  let isLoading = false;
  let isAuthenticated = true;
  let errorCode = 0;

  if (!code) {
    const {
      portalData: portalPublicCode,
      hasError: portalError,
      errorCode: errorCodePortal,
    } = usePortalData({ portalIdentifier });
    const {
      businessManagersData,
      hasError: businessError,
      errorCode: errorCodeBusiness,
    } = useBusinessManagers({ portalPublicCode });

    const {
      hasError: authError,
      isLoading: authLoading,
      isAuthenticated: authAuthenticated,
      errorCode: errorCodeAuth,
    } = useAuthRedirect({
      portalPublicCode,
      businessManagersData,
      portalIdentifier,
    });

    hasError = portalError || businessError || authError;
    errorCode = errorCodePortal || errorCodeBusiness || errorCodeAuth;
    isLoading = authLoading;
    isAuthenticated = authAuthenticated;
  }

  return { hasError, isLoading, isAuthenticated, errorCode };
};

export { useAppData };
