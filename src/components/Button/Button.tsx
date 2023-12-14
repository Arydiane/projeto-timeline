import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import {ColorVariant, Variant, colorVariantBy} from './colorVariantBy'
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
  href?: string;
}

export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant, 
  variant, 
  size, 
  ...props
}: ButtonProps) {
  const theme = useTheme(); 
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        //Color Variant
        ...colorVariantBy(theme, colorVariant, variant),
        //Size
        ...buttonSize[size], 
        //FullWidth
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained', 
  colorVariant: 'positive',
};

Button.Base = ButtonBase;
