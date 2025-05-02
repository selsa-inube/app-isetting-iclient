import { Stack, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { tokens } from "@design/tokens";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { IRequestProcess } from "@ptypes/design/IRequestProcess";

const RequestProcess = (props: IRequestProcess) => {
  const {
    descriptionRequestProcess,
    portalId,
    requestProcessSteps,
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const hasData = saveData && saveData.requestStatus !== "";

  const showRequestModal =
    hasData && statusFlowAutomatic.includes(saveData.requestStatus);

  return (
    <Stack
      direction="column"
      gap={tokens.spacing.s300}
      justifyContent="center"
      alignContent="center"
    >
      {showRequestModal ? (
        <RequestProcessModal
          portalId={portalId}
          title={descriptionRequestProcess.title}
          description={descriptionRequestProcess.description}
          appearance={ComponentAppearance.SUCCESS}
          requestSteps={requestProcessSteps}
          isMobile={isMobile}
          sizeIcon="28px"
        />
      ) : (
        <RequestStatusModal
          portalId={portalId}
          title={
            descriptionRequestStatus(
              saveData?.responsible ?? "uno de nuestros funcionarios",
            ).title
          }
          description={
            descriptionRequestStatus(
              saveData?.responsible ?? "uno de nuestros funcionarios",
            ).description
          }
          requestNumber={saveData?.requestNumber ?? ""}
          onClick={onCloseRequestStatus}
          onCloseModal={onCloseRequestStatus}
          isLoading={false}
          actionText={
            descriptionRequestStatus(
              saveData?.responsible ?? "uno de nuestros funcionarios",
            ).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { RequestProcess };
