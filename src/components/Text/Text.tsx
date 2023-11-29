import { StyleSheet } from "@src/theme/StyleSheet";
import theme from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";

interface TextProps {
  variant?: 'display1'
  tag?: 'p' | 'li' | 'h1' | 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'string'; 
  children?: React.ReactNode; 
  styleSheet?: StyleSheet; 
}

export default function Text({ styleSheet, variant, ...props}: TextProps) {
  
  const textVariant =  theme.typography.variants[variant];
  
  return (
    <BaseComponent 
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily, 
        ...textVariant,
        ...styleSheet,
      }} 
      {...props} 
    />
  )
}

Text.defaultProps = {
  tag: 'p', 
  variant: 'body2'
}
