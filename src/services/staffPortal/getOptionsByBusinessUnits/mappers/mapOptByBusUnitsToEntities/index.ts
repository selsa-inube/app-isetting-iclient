import { IOptionsByBusinessUnits } from "@ptypes/staffPortal/IOptionsByBusinessUnits";
import { mapOptionsByBusinessUnitsApiToEntity } from "../mapOptByBusinessApiToEntity";

const mapOptionsByBusinessUnitsToEntities = (
  options: IOptionsByBusinessUnits[],
): IOptionsByBusinessUnits[] => {
  return options.map(mapOptionsByBusinessUnitsApiToEntity);
};
export { mapOptionsByBusinessUnitsToEntities };
