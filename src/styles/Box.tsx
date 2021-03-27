import styled from "styled-components";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  width,
  WidthProps,
} from "styled-system";

interface BoxProps extends SpaceProps, ColorProps, WidthProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>(space, color, width);

export default Box;
