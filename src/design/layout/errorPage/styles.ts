import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

interface IStyledContainer {
  $isTablet: boolean;
}
interface IStyledCompanyLogo {
  $isTablet: boolean;
}
interface IStyledTextErrorContainer {
  $isTablet: boolean;
}

interface IStyledDividerContainer {
  $isTablet: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90vh;
  padding: ${({ $isTablet }) =>
    $isTablet
      ? `${tokens.spacing.s250} ${tokens.spacing.s250} ${tokens.spacing.s0}`
      : `${tokens.spacing.s400} ${tokens.spacing.s1000} ${tokens.spacing.s0}`};
`;

const StyledCompanyLogo = styled.img<IStyledCompanyLogo>`
  width: ${({ $isTablet }) => ($isTablet ? "40px" : "54px")};
  margin: ${({ $isTablet }) => $isTablet && "0 auto"};
`;

const StyledErrorImage = styled.img<IStyledCompanyLogo>`
  width: ${({ $isTablet }) => ($isTablet ? "182px" : "256px")};
  height: ${({ $isTablet }) => ($isTablet ? "170px" : "240px")};
  align-self: center;
  max-width: 100%;
`;

const StyledTextErrorContainer = styled.div<IStyledTextErrorContainer>`
  display: flex;
  flex-direction: ${({ $isTablet }) => ($isTablet ? "column" : "row")};
  justify-content: space-around;
  height: auto;
  gap: ${tokens.spacing.s300};
  padding: ${tokens.spacing.s250};
  border-radius: ${tokens.spacing.s100};
  border: ${({ theme }) =>
    `2px solid  ${theme ? theme?.palette?.neutral.N40 : inube.palette.neutral.N40}`};
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  color: ${({ theme }) =>
    theme?.palette?.neutral.N90 ?? inube.palette.neutral.N90};
`;

const StyledDividerContainer = styled.div<IStyledDividerContainer>`
  width: ${({ $isTablet }) => ($isTablet ? "100%" : "0%")};
  height: ${({ $isTablet }) => ($isTablet ? "0%" : "100%")};
  border: ${({ theme }) =>
    `1px dashed ${theme ? theme?.palette?.neutral.N40 : inube.palette.neutral.N40}`};
  margin: 0 auto;
`;

export {
  StyledContainer,
  StyledCompanyLogo,
  StyledErrorImage,
  StyledTextErrorContainer,
  StyledList,
  StyledItem,
  StyledDividerContainer,
};
