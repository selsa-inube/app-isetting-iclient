import styled from "styled-components";

interface IStyledFlex {
  $backgroundColor: string;
  $boxSizing: string;
  $justifyContent?: string;
  $alignItems?: string;
  $alignContent?: string;
  $direction?: string;
  $wrap?: string;
  $height?: string;
  $width?: string;
  $gap?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $borderRadius?: string;
  $borderColor?: string;
  $overflowY?: string;
  $overflowX?: string;
  $boxShadow?: string;
}

const StyledFlex = styled.div<IStyledFlex>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: ${({ $borderColor }) => `1px solid ${$borderColor}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  overflow-y: ${({ $overflowY }) => $overflowY};
  overflow-x: ${({ $overflowX }) => $overflowX};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
`;

export { StyledFlex };
