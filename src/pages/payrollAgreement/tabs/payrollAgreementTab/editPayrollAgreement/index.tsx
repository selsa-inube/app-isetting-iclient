import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEditPayrollAgreement } from "@hooks/payrollAgreement/edit/useEditPayrollAgreement";
import { useSavePayrollAgreement } from "@hooks/payrollAgreement/useSavePayrollAgreement";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { EditPayrollAgreementUI } from "./interface";

const EditPayrollAgreement = () => {
  const location = useLocation();
  const { data } = location.state ?? {};
  const { appData } = useContext(AuthAndPortalData);

  const {
    companyAgreement,
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showGoBackModal,
    showModal,
    showRequestProcessModal,
    smallScreen,
    sourcesOfIncomeValues,
    initialData,
    typeRegularPayroll,
    regularPaymentCycles,
    extraordinaryPayment,
    filteredTabsConfig,
    showDeletedAlertModal,
    typePayroll,
    showGeneralInfPayrollForm,
    showRegularPaymentCyclesForm,
    showExtraPaymentCyclesForm,
    handleToggleDeletedAlertModal,
    setExtraordinaryPayment,
    setRegularPaymentCycles,
    handleCloseGoBackModal,
    handleEditedModal,
    handleGoBack,
    handleOpenModal,
    handleReset,
    handleTabChange,
    handleToggleEditedModal,
    setIsCurrentFormValid,
    setShowModal,
    setShowRequestProcessModal,
    setSourcesOfIncomeValues,
  } = useEditPayrollAgreement({ data });

  const {
    savePayrollAgreement,
    requestSteps,
    loadingSendData,
    showRequestStatus,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = useSavePayrollAgreement({
    bussinesUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
  });

  return (
    <EditPayrollAgreementUI
      formReferences={generalInformationRef}
      formValues={formValues}
      initialValues={initialData}
      setIsCurrentFormValid={setIsCurrentFormValid}
      smallScreen={smallScreen}
      sourcesOfIncomeValues={sourcesOfIncomeValues}
      setSourcesOfIncomeValues={setSourcesOfIncomeValues}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      onReset={handleReset}
      handleOpenModal={handleOpenModal}
      companyAgreement={companyAgreement}
      showRequestProcessModal={showRequestProcessModal}
      savePayrollAgreement={savePayrollAgreement as ISaveDataResponse}
      requestSteps={requestSteps}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
      onGoBack={handleGoBack}
      onCloseGoBackModal={handleCloseGoBackModal}
      showEditedModal={showModal}
      onToggleEditedModal={handleToggleEditedModal}
      onEditedModal={handleEditedModal}
      showGoBackModal={showGoBackModal}
      loadingSendData={loadingSendData}
      typeRegularPayroll={typeRegularPayroll}
      regularPaymentCycles={regularPaymentCycles}
      extraordinaryPayment={extraordinaryPayment}
      setExtraordinaryPayment={setExtraordinaryPayment}
      setRegularPaymentCycles={setRegularPaymentCycles}
      filteredTabsConfig={filteredTabsConfig}
      showDeletedAlertModal={showDeletedAlertModal}
      onToggleDeletedAlertModal={handleToggleDeletedAlertModal}
      typePayroll={typePayroll}
      showGeneralInfPayrollForm={showGeneralInfPayrollForm}
      showRegularPaymentCyclesForm={showRegularPaymentCyclesForm}
      showExtraPaymentCyclesForm={showExtraPaymentCyclesForm}
      showRequestStatus={showRequestStatus}
    />
  );
};

export { EditPayrollAgreement };
