import { useValidatingLoginInformation } from "@hooks/context/useValidatingLoginInformation";
import { IAuthAndPortalDataProvider } from "@config/context/authAndPortalDataProvider";
import { AuthAndPortalData } from "./authAndPortalData";

const AuthAndPortalDataProvider = (props: IAuthAndPortalDataProvider) => {
  const { children } = props;
  const { authAndPortalDataContainer } = useValidatingLoginInformation();
  return (
    <AuthAndPortalData.Provider value={authAndPortalDataContainer}>
      {children}
    </AuthAndPortalData.Provider>
  );
};

export { AuthAndPortalDataProvider };
