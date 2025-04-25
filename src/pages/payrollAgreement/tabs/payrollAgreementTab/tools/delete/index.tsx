import { useContext } from "react";

import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ComponentAppearance } from "@enum/appearances";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { RequestProcess } from "@design/feedback/RequestProcess";
import { useSavePayrollAgreement } from "@hooks/payrollAgreement/useSavePayrollAgreement";
import { deletePayrollAgreModal } from "@config/payrollAgreement/payrollAgreementTab/generic/deletePayrollAgreModal";
import { useDeletePayroll } from "@hooks/payrollAgreement/useDeletePayroll";
import { IDelete } from "@ptypes/payrollAgreement/IDelete";
import { requestProcessMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestProcessMessage";
import { requestStatusMessage } from "@config/payrollAgreement/payrollAgreementTab/generic/requestStatusMessage";

const Delete = (props: IDelete) => {
  const { data } = props;
  const { appData } = useContext(AuthAndPortalData);

  const {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
    setShowPendingReq,
  } = useDeletePayroll({ data, appData });

  const {
    savePayrollAgreement,
    requestSteps,
    loadingSendData,
    showRequestProcess,
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
    setShowPendingReq,
  });

  return (
    <>
      <DeleteRecord
        messageDelete={deletePayrollAgreModal}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId="portal"
          saveData={savePayrollAgreement}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
        />
      )}
      {showRequestStatus && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePayrollAgreement?.responsible).title}
          description={
            requestStatusMessage(savePayrollAgreement?.responsible).description
          }
          requestNumber={savePayrollAgreement?.requestNumber ?? ""}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          isLoading={false}
          actionText={
            requestStatusMessage(savePayrollAgreement?.responsible).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
