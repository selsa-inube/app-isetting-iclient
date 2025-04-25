import { Stack, Tag, Text } from "@inubekit/inubekit";
import { BoxContainer } from "@design/layout/boxContainer";

import { ComponentAppearance } from "@enum/appearances";
import { IDetailBox } from "@ptypes/design/IDetailBox";

const DetailBox = (props: IDetailBox) => {
  const {
    id,
    field,
    data,
    width,
    backgroundColor,
    borderRadius,
    borderColor,
    padding,
    withTag,
    ellipsis = false,
  } = props;

  return (
    <BoxContainer
      key={id}
      direction="column"
      width={width}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderColor={borderColor}
      boxSizing="border-box"
      padding={padding}
    >
      <Text size="medium" type="label" weight="bold">
        {field.titleName}
      </Text>

      {withTag ? (
        <Stack width="auto">
          <Tag
            appearance={ComponentAppearance.GRAY}
            label={data[field.id]}
            weight="strong"
          />
        </Stack>
      ) : (
        <Text
          size="small"
          appearance={ComponentAppearance.GRAY}
          ellipsis={ellipsis}
        >
          {data[field.id]}
        </Text>
      )}
    </BoxContainer>
  );
};

export { DetailBox };
