import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

export interface ContainerProps extends LayoutProps, SpaceProps {
  children?: React.ReactNode;
}

const Container = styled.div<ContainerProps>(layout, space);

Container.defaultProps = {
  padding: 2,
  margin: "auto",
  width: ["mobile", "tablet", "desktop"],
};

export default Container;
