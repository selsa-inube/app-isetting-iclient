import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { ErrorPage } from "@design/layout/errorPage";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { BusinessUnits } from "@pages/selectBusinessUnits/outlets/businessUnit";
import { CheckingCredentials } from "@pages/login/checkingCredentials";
import { LoadingApp } from "@design/feedback/loadingApp";
import { NotBusinessUnit } from "@pages/errors/notBusinessUnit";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

const SelectBusinessUnitsRoutes = () => {
  const { businessUnitsToTheStaff } = useContext(AuthAndPortalData);
  const businessUnits = businessUnitsToTheStaff;

  return (
    <Routes>
      <Route path="/" element={<SelectBusinessUnits />}>
        <Route
          path="/checking-credentials"
          element={<CheckingCredentials businessUnits={businessUnits} />}
        />
        <Route
          path="/businessUnits"
          element={<BusinessUnits businessUnits={businessUnits} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route
        path="error/not-available"
        element={<ErrorPage errorCode={1005} />}
      />
      <Route
        path="error/not-related-businessUnits"
        element={<NotBusinessUnit />}
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
      <Route path="/*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export { SelectBusinessUnitsRoutes };
