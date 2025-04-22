import { Stack, Text, Spinner } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { checkingCredentialsLabels } from "@config/businessUnit/checkingCredentialsLabels";

const CheckingCredentialsUI = () => {
  return (
    <Stack gap={tokens.spacing.s200} direction="column">
      <Stack direction="column">
        <Text type="title" size="large" textAlign="center">
          {checkingCredentialsLabels.validation}
        </Text>
        <Text type="title" size="small" textAlign="center">
          {checkingCredentialsLabels.description}
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
};

export { CheckingCredentialsUI };
