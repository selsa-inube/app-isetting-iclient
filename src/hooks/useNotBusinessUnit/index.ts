import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUseNotBusinessUnit } from "@ptypes/hooks/staffPortal/IUseNotBusinessUnit";
import { enviroment } from "@config/environment";
import { useClearLocalStorage } from "../authentication/useClearLocalStorage";

const useNotBusinessUnit = (props: IUseNotBusinessUnit) => {
  const { isHandlelogout } = props;
  const { logout } = useAuth0();

  useClearLocalStorage();

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  useEffect(() => {
    if (!isHandlelogout) {
      handlelogout();
    }
  }, [isHandlelogout]);

  return {
    handlelogout,
  };
};

export { useNotBusinessUnit };
