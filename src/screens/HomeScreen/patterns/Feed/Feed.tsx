import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import github from "@src/components/Icon/svgs/github";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTemplateConfig } from "@src/services/template/useTemplateConfig";
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
  const templateConfig = useTemplateConfig();

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
          src={templateConfig?.personal?.avatar}
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
        {templateConfig?.personal?.name}
      </Text>
      <Text variant="body3" styleSheet={{ color: theme.colors.neutral.x500 }}>
        {templateConfig?.personal?.nickname} - {templateConfig?.personal?.country}
      </Text>
      <Text variant="body3" styleSheet={{ color: theme.colors.neutral.x500 }}>
        {templateConfig?.personal?.profession}
      </Text>

      <Box
        styleSheet={{
          marginTop: "16px",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "14px",
        }}
      >
        {Object.keys(templateConfig.personal.socialNetworks).map((key) => {
          const socialNetwork = templateConfig.personal.socialNetworks[key];

          if (socialNetwork) {
            return (
              <Link key={key} href={socialNetwork}>
                <Icon name={key as any} />
              </Link>
            );
          }

          return null;
        })}
      </Box>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text tag="h3" variant="heading4">
        2023
      </Text>
    </Box>
  );
};
