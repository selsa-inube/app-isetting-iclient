import { RouterProvider } from "react-router-dom";
import { AuthAndPortalDataProvider } from "./context/authAndPortalDataProvider";
import { ErrorPage } from "./design/layout/errorPage";
import { useAppData } from "./hooks/staffPortal/useAppData";
import { GlobalStyles } from "./styles/global";
import { IUser } from "./types/staffPortal/IUser";
import { mainNavigation } from "./routes/mainNavigation";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");
interface IApp {
  code?: string;
  businessUnit?: string;
  user?: IUser;
}

const App = (props: IApp) => {
  const { code, user, businessUnit } = props;

  const { hasError, isLoading, isAuthenticated, errorCode } = useAppData({
    portalCode,
    code,
    user: user ?? ({} as IUser),
    businessUnit,
  });

  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage errorCode={errorCode} />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <GlobalStyles />

      <AuthAndPortalDataProvider>
        <RouterProvider router={mainNavigation} />
      </AuthAndPortalDataProvider>
    </>
  );
};

export { App };
