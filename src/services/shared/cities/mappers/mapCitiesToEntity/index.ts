import { ICity } from "@ptypes/hooks/ICity";

const mapCitiesToEntity = (data: ICity): ICity => {
  const newData: ICity = {
    cityCatalogId: String(data.cityCatalogId),
    descriptionUse: String(data.descriptionUse),
    publicCode: String(data.publicCode),
    subdivisionId: String(data.subdivisionId),
  };

  return newData;
};

export { mapCitiesToEntity };
