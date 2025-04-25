import { MdCheckCircle } from "react-icons/md";
import { Icon, Stack, Text, useMediaQuery } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IRequestStatusModal } from "@ptypes/design/IRequestStatusModal";
import { ComponentAppearance } from "@enum/appearances";
import { ModalWrapper } from "../modalWrapper";

const RequestStatusModal = (props: IRequestStatusModal) => {
  const {
    portalId,
    actionText,
    title,
    appearance,
    description,
    isLoading,
    requestNumber,
    onClick,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ModalWrapper
      isMobile={isMobile}
      labelActionButton={actionText}
      labelCloseModal="Cerrar"
      width={isMobile ? "320px" : "450px"}
      height={isMobile ? "auto" : "374px"}
      portalId={portalId}
      title={title}
      onClick={onClick}
      onCloseModal={onCloseModal}
      appearanceButton={appearance}
      isLoading={isLoading}
    >
      <Stack alignItems="center" justifyContent="center" direction="column">
        <Icon
          icon={<MdCheckCircle />}
          appearance={ComponentAppearance.SUCCESS}
          size="68px"
        />
      </Stack>

      <Stack direction="column" gap={tokens.spacing.s200}>
        <Stack justifyContent="center">
          <Text
            textAlign="center"
            appearance={ComponentAppearance.DARK}
            size="large"
            weight="bold"
          >
            {`Solicitud # ${requestNumber}`}
          </Text>
        </Stack>

        <Text appearance={ComponentAppearance.GRAY} size="medium">
          {description}
        </Text>
      </Stack>
    </ModalWrapper>
  );
};

export { RequestStatusModal };
export type { IRequestStatusModal };
