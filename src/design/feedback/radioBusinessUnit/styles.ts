import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledImage {
  $isTablet: boolean;
}

const StyledRadioBusinessUnit = styled.label`
  & div {
    box-sizing: border-box;
    max-height: 58px;
    box-shadow: 1px 2px 2px 1px ${inube.palette.neutral.N30};
    border: 1px solid ${inube.palette.neutral.N30};
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
