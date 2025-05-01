import { createContext } from "react";
import { IAuthAndPortalData } from "@ptypes/context/IAuthAndPortalData";

const AuthAndPortalData = createContext<IAuthAndPortalData>(
  {} as IAuthAndPortalData,
);

export { AuthAndPortalData };
