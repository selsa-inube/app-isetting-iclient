import { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { decrypt } from "@utils/crypto/decrypt";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { IAppData } from "@ptypes/context/IAppData";
import { usePortalData } from "@hooks/staffPortal/usePortalData";
import { useBusinessManagers } from "@hooks/staffPortal/useBusinessManagers";

const useValidatingLoginInformation = () => {
  const { user } = useAuth0();

  const portalIdentifier = decrypt(localStorage.getItem("portalCode") ?? "");
  const { portalData: portalPublicCode } = usePortalData({ portalIdentifier });
  const { businessManagersData } = useBusinessManagers({ portalPublicCode });
  const [businessUnitSigla, setBusinessUnitSigla] = useState(
    localStorage.getItem("businessUnitSigla") ?? "",
  );
  const [businessUnitsToTheStaff, setBusinessUnitsToTheStaff] = useState<
    IBusinessUnitsPortalStaff[]
  >(() => {
    const savedBusinessUnits = localStorage.getItem("businessUnitsToTheStaff");
    return savedBusinessUnits ? JSON.parse(savedBusinessUnits) : [];
  });

  let businessUnitData: IBusinessUnitsPortalStaff =
    {} as IBusinessUnitsPortalStaff;

  try {
    if (businessUnitSigla && businessUnitSigla.trim() !== "") {
      businessUnitData = JSON.parse(
        businessUnitSigla,
      ) as IBusinessUnitsPortalStaff;
    }
  } catch (error) {
    console.error("Error parsing business unit data:", error);
  }
  const [appData, setAppData] = useState<IAppData>({
    portal: {
      abbreviatedName: "",
      staffPortalCatalogId: "",
      businessManagerId: "",
      publicCode: "",
    },
    businessManager: {
      publicCode: "",
      abbreviatedName: "",
      urlBrand: "",
      urlLogo: "",
    },
    businessUnit: {
      publicCode: businessUnitData?.publicCode ?? "",
      abbreviatedName: businessUnitData?.abbreviatedName ?? "",
      languageId: businessUnitData?.languageId ?? "",
      urlLogo: businessUnitData?.urlLogo ?? "",
    },
    user: {
      userAccount: user?.email ?? "",
      userName: user?.name ?? "",
    },
  });

  useEffect(() => {
    if (!businessManagersData) return;

    setAppData((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        abbreviatedName: portalPublicCode?.abbreviatedName ?? "",
        staffPortalCatalogId: portalPublicCode?.staffPortalId ?? "",
        businessManagerId: portalPublicCode?.businessManagerId ?? "",
        publicCode: portalPublicCode?.publicCode ?? "",
      },
      businessManager: {
        ...prev.businessManager,
        publicCode: businessManagersData.publicCode ?? "",
        abbreviatedName: businessManagersData.abbreviatedName ?? "",
        urlBrand: businessManagersData.urlBrand ?? "",
        urlLogo: businessManagersData.urlLogo ?? "",
      },
    }));
  }, [businessManagersData, portalPublicCode, portalIdentifier]);

  useEffect(() => {
    localStorage.setItem("businessUnitSigla", businessUnitSigla);

    if (businessUnitsToTheStaff && businessUnitSigla) {
      const businessUnit = JSON.parse(businessUnitSigla);

      setAppData((prev) => ({
        ...prev,
        businessUnit: {
          ...prev.businessUnit,
          abbreviatedName: businessUnit?.abbreviatedName,
          publicCode: businessUnit?.publicCode,
          languageId: businessUnit?.languageId,
          urlLogo: businessUnit?.urlLogo,
        },
      }));
    }
  }, [businessUnitSigla, businessUnitsToTheStaff]);

  useEffect(() => {
    localStorage.setItem(
      "businessUnitsToTheStaff",
      JSON.stringify(businessUnitsToTheStaff),
    );
  }, [businessUnitsToTheStaff]);

  const authAndPortalDataContainer = useMemo(
    () => ({
      appData,
      businessUnitSigla,
      businessUnitsToTheStaff,
      setAppData,
      setBusinessUnitSigla,
      setBusinessUnitsToTheStaff,
    }),
    [appData, businessUnitSigla, businessUnitsToTheStaff],
  );

  return { authAndPortalDataContainer };
};

export { useValidatingLoginInformation };
