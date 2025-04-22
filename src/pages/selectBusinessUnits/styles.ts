import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

interface IStyledImage {
  width?: string;
}

const StyledWelcomeContainer = styled.div`
  background-color: ${inube.palette.neutral.N30};
`;

const StyledImage = styled.img<IStyledImage>`
  width: ${({ width }) => width};
  max-width: 1200px;
`;

export { StyledWelcomeContainer, StyledImage };
