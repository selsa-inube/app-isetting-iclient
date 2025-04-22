import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";
import { ErrorPage } from "@design/layout/errorPage";
import { Logout } from "@pages/login/logout";
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

      <Route path="logout" element={<Logout />} />
    </>,
  ),
);

export { mainNavigation };
