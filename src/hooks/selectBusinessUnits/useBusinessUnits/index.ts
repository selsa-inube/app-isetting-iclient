import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQueries } from "@inubekit/inubekit";

import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { IBusinessUnitstate } from "@ptypes/selectBusinessUnits/IBusinessUnitstate";
import { IUseBusinessUnits } from "@ptypes/selectBusinessUnits/IUseBusinessUnits";

const useBusinessUnits = (props: IUseBusinessUnits) => {
  const { businessUnits } = props;
  const navigate = useNavigate();
  const { setBusinessUnitSigla } = useContext(AuthAndPortalData);

  const [search, setSearch] = useState("");
  const [selectedBusinessUnit, setSelectedBusinessUnit] =
    useState<IBusinessUnitsPortalStaff>();
  const [businessUnitLocal, setBusinessUnitLocal] =
    useState<IBusinessUnitstate>({
      ref: null,
      value: true,
    });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (businessUnitLocal.ref) {
      businessUnitLocal.ref.checked = false;
    }
    setBusinessUnitLocal({ ref: null, value: true });
    setSearch(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessUnitLocal({ ref: event.target, value: false });
    const selectOption = businessUnits.find(
      (businessUnit0) => businessUnit0.abbreviatedName === event.target.value,
    );
    console.log(event.target.value);
    console.log({ selectOption, businessUnits });
    setSelectedBusinessUnit(selectOption);
  };

  const handleSubmit = () => {
    if (selectedBusinessUnit) {
      const selectJSON = JSON.stringify(selectedBusinessUnit);
      setBusinessUnitSigla(selectJSON);
    }
    navigate("/selectBusinessUnit/loading-app");
  };

  const filterBusinessUnits = (
    businessUnits: IBusinessUnitsPortalStaff[],
    search: string,
  ) => {
    const searchTerm = search?.toUpperCase();

    return businessUnits.filter((unit) => {
      const businessUnitName = unit?.abbreviatedName?.toUpperCase() ?? "";
      const businessUnitSigla = unit?.publicCode?.toUpperCase() ?? "";

      return (
        businessUnitName.includes(searchTerm) ??
        businessUnitSigla.includes(searchTerm)
      );
    });
  };

  const {
    "(max-width: 532px)": screenMobile,
    "(max-height: 1000px)": screenTablet,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 532px)",
    "(max-height: 1000px)",
  ]);

  const filteredBusinessUnits = filterBusinessUnits(businessUnits, search);

  return {
    search,
    businessUnitLocal,
    screenMobile,
    screenTablet,
    selectedBusinessUnit,
    handleSearchChange,
    handleChange,
    handleSubmit,
    filteredBusinessUnits,
  };
};

export { useBusinessUnits };
