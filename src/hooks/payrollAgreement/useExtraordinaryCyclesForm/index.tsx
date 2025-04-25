import { useMediaQuery } from "@inubekit/inubekit";
import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IExtraordinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IExtraordinaryCyclesEntry";
import { addLeadingZero } from "@utils/addLeadingZero";
import { IServerDomain } from "@ptypes/IServerDomain";
import { extraordinaryDaysOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/extraordinaryDay";
import { monthExtraordinaryOptions } from "@config/payrollAgreement/payrollAgreementTab/assisted/monthExtraordinary";
import { daysOfMonth } from "@utils/daysOfMonth";
import { convertToOptions } from "@utils/convertToOptions";
import { monthsInNumber } from "@config/payrollAgreement/payrollAgreementTab/generic/monthsInNumber";
import { generateExtraOrdPayDays } from "@utils/generateExtraOrdPayDays";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useEnumerators } from "@hooks/useEnumerators";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";
import { normalizeEnumTranslation } from "@utils/normalizeEnumTranslation";
import { compareObjects } from "@utils/compareObjects";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IUseExtraordinaryCyclesForm } from "@ptypes/hooks/IUseExtraordinaryCyclesForm";
import { cyclespaymentLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/cyclespaymentLabels";

const useExtraordinaryCyclesForm = (props: IUseExtraordinaryCyclesForm) => {
  const {
    ref,
    editDataOption,
    typeRegularPayroll,
    loading,
    onSubmit,
    onFormValid,
    extraordinaryPayment,
    setExtraordinaryPayment,

    regularPaymentCycles,
    initialData,
  } = props;

  const createValidationSchema = () =>
    object().shape({
      nameCycle: validationRules.string.required(validationMessages.required),
      typePayment: validationRules.string.required(validationMessages.required),
      day: validationRules.number.required(validationMessages.required),
      month: validationRules.string.required(validationMessages.required),
      numberDaysUntilCut: validationRules.string.required(
        validationMessages.required,
      ),
    });

  const validationSchema = createValidationSchema();

  const initialValues: IExtraordinaryCyclesEntry = {
    nameCycle: "",
    typePayment: "",
    day: "",
    month: "",
    numberDaysUntilCut: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit ?? (() => true),
  });

  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState<IEntry[]>(
    extraordinaryPayment as IEntry[],
  );
  const [dayOptions, setDayOptions] = useState<IServerDomain[] | undefined>([]);
  const monthOptions = monthExtraordinaryOptions;
  const numberDaysUntilCutOptions = extraordinaryDaysOptions;
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  const isMobile = useMediaQuery("(max-width: 990px)");

  const { appData } = useContext(AuthAndPortalData);
  const { enumData } = useEnumerators({
    enumDestination: "extraordinarypaymenttype",
    bussinesUnits: appData.businessUnit.publicCode,
  });

  const typePaymentOptions = optionsFromEnumerators(enumData);

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value);
  };

  const valuesEqual =
    JSON.stringify(initialValues) === JSON.stringify(formik.values);

  const valuesEqualBoton = compareObjects(initialData, entries);

  useEffect(() => {
    if (!formik.values.month) {
      setDayOptions([]);
      formik.setFieldValue("day", "");
    }

    if (formik.values.month && !typeRegularPayroll) {
      formik.setFieldValue("day", "");
      const options: IServerDomain[] = convertToOptions(
        daysOfMonth(
          monthsInNumber[formik.values.month as keyof typeof monthsInNumber],
        ),
      );
      setDayOptions(options);
    }

    if (formik.values.month && typeRegularPayroll && regularPaymentCycles) {
      formik.setFieldValue("day", "");
      const options: IServerDomain[] = convertToOptions(
        generateExtraOrdPayDays(
          regularPaymentCycles,
          monthsInNumber[formik.values.month as keyof typeof monthsInNumber],
        ),
      );
      setDayOptions(options);
    }
  }, [formik.values.month]);

  useEffect(() => {
    const updateButton = () => {
      if (editDataOption) {
        setIsDisabledButton(entries.length === 0 || valuesEqualBoton);
      } else {
        setIsDisabledButton(typeRegularPayroll ? false : entries.length === 0);
      }
    };
    updateButton();
  }, [loading, initialValues, editDataOption, entries]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    formik.resetForm();
  };

  const createNewCycle = (id: number) => ({
    id: `cycle-${addLeadingZero(id).toString()}`,
    nameCycle: formik.values.nameCycle,
    typePayment:
      normalizeEnumTranslation(formik.values.typePayment)?.name ??
      formik.values.typePayment,
    payday: `${formik.values.month}-${formik.values.day}`,
    numberDaysUntilCut: formik.values.numberDaysUntilCut,
  });

  const handleAddCycle = () => {
    setEntries((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    setExtraordinaryPayment((prev) => {
      if (!Array.isArray(prev)) return [];
      return [...prev, createNewCycle(prev.length + 1)];
    });

    setShowModal(false);
    formik.resetForm();
  };

  useEffect(() => {
    if (entryDeleted) {
      setEntries((prev) => prev.filter((entry) => entry.id !== entryDeleted));

      setExtraordinaryPayment((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted),
      );
    }
  }, [entryDeleted]);

  const labelButtonPrevious = editDataOption
    ? cyclespaymentLabels.cancelButton
    : cyclespaymentLabels.previousButton;

  const labelButtonNext = editDataOption
    ? cyclespaymentLabels.sendButton
    : cyclespaymentLabels.nextButton;

  return {
    formik,
    isDisabledButton,
    valuesEqual,
    entries,
    showModal,
    isMobile,
    typePaymentOptions,
    numberDaysUntilCutOptions,
    monthOptions,
    dayOptions,
    labelButtonPrevious,
    labelButtonNext,
    handleChange,
    handleAddCycle,
    handleToggleModal,
    setEntryDeleted,
  };
};

export { useExtraordinaryCyclesForm };
