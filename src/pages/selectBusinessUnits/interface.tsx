import { Outlet } from "react-router-dom";
import { Stack, Text, Grid, inube } from "@inubekit/inubekit";
import { ISelectBusinessUnitsUI } from "@ptypes/selectBusinessUnits/ISelectBusinessUnitsUI";
import { tokens } from "@design/tokens";
import { welcome } from "@config/businessUnit/welcome";
import { BoxContainer } from "@design/layout/boxContainer";
import { StyledImage } from "./styles";

const SelectBusinessUnitsUI = (props: ISelectBusinessUnitsUI) => {
  const { appData, screenTablet, imageWidth } = props;

  return (
    <Grid
      templateColumns={screenTablet ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenTablet ? "minmax(150px, 30vh) 1fr" : "100vh"}
    >
      <BoxContainer
        backgroundColor={inube.palette.neutral.N30}
        boxSizing="initial"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={
            screenTablet ? `${tokens.spacing.s200}` : `${tokens.spacing.s400}`
          }
        >
          <Stack direction="column" alignItems="center">
            <Text
              as="h1"
              type="headline"
              size={screenTablet ? "medium" : "large"}
              textAlign="center"
            >
              {welcome.description}
            </Text>
          </Stack>
          <StyledImage
            src={appData.businessManager.urlLogo}
            alt="Sistemas Enlinea"
            width={imageWidth()}
          />
        </Stack>
      </BoxContainer>
      <BoxContainer
        backgroundColor={inube.palette.neutral.N0}
        boxSizing="initial"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          padding={
            screenTablet
              ? `${tokens.spacing.s600} ${tokens.spacing.s100} ${tokens.spacing.s0}`
              : `${tokens.spacing.s0}`
          }
        >
          <Outlet />
        </Stack>
      </BoxContainer>
    </Grid>
  );
};

export { SelectBusinessUnitsUI };
