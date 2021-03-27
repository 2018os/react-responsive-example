import styled from "styled-components";
import { color, ColorProps } from "styled-system";

const Box = styled.div<ColorProps>`
  ${color}
`;

export default Box;
