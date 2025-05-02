import { Grid, inube } from "@inubekit/inubekit";

import { IRenderExtraordinaryVerification } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IRenderExtraordinaryVerification";
import { BoxAttribute } from "@design/feedback/boxAttributes";
import { tokens } from "@design/tokens";
import { columnsAttribute } from "@utils/columnsAttribute";
import { rowsAttribute } from "@utils/rowsAttribute";
import { IEntry } from "@ptypes/design/table/IEntry";
import { BoxContainer } from "@design/layout/boxContainer";
import { hasValues } from "@utils/hasValues";
import { useThemeData } from "@utils/theme";

const RenderExtraordinaryVerification = (
  props: IRenderExtraordinaryVerification,
) => {
  const { values, isMobile } = props;
  const theme = useThemeData();

  return (
    <BoxContainer
      direction="column"
      borderRadius={tokens.spacing.s100}
      width="100%"
      backgroundColor={
        theme ? theme?.palette?.neutral?.N0 : inube.palette.neutral.N0
      }
      boxSizing="initial"
    >
      {hasValues(values) && (
        <Grid
          key={values[0].id}
          width="100%"
          height="auto"
          templateColumns={columnsAttribute(values as IEntry[], isMobile)}
          templateRows={rowsAttribute(values as IEntry[], isMobile)}
          gap={tokens.spacing.s200}
        >
          {values.map((item) => (
            <BoxAttribute
              key={item.id}
              direction="column"
              label={item.nameCycle}
              value={item.typePayment}
            />
          ))}
        </Grid>
      )}
    </BoxContainer>
  );
};

export { RenderExtraordinaryVerification };
