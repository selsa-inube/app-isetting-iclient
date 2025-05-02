import { ICity } from "@ptypes/hooks/ICity";
import { mapCitiesToEntity } from "../mapCitiesToEntity";

const mapCitiesToEntities = (enums: ICity[]): ICity[] => {
  return enums.map(mapCitiesToEntity);
};

export { mapCitiesToEntities };
