import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokens } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
}

interface IStyledTitle {
  $isTablet: boolean;
}
interface IStyledFooter {
  $isMobile: boolean;
}

const StyledHeaderContainer = styled.div`
  position: relative;
  & div > div {
    cursor: pointer;
  }
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledTitle = styled.div<IStyledTitle>`
  padding: ${({ $isTablet }) =>
    $isTablet
      ? `var(--spacing-S200, ${tokens.spacing.s200})`
      : `${tokens.spacing.s600} ${tokens.spacing.s1600} ${tokens.spacing.s1000}`};
  display: flex;
  flex-direction: column;
  align-items: ${({ $isTablet }) => $isTablet && "flex-start"};
  gap: ${({ $isTablet }) =>
    $isTablet
      ? `var(--spacing-S300, ${tokens.spacing.s300})`
      : `${tokens.spacing.s0}`};
  align-self: ${({ $isTablet }) => $isTablet && "stretch"};
`;

const StyledFooter = styled.footer<IStyledFooter>`
  display: flex;
  margin-top: auto;
  padding: ${tokens.spacing.s0} ${tokens.spacing.s1600} ${tokens.spacing.s0};
  justify-content: center;
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

const StyledCollapse = styled.div`
  position: absolute;
  margin-top: 10px;
`;

export {
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledFooter,
  StyledCollapseIcon,
  StyledCollapse,
};
