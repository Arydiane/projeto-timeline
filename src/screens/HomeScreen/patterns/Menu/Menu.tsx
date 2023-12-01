import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = "40px";
  return (
    <Box
      styleSheet={{
        width: "100%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: "16px",
        paddingHorizontal: "20px",
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          borderRadius: "100%",
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.primary.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Text>AR</Text>
      </Button.Base>
      <Button.Base
        styleSheet={{
          borderRadius: "100%",
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.neutral.x500,
          alignItems: "center",
          justifyContent: "center",
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  );
}
