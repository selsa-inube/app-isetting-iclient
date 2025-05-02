import { MdCheckCircle } from "react-icons/md";
import { Icon, inube, ProgressBar, Stack, Text } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { countVerifiedRequests } from "@utils/countVerifiedRequests";
import { verifiedErrorRequest } from "@utils/verifiedErrorRequest";
import { lastCompletedIndex } from "@utils/lastCompletedIndex";
import { IRequestProcessDesktop } from "@ptypes/design/IRequestProcessDesktop";
import { useThemeData } from "@utils/theme";
import { BoxContainer } from "@design/layout/boxContainer";
import { StyledContainerProgressBar, StyledStepIndicator } from "../styles";

const RequestProcessDesktop = (props: IRequestProcessDesktop) => {
  const { requestSteps, sizeIcon, stepCurrent, stepCurrentIndex } = props;
  const theme = useThemeData();

  const appearanceText =
    requestSteps[stepCurrentIndex].status === "error"
      ? ComponentAppearance.DANGER
      : ComponentAppearance.SUCCESS;

  const appearanceIcon =
    requestSteps[lastCompletedIndex(requestSteps)].status === "error"
      ? ComponentAppearance.DANGER
      : ComponentAppearance.SUCCESS;

  const appearanceProgressBar = verifiedErrorRequest(requestSteps)
    ? ComponentAppearance.DANGER
    : ComponentAppearance.SUCCESS;

  const statusError = requestSteps[stepCurrentIndex].status === "error";

  const showIcon = stepCurrent === requestSteps.length;
  const requestStepName = requestSteps[stepCurrentIndex].name;

  const textStep = `${stepCurrent}/${requestSteps.length}`;

  const percentage = `${countVerifiedRequests(requestSteps).toFixed()}%`;

  return (
    <BoxContainer
      borderColor={
        theme ? theme?.palette?.neutral?.N40 : inube.palette.neutral.N40
      }
      borderRadius={tokens.spacing.s100}
      gap={tokens.spacing.s100}
      padding={tokens.spacing.s150}
      backgroundColor={
        theme ? theme?.palette?.neutral?.N0 : inube.palette.neutral.N0
      }
      boxSizing="Initial"
    >
      <Stack
        direction="column"
        gap={tokens.spacing.s100}
        width="100%"
        alignItems="center"
      >
        <Stack gap={tokens.spacing.s100} alignItems="center" width="100%">
          {showIcon ? (
            <Icon
              icon={<MdCheckCircle />}
              size={sizeIcon}
              appearance={appearanceIcon}
            />
          ) : (
            <StyledStepIndicator $statusError={statusError}>
              <Text
                type="label"
                size="medium"
                appearance={appearanceText}
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
            {requestStepName}
          </Text>
        </Stack>
        <Stack width="100%" gap={tokens.spacing.s100} alignItems="center">
          <StyledContainerProgressBar
            $appearance={ComponentAppearance.GRAY}
            $height="8px"
          >
            <ProgressBar
              height="8px"
              appearance={appearanceProgressBar}
              progress={countVerifiedRequests(requestSteps)}
            />
          </StyledContainerProgressBar>
          <Text type="label" size="medium" weight="bold">
            {textStep}
          </Text>
        </Stack>
        <Text type="label" size="large" appearance={ComponentAppearance.GRAY}>
          {percentage}
        </Text>
      </Stack>
    </BoxContainer>
  );
};

export { RequestProcessDesktop };
