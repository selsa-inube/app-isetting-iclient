import { Stack, Text } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { IIconWithText } from "@ptypes/design/IIconWithText";

const IconWithText = (props: IIconWithText) => {
  const { icon, text } = props;
  return (
    <Stack gap={tokens.spacing.s075}>
      {icon}
      <Text size="small">{text}</Text>
    </Stack>
  );
};

export { IconWithText };
