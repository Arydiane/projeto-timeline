import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?:  'p' | 'li' | 'h1' | 'h2'| 'h3'| 'h4'| 'h5'| 'h6' | string; 
  children?: React.ReactNode; 
  styleSheet?: StyleSheet; 
  ref: any; 
}

const Text = React.forwardRef( ({ tag, styleSheet, variant, ...props}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant =  theme.typography.variants[variant];
  
  return (
    <BaseComponent 
      as={tag}
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily, 
        ...textVariant,
        ...styleSheet,
      }} 
      ref={ref}            
      {...props} 
    />
  )
})

export default Text; 

Text.defaultProps = {
  tag: 'p', 
  variant: 'body2',
}
