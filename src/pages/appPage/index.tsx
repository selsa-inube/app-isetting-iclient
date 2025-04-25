import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { Icon, Grid, Header, Nav, inube } from "@inubekit/inubekit";

import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { userMenu } from "@config/menuMainConfiguration";
import { actionsConfig } from "@config/mainActionLogout";
import { RenderLogo } from "@design/feedback/renderLogo";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";
import { useAppPage } from "@hooks/useAppPage";
import {
  StyledAppPage,
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledHeaderContainer,
} from "./styles";

const AppPage = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    setBusinessUnitSigla,
    businessUnitSigla,
  } = useContext(AuthAndPortalData);
  const { logout } = useAuth0();

  const {
    collapse,
    collapseMenuRef,
    businessUnitChangeRef,
    selectedClient,
    isTablet,
    isTabletMain,
    optionsHeader,
    optionsNav,
    setCollapse,
    handleLogoClick,
  } = useAppPage({ appData, businessUnitSigla, setBusinessUnitSigla });

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            navigation={optionsHeader}
            logoURL={<RenderLogo imgUrl={appData.businessUnit.urlLogo} />}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
        </StyledHeaderContainer>
        {businessUnitsToTheStaff.length > 1 && (
          <>
            <StyledCollapseIcon
              $collapse={collapse}
              onClick={() => setCollapse(!collapse)}
              $isTablet={isTablet}
              ref={collapseMenuRef}
            >
              <Icon
                icon={<MdOutlineChevronRight />}
                appearance="primary"
                size="24px"
                cursorHover
              />
            </StyledCollapseIcon>
            {collapse && (
              <StyledCollapse ref={businessUnitChangeRef}>
                <BusinessUnitChange
                  businessUnits={businessUnitsToTheStaff}
                  onLogoClick={handleLogoClick}
                  selectedClient={selectedClient}
                />
              </StyledCollapse>
            )}
          </>
        )}
        <StyledContainer>
          <Grid
            templateColumns={!isTablet ? "auto 1fr" : "1fr"}
            alignContent="unset"
            height={"95vh"}
          >
            {!isTablet && (
              <Nav navigation={optionsNav} actions={actionsConfig(logout)} />
            )}
            <BoxContainer
              boxSizing="border-box"
              height="calc(100vh - 54px)"
              overflowY="auto"
              backgroundColor={inube.palette.neutral.N0}
              padding={
                isTabletMain ? `${tokens.spacing.s300}` : `${tokens.spacing.s0}`
              }
            >
              <Outlet />
            </BoxContainer>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
};

export { AppPage };
