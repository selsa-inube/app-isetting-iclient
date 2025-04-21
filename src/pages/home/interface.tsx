import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Icon, useMediaQueries, Header, Text } from "@inubekit/inubekit";

import { AppCard } from "@design/feedback/appCard";
import { Title } from "@design/data/title";
import { BusinessUnitChange } from "@design/inputs/BusinessUnitChange";
import { mainNavigation } from "@config/mainNavigation";
import { userMenu } from "@config/menuMainConfiguration";
import { IHomeUI } from "@ptypes/home/IHomeUI";
import { ComponentAppearance } from "@enum/appearances";
import { RenderLogo } from "@design/feedback/renderLogo";
import { homeLabels } from "@config/home/homeLabels";
import {
  StyledCollapse,
  StyledCollapseIcon,
  StyledContainer,
  StyledContainerCards,
  StyledContainerSection,
  StyledFooter,
  StyledHeaderContainer,
  StyledLogo,
  StyledTitle,
} from "./styles";

const HomeUI = (props: IHomeUI) => {
  const {
    data,
    appData,
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    loading,
    setCollapse,
    handleLogoClick,
  } = props;
  const username = appData.user.userName.split(" ")[0];

  const {
    "(max-width: 532px)": screenMobile,
    "(max-width: 805px)": screenTablet,
    "(max-width: 944px)": screenTabletHeader,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 532px)",
    "(max-width: 805px)",
    "(max-width: 944px)",
  ]);

  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <Header
            navigation={mainNavigation(data)}
            logoURL={<RenderLogo imgUrl={appData.businessUnit.urlLogo} />}
            user={{
              username: appData.user.userName,
              breakpoint: "848px",
            }}
            menu={userMenu}
          />
          {businessUnitsToTheStaff.length > 1 && (
            <>
              <StyledCollapseIcon
                $collapse={collapse}
                onClick={() => setCollapse(!collapse)}
                $isTablet={screenTabletHeader}
                ref={collapseMenuRef}
              >
                <Icon
                  icon={<MdOutlineChevronRight />}
                  appearance={ComponentAppearance.PRIMARY}
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
        </StyledHeaderContainer>
        <StyledContainerSection $isMobile={screenMobile}>
          <StyledTitle $isTablet={screenTablet}>
            <Title
              title={`${homeLabels.welcome} ${username}`}
              description={homeLabels.description}
              icon={<MdOutlineDoorFront />}
              sizeTitle="large"
            />
          </StyledTitle>
          <StyledContainerCards $isTablet={screenTablet}>
            {data && data?.length > 0 ? (
              data?.map((card) => (
                <AppCard
                  key={card.id}
                  label={card.publicCode}
                  description={card.description}
                  icon={card.icon}
                  url={card.url}
                  isLoading={loading}
                />
              ))
            ) : (
              <Text size="medium">{homeLabels.noData}</Text>
            )}
          </StyledContainerCards>
        </StyledContainerSection>
        <StyledFooter $isMobile={screenMobile}>
          <StyledLogo src={appData.businessManager.urlBrand} />
        </StyledFooter>
      </StyledContainer>
    </>
  );
};

export { HomeUI };
