import { Grid, useMediaQueries, Radio, Text } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IRadioBusinessUnit } from "@ptypes/selectBusinessUnits/IRadioBusinessUnit";
import { StyledRadioBusinessUnit, StyledImage } from "./styles";

const RadioBusinessUnit = (props: IRadioBusinessUnit) => {
  const { name, id, value, label, logo, selectedBusinessUnit, handleChange } =
    props;

  const mediaQueries = ["(max-width: 532px)", "(max-width: 460px)"];
  const matches = useMediaQueries(mediaQueries);
  return (
    <StyledRadioBusinessUnit>
      <Grid
        templateColumns={
          matches["(max-width: 532px)"] ? "auto 1fr" : "auto 1fr 130px"
        }
        padding={
          matches["(max-width: 532px)"]
            ? `${tokens.spacing.s100} ${tokens.spacing.s200}`
            : `${tokens.spacing.s200} ${tokens.spacing.s300}`
        }
        height={matches["(max-width: 532px)"] ? "auto" : "72px"}
        alignItems="center"
        alignContent="center"
        gap={tokens.spacing.s200}
        width="100%"
      >
        <Radio
          id={id}
          name={name}
          label=""
          value={value}
          checked={selectedBusinessUnit.publicCode === id}
          onChange={handleChange}
        />
        <Text size="medium">{label}</Text>
        <StyledImage
          $isTablet={matches["(max-width: 532px)"]}
          src={logo}
          alt="Logo de empresa"
        />
      </Grid>
    </StyledRadioBusinessUnit>
  );
};

export { RadioBusinessUnit };
export type { IRadioBusinessUnit };
