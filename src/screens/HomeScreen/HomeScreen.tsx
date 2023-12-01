import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Text from "@src/components/Text/Text";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {

  const theme = useTheme()

  return (
  <Box tag="main"
    styleSheet={{ 
      backgroundColor: theme.colors.neutral.x000, 
      flex: 1, 
      alignItems: 'center',
    }}
  >
    <Background />
    <Footer />
  </Box>
  );
}
