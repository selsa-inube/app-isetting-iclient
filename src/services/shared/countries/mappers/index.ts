import { ICountry } from "@ptypes/hooks/ICountry";
import { mapCountriesToEntity } from "./mapCountriesToEntities";

const mapCountriesToEntities = (enums: ICountry[]): ICountry[] => {
  return enums.map(mapCountriesToEntity);
};

export { mapCountriesToEntities };
