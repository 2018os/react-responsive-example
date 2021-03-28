import styled from "styled-components";
import { space, SpaceProps, border, BorderProps } from "styled-system";

interface BoxProps extends SpaceProps, BorderProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>(space, border);

Box.defaultProps = {
  p: 2,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
};

export default Box;
