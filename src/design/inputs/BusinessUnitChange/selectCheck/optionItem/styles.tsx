import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens";

const StyledOptionItemChecked = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  cursor: pointer;
  min-height: 40px;
  border-left-style: solid;
  border-left-width: ${tokens.spacing.s025};
  border-left-color: ${inube.palette.neutral.N10};
  padding: ${tokens.spacing.s050} ${tokens.spacing.s200} ${tokens.spacing.s050}
    ${tokens.spacing.s150};

  p {
    color: ${inube.palette.neutral.N900};
  }

  &:hover {
    border-left-color: ${inube.palette.blue.B400};

    background-color: ${inube.palette.neutral.N20};

    p {
      color: ${inube.palette.blue.B400};
    }
  }
`;

export { StyledOptionItemChecked };
