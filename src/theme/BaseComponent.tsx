import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from '@displaykit/responsive_styles';
import { type } from "os";

interface StyledBaseComponent {
  styleSheet?: StyleSheet; 
  ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`
interface BaseComponentsProps {
  styleSheet?: StyleSheet; 
  [key: string]: any; 
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentsProps>((props, ref) => {
  return (
    <StyledBaseComponent {...props} ref={ref} />
  )
})

BaseComponent.defaultProps = {
  styleSheet: {},
}
