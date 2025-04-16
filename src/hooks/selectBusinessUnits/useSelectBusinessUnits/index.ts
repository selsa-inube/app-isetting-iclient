import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQueries } from "@inubekit/inubekit";
import { useValidateBusinessUnities } from "@hooks/selectBusinessUnits/useValidateBusinessUnities";
import { IUseSelectBusinessUnits } from "@src/types/hooks/staffPortal/IUseSelectBusinessUnits";

const useSelectBusinessUnits = (props: IUseSelectBusinessUnits) => {
  const { appData, setBusinessUnitsToTheStaff } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (appData.portal.publicCode) {
      useValidateBusinessUnities({
        publicCode: appData.portal.publicCode,
        userAccount: appData.user.userAccount,
      }).then((data) => {
        setBusinessUnitsToTheStaff(data);
      });
    }
  }, [appData.portal.publicCode]);

  useEffect(() => {
    if (
      location.pathname === "/selectBusinessUnit" ||
      location.pathname === "/selectBusinessUnit/" ||
      location.pathname === "/"
    ) {
      navigate(`/selectBusinessUnit/checking-credentials/`);
    }
  }, [location, navigate, appData]);

  const {
    "(max-width: 1100px)": screenTablet,
    "(min-width: 1101px) and (max-width: 2200px)": screenDesktop,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 1100px)",
    "(min-width: 1101px) and (max-width: 2200px)",
  ]);

  const imageWidth = () => {
    if (screenDesktop) return "240px";
    if (screenTablet) return "200px";
    return "160px";
  };

  return { imageWidth, screenTablet, screenDesktop };
};

export { useSelectBusinessUnits };
