import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledImage {
  $isTablet: boolean;
}

const StyledRadioBusinessUnit = styled.label`
  & div {
    box-sizing: border-box;
    max-height: 58px;
    box-shadow: ${({ theme }) =>
      `1px 2px 2px 1px ${theme?.palette?.neutral.N30 ?? inube.palette.neutral.N30}`};
    border: ${({ theme }) =>
      `1px solid ${theme?.palette?.neutral.N30 ?? inube.palette.neutral.N30}`};
    cursor: pointer;
  }
`;

const StyledImage = styled.img<IStyledImage>`
  width: 100px;
  height: auto;
  transition: filter 500ms ease-out;
  filter: grayscale(100%);

  ${({ $isTablet }) =>
    $isTablet &&
    `
   display: none;
  `}
`;

export { StyledRadioBusinessUnit, StyledImage };
