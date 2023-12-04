import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import Feed from "./patterns/Feed/Feed";
import Text from "@src/components/Text/Text";
import templatePageHOC from "@src/services/template/templatePageHOC";

function HomeScreen(props) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
          <Text tag="h2" variant="heading3">Últimas atualizações</Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
})