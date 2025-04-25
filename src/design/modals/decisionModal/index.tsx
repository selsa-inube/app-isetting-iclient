import { Divider, Icon, Stack, Text, useMediaQuery } from "@inubekit/inubekit";
import { ComponentAppearance } from "@enum/appearances";
import { IDecisionModal } from "@ptypes/design/IDecisionModal";
import { mediaQueryMobile } from "@config/environment";
import { tokens } from "@design/tokens";
import { ModalWrapper } from "../modalWrapper";

const DecisionModal = (props: IDecisionModal) => {
  const {
    actionText,
    icon = <></>,
    withIcon = false,
    description,
    isLoading = false,
    sizeIcon = "60px",
    portalId,
    title,
    appearance = ComponentAppearance.PRIMARY,
    withCancelButton = true,
    moreDetails,
    onClick,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <ModalWrapper
      portalId={portalId}
      width={isMobile ? "335px" : "450px"}
      isMobile={isMobile}
      labelActionButton={actionText}
      labelCloseButton="Cancelar"
      labelCloseModal="Cerrar"
      title={title}
      withCancelButton={withCancelButton}
      onCloseModal={onCloseModal}
      onClick={onClick}
      isLoading={isLoading}
    >
      {withIcon && (
        <Stack width="100%" alignItems="center" justifyContent="center">
          <Icon icon={icon} appearance={appearance} size={sizeIcon} />
        </Stack>
      )}

      <Text appearance={ComponentAppearance.DARK} type="body" size="medium">
        {description}
      </Text>

      {moreDetails && (
        <Stack direction="column" gap={tokens.spacing.s200}>
          <Divider dashed />
          <Text size="medium" appearance="dark">
            {moreDetails}
          </Text>
        </Stack>
      )}
    </ModalWrapper>
  );
};

export { DecisionModal };
export type { IDecisionModal };
