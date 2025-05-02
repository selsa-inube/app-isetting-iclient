import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";

import { PayrollAgreementRoutes } from "@routes/payrollAgreement";

import { ErrorPage } from "@design/layout/errorPage";
import { Logout } from "@pages/login/logout";
import { AppPage } from "@pages/appPage";
import { Landing } from "@pages/home/landing";

const mainNavigation = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route
        path="/"
        element={<Landing />}
        errorElement={<ErrorPage errorCode={1005} />}
      />
      <Route path="/" element={<AppPage />}>
        <Route
          path="payroll-agreement/*"
          element={<PayrollAgreementRoutes />}
        />
      </Route>
      <Route path="logout" element={<Logout />} />
    </>,
  ),
);

export { mainNavigation };
