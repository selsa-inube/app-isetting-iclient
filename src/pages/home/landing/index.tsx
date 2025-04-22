import { Home } from "@pages/home";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { useLanding } from "@hooks/useLanding";

const Landing = () => {
  const { isBusinessUnitSiglaEmpty } = useLanding();

  return isBusinessUnitSiglaEmpty ? <SelectBusinessUnits /> : <Home />;
};

export { Landing };
