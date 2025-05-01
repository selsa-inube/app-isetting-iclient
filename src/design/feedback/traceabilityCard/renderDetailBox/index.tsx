import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { IRenderDetailBox } from "@ptypes/design/IRenderDetailBox";
import { DetailBox } from "../../detailBox";
import { useThemeData } from "@src/utils/theme";

const RenderDetailBox = (props: IRenderDetailBox) => {
  const { data, field, id, withTag, isMobile } = props;
  const theme = useThemeData();

  return (
    <DetailBox
      key={id}
      field={field}
      data={data}
      id={id}
      backgroundColor={
        theme ? theme?.palette?.neutral?.N10 : inube.palette.neutral.N10
      }
      borderRadius={tokens.spacing.s100}
      padding={
        isMobile
          ? `${tokens.spacing.s075}`
          : `${tokens.spacing.s075} ${tokens.spacing.s150}`
      }
      width="100%"
      {...(withTag && { withTag })}
    />
  );
};

export { RenderDetailBox };
