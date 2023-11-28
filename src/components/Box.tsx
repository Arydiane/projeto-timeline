import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  children: React.ReactNode; 
  styleSheet: StyleSheet; 
  tag: any;
}

export default function Box({ children, styleSheet , tag, ...props} : BoxProps) {
  const Tag = tag || 'div'; 

  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
