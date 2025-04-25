import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";
import { IRenderDetailBox } from "@ptypes/design/IRenderDetailBox";
import { DetailBox } from "../../detailBox";

const RenderDetailBox = (props: IRenderDetailBox) => {
  const { data, field, id, withTag, isMobile } = props;

  return (
    <DetailBox
      key={id}
      field={field}
      data={data}
      id={id}
      backgroundColor={inube.palette.neutral.N10}
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
