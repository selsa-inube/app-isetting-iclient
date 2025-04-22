import { ErrorPage } from "@design/layout/errorPage";
import { notBusinessUnit } from "@config/businessUnit/notBusinessUnit";
import { useNotBusinessUnit } from "@hooks/useNotBusinessUnit";

const NotBusinessUnit = () => {
  const { handlelogout } = useNotBusinessUnit({ isHandlelogout: true });

  return (
    <ErrorPage
      errorCode={1004}
      heading={notBusinessUnit.description}
      onClick={handlelogout}
    />
  );
};

export { NotBusinessUnit };
