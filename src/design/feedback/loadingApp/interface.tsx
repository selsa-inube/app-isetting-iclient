import { Stack, Text, Spinner } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { loadingAppLabels } from "@config/businessUnit/loadingAppLabels";

const LoadingAppUI = () => {
  return (
    <Stack gap={tokens.spacing.s200} direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          {loadingAppLabels.loading}
        </Text>
        <Text type="title" size="small" textAlign="center">
          {loadingAppLabels.description}
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
};

export { LoadingAppUI };
