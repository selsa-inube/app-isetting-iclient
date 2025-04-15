import { useState, useEffect } from "react";

import { staffPortalByBusinessManager } from "@services/staffPortal/getStaffPortalByBusinessManager";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal/IStaffPortalByBusinessManager";
import { encrypt } from "@utils/crypto/encrypt";
import { enviroment } from "@config/environment";
import { IUsePortalData } from "@ptypes/hooks/staffPortal/IUsePortalData";

const usePortalData = (props: IUsePortalData) => {
  const { portalIdentifier } = props;
  const [portalData, setPortalData] = useState<IStaffPortalByBusinessManager>(
    {} as IStaffPortalByBusinessManager,
  );
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    const fetchPortalData = async () => {
      try {
        if (!portalIdentifier) {
          setHasError(true);
          setErrorCode(1000);
          return;
        }

        if (portalIdentifier !== enviroment.PORTAL_CODE) {
          setHasError(true);
          setErrorCode(1002);
          return;
        }
        const StaffPortalData =
          await staffPortalByBusinessManager(portalIdentifier);
        if (!StaffPortalData) {
          setHasError(true);
          setErrorCode(1001);
          return;
        }
        const encryptedParamValue = encrypt(portalIdentifier);
        localStorage.setItem("portalCode", encryptedParamValue);
        setPortalData(StaffPortalData[0]);
      } catch (error) {
        console.info(error);
        setHasError(true);
        setErrorCode(500);
      }
    };

    fetchPortalData();
  }, [portalIdentifier]);

  return { portalData, hasError, errorCode };
};

export { usePortalData };
