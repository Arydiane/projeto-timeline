import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";

export default function NewsletterScreen() {
  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        styleSheet={{
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          padding: "16px",
        }}
      >
        <Image
          src="https://github.com/Arydiane.png"
          alt="Avatar de Arydiane"
          styleSheet={{
            borderRadius: "100%",
            width: "100px",
            marginBottom: "16px",
          }}
        />
        <Text variant="heading2">Newsletter da Arydiane Jardim!</Text>
        <NewsletterTextField 
          placeholder = "Informe seu email"
        />
        <Button
          fullWidth
          styleSheet={{
            marginTop: "16px",
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
}


interface NewsletterTextFieldProps {
  placeholder?: string; 
}

function NewsletterTextField( props : NewsletterTextFieldProps) {
  return (
    <Box
      styleSheet={{
        width: "100%", 
        maxWidth: "300px",
        marginTop: "8px",
      }}
    >
      <BaseComponent 
        as="input"
        {...props}
        styleSheet={{
          border: "1px solid rgb(195,195,195)",
          boderRadius: "4px", 
          padding: "8px", 
          width: "100%"
        }}
      /> 

    </Box>
  )
}