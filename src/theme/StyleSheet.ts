import { Breakpoints } from '@displaykit/responsive_styles'

//Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>; 

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> |string; 
  backgroundColor?: ResponsiveProperty<string> | string;
}
