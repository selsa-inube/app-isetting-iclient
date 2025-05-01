import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useFormik } from "formik";
import { useMediaQuery } from "@inubekit/inubekit";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { useEnumerators } from "@hooks/useEnumerators";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider/authAndPortalData";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { IUseGeneralInformationForm } from "@ptypes/hooks/IUseGeneralInformationForm";
import { generalInfLabels } from "@config/payrollAgreement/payrollAgreementTab/assisted/generalInfLabels";

const useGeneralInformationForm = (props: IUseGeneralInformationForm) => {
  const {
    ref,
    editDataOption,
    loading,
    onSubmit,
    onFormValid,
    initialValues,
    setSourcesOfIncomeValues,
    sourcesOfIncomeValues,
    initialGeneralInfData,
  } = props;
  const createValidationSchema = () =>
    object().shape({
      abbreviatedName: validationRules.string.required(
        validationMessages.required,
      ),
      typePayroll: validationRules.string.required(validationMessages.required),
      sourcesOfIncome: validationRules.string.required(
        validationMessages.required,
      ),
      applicationDaysPayroll: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const [autosuggestValue, setAutosuggestValue] = useState(
    formik.values.applicationDaysPayroll ?? "",
  );
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const { appData } = useContext(AuthAndPortalData);
  const { enumData: typePayroll } = useEnumerators({
    enumDestination: "deductionagreementtype",
    bussinesUnits: appData.businessUnit.publicCode,
  });

  const typePayrollOptions = optionsFromEnumerators(typePayroll);

  const isMobile = useMediaQuery("(max-width: 990px)");

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  useEffect(() => {
    setAutosuggestValue(formik.values.applicationDaysPayroll ?? "");
  }, [formik.values.applicationDaysPayroll]);

  const handleChangeAutosuggest = (name: string, value: string) => {
    setAutosuggestValue(value);
    formik.setFieldValue(name, value);
  };

  const handleChangeSelect = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };

  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedData = sourcesOfIncomeValues.map((entry) =>
      entry.id === name ? { ...entry, checked } : entry,
    );

    const newValues = updatedData
      ?.filter((item) => item.checked)
      .map((option) => option.label)
      .join(",");

    formik.setFieldValue("sourcesOfIncome", newValues);
    setSourcesOfIncomeValues(updatedData);
  };

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEmpty = Object.values(formik.values).every(
    (value) => value === "" || value === null || value === undefined,
  );

  const valuesEqualBoton =
    JSON.stringify(initialGeneralInfData) === JSON.stringify(formik.values);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(!formik.isValid || valuesEmpty || valuesEqualBoton);
      } else {
        setIsDisabledButton(!formik.isValid);
      }
    };
    updateButton();
  }, [formik.values, loading, formik.isValid, initialValues, editDataOption]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleReset = () => {
    formik.resetForm();
    setSourcesOfIncomeValues(getDomainById("sourcesOfIncome"));
  };

  const gridTemplateRows = editDataOption
    ? isMobile
      ? "repeat(5, 1fr)"
      : "repeat(3, auto)"
    : isMobile
      ? "repeat(4, 1fr)"
      : "repeat(2, 1fr)";

  const labelButtonPrevious = editDataOption
    ? generalInfLabels.cancel
    : generalInfLabels.previous;

  const labelButtonNext = editDataOption
    ? generalInfLabels.send
    : generalInfLabels.next;

  return {
    autosuggestValue,
    formik,
    isDisabledButton,
    showModal,
    sourcesOfIncomeValues,
    valuesEqual,
    isMobile,
    focused,
    displayList,
    selectRef,
    typePayrollOptions,
    gridTemplateRows,
    labelButtonPrevious,
    labelButtonNext,
    setFocused,
    setDisplayList,
    handleChangeSelect,
    handleChangeAutosuggest,
    handleChangeCheck,
    handleReset,
    handleToggleModal,
  };
};

export { useGeneralInformationForm };
