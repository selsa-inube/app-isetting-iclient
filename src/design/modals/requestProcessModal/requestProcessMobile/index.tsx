import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Icon, ProgressBar, Stack, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { ComponentAppearance } from "@enum/appearances";
import { verifiedErrorRequest } from "@utils/verifiedErrorRequest";
import { countVerifiedRequests } from "@utils/countVerifiedRequests";
import { IRequestProcessMobile } from "@ptypes/design/IRequestProcessMobile";
import { StyledContainerProgressBar } from "../styles";

const RequestProcessMobile = (props: IRequestProcessMobile) => {
  const { requestSteps, sizeIcon, appearance } = props;

  const hasRequestSteps = requestSteps && requestSteps.length > 0;

  const hasMultipleRequestSteps = requestSteps && requestSteps.length > 1;

  const justifyContent = requestSteps.length === 1 ? "center" : "space-between";

  return (
    <Stack direction="column" gap={tokens.spacing.s100}>
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
        padding={`${tokens.spacing.s0} ${tokens.spacing.s150}`}
      >
        {hasRequestSteps &&
          requestSteps.map((item, index) =>
            item.status === "error" ? (
              <Icon
                key={index}
                icon={<MdCancel />}
                size={sizeIcon}
                appearance={ComponentAppearance.DANGER}
              />
            ) : (
              <Icon
                key={index}
                icon={<MdCheckCircle />}
                size={sizeIcon}
                appearance={
                  item.status === "pending"
                    ? ComponentAppearance.GRAY
                    : appearance
                }
              />
            ),
          )}
      </Stack>

      <Stack
        justifyContent="center"
        padding={`${tokens.spacing.s100} ${tokens.spacing.s0}`}
      >
        {hasMultipleRequestSteps && (
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
        )}
      </Stack>
      <Stack justifyContent={justifyContent}>
        {hasRequestSteps &&
          requestSteps.map((item, index) => (
            <Stack key={index} width="58px">
              <Text
                type="label"
                textAlign="center"
                size="medium"
                weight="bold"
                appearance={
                  item.status === "completed"
                    ? ComponentAppearance.DARK
                    : ComponentAppearance.GRAY
                }
              >
                {item.name}
              </Text>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export { RequestProcessMobile };
