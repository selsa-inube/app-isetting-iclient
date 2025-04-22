import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUseAuthRedirect } from "@ptypes/hooks/IUseAuthRedirect";

const useAuthRedirect = (props: IUseAuthRedirect) => {
  const { portalPublicCode, businessManagersData, portalIdentifier } = props;
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [hasRedirected, setHasRedirected] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    if (hasRedirected) return;

    if (portalPublicCode!.abbreviatedName) {
      if (businessManagersData && !isLoading && !isAuthenticated) {
        loginWithRedirect();
      } else if (isAuthenticated) {
        setHasRedirected(true);
      } else {
        setHasError(true);
        setErrorCode(1001);
      }
    } else {
      setHasError(true);
      setErrorCode(1001);
    }
  }, [
    portalPublicCode,
    businessManagersData,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    hasRedirected,
    portalIdentifier,
  ]);

  return { hasRedirected, hasError, isLoading, isAuthenticated, errorCode };
};

export { useAuthRedirect };
