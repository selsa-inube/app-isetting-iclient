import { Stack, Text, Spinner } from "@inubekit/inubekit";
import { spacing } from "@design/tokens/spacing/spacing";
import { loadingAppLabels } from "@config/businessUnit/loadingAppLabels";

const LoadingUI = () => {
  return (
    <Stack gap={spacing.s200} direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          {loadingAppLabels.loading}
        </Text>
        <Text type="title" size="small" textAlign="center">
          {loadingAppLabels.description}
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" transparent={false} />
      </Stack>
    </Stack>
  );
};

export { LoadingUI };
