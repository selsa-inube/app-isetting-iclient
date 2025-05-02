import { ICountry } from "@ptypes/hooks/ICountry";

const mapCountriesToEntity = (data: ICountry): ICountry => {
  const newData: ICountry = {
    abbreviatedName: String(data.abbreviatedName),
    countryCatalogId: String(data.countryCatalogId),
    descriptionUse: String(data.descriptionUse),
    publicCode: String(data.publicCode),
  };

  return newData;
};

export { mapCountriesToEntity };
