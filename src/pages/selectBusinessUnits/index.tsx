import { useContext } from "react";
import { useSelectBusinessUnits } from "@hooks/selectBusinessUnits/useSelectBusinessUnits";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { SelectBusinessUnitsUI } from "./interface";

const SelectBusinessUnits = () => {
  const { appData, setBusinessUnitsToTheStaff } = useContext(AuthAndPortalData);

  const { imageWidth, screenTablet, screenDesktop } = useSelectBusinessUnits({
    appData,
    setBusinessUnitsToTheStaff,
  });

  return (
    <SelectBusinessUnitsUI
      appData={appData}
      screenTablet={screenTablet}
      screenDesktop={screenDesktop}
      imageWidth={imageWidth}
    />
  );
};

export { SelectBusinessUnits };
