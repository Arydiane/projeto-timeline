import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-228px",
        width: "100%",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src="https://github.com/Arydiane.png"
          alt="Imagem de perfil de Arydiane"
        />

        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Portfólio
            </Button>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="">
              Portfólio
            </Button>
          </Box>
        </Box>
      </Box>

      <Text tag="h1" variant="heading4">
        Arydiane Jardim
      </Text>
      <Text variant="body3" styleSheet={{ color: theme.colors.neutral.x500 }}>
        @arydianejardim - Brasil
      </Text>
      <Text variant="body3" styleSheet={{ color: theme.colors.neutral.x500 }}>
        Desenvolvedora Front-End
      </Text>

      <Box
        styleSheet={{
          marginTop: "16px",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "14px",
        }}
      >
        <Link href="https://youtube.com">
          <Icon name="youtube" />
        </Link>
        <Link href="https://twitter.com">
          <Icon name="twitter" />
        </Link>
        <Link href="https://instagram.com">
          <Icon name="instagram" />
        </Link>
        <Link href="https://github.com/Arydiane">
          <Icon name="github" />
        </Link>
      </Box>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text tag="h3" variant="heading4">2023</Text>
    </Box>
  );
};
