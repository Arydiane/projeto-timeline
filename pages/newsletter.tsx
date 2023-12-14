import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: "",
    },
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Enviando dados do formulário");
          //Validar
          if (!form.values.emailNewsletter.includes("@")) {
            alert("Informe um e-mail válido!");
            return;
          }
          alert("Cadastro efetuado com sucesso! Verique seu e-mail.");
          //Envia para o servidor o email cadastrado
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
          <Text variant="heading2" styleSheet={{ textAlign: "center" }}>
            Newsletter da Arydiane Jardim!
          </Text>

          <NewsletterTextField
            name="emailNewsletter"
            placeholder="Informe seu email"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Box>
            <Text variant="body4">
              Seu e-mail é: {form.values.emailNewsletter}
            </Text>
          </Box>
          <Button
            fullWidth
            styleSheet={{
              marginTop: "16px",
              alignItems: "center",
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

interface NewsletterTextFieldProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
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
          width: "100%",
        }}
      />
    </Box>
  );
}
