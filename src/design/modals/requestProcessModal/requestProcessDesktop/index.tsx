import { MdCheckCircle } from "react-icons/md";
import { Icon, inube, ProgressBar, Stack, Text } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { countVerifiedRequests } from "@utils/countVerifiedRequests";
import { verifiedErrorRequest } from "@utils/verifiedErrorRequest";
import { lastCompletedIndex } from "@utils/lastCompletedIndex";
import { IRequestProcessDesktop } from "@ptypes/design/IRequestProcessDesktop";
import { BoxContainer } from "@design/layout/boxContainer";
import { StyledContainerProgressBar, StyledStepIndicator } from "../styles";

const RequestProcessDesktop = (props: IRequestProcessDesktop) => {
  const { requestSteps, sizeIcon, stepCurrent, stepCurrentIndex } = props;

  return (
    <BoxContainer
      borderColor={inube.palette.neutral.N40}
      borderRadius={tokens.spacing.s100}
      gap={tokens.spacing.s100}
      padding={tokens.spacing.s150}
      backgroundColor={inube.palette.neutral.N0}
      boxSizing="Initial"
    >
      <Stack
        direction="column"
        gap={tokens.spacing.s100}
        width="100%"
        alignItems="center"
      >
        <Stack gap={tokens.spacing.s100} alignItems="center" width="100%">
          {stepCurrent === requestSteps.length ? (
            <Icon
              icon={<MdCheckCircle />}
              size={sizeIcon}
              appearance={
                requestSteps[lastCompletedIndex(requestSteps)].status ===
                "error"
                  ? ComponentAppearance.DANGER
                  : ComponentAppearance.SUCCESS
              }
            />
          ) : (
            <StyledStepIndicator
              $statusError={requestSteps[stepCurrentIndex].status === "error"}
            >
              <Text
                type="label"
                size="medium"
                appearance={
                  requestSteps[stepCurrentIndex].status === "error"
                    ? ComponentAppearance.DANGER
                    : ComponentAppearance.SUCCESS
                }
                weight="bold"
              >
                {stepCurrent}
              </Text>
            </StyledStepIndicator>
          )}

          <Text
            size="medium"
            appearance={ComponentAppearance.DARK}
            weight="bold"
            ellipsis
          >
            {requestSteps[stepCurrentIndex].name}
          </Text>
        </Stack>
        <Stack width="100%" gap={tokens.spacing.s100} alignItems="center">
          <StyledContainerProgressBar
            $appearance={ComponentAppearance.GRAY}
            $height="8px"
          >
            <ProgressBar
              height="8px"
              appearance={
                verifiedErrorRequest(requestSteps)
                  ? ComponentAppearance.DANGER
                  : ComponentAppearance.SUCCESS
              }
              progress={countVerifiedRequests(requestSteps)}
            />
          </StyledContainerProgressBar>
          <Text
            type="label"
            size="medium"
            weight="bold"
          >{`${stepCurrent}/${requestSteps.length}`}</Text>
        </Stack>
        <Text
          type="label"
          size="large"
          appearance={ComponentAppearance.GRAY}
        >{`${countVerifiedRequests(requestSteps).toFixed()}%`}</Text>
      </Stack>
    </BoxContainer>
  );
};

export { RequestProcessDesktop };
