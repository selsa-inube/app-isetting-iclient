import { useAuth0 } from "@auth0/auth0-react";
import { ErrorPage } from "@design/layout/errorPage";
import { enviroment } from "@config/environment";
import { notBusinessUnit } from "@config/businessUnit/notBusinessUnit";
import { useClearLocalStorage } from "@hooks/authentication/useClearLocalStorage";

const NotBusinessUnit = () => {
  const { logout } = useAuth0();

  useClearLocalStorage();

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return (
    <ErrorPage
      errorCode={1004}
      heading={notBusinessUnit.description}
      onClick={handlelogout}
    />
  );
};

export { NotBusinessUnit };
