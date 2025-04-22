import { MdOutlineChevronRight, MdOutlineDoorFront } from "react-icons/md";
import { Icon, Header, Text } from "@inubekit/inubekit";

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
    username,
    screenMobile,
    screenTablet,
    screenTabletHeader,
    hasMultipleBusinessUnits,
    dataExists,
    setCollapse,
    handleLogoClick,
  } = props;

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
          {hasMultipleBusinessUnits && (
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
            {dataExists ? (
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
