import { FormSchemaType } from "@/schemas";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const myLogo = 'https://raw.githubusercontent.com/renovatt/portfolio/main/public/icon-192x192.png';

export const KoalaWelcomeEmail = ({
  email, message, username, visitor
}: FormSchemaType) => (
  <Html>
    <Head />
    <Preview>
      Página de contato renovatt.dev
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={myLogo}
          width="50"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Olá, eu me chamo {username} e sou um {visitor}!</Text>
        <Text style={paragraph}>
          {message}
        </Text>
        <Text style={paragraph}>
          Meu email é {email}, por favor entre em contato comigo.
        </Text>
        <Text style={paragraph}>
          Att,
          <br />
          {username}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          E-mail enviado pela página de contato renovatt.dev.br - Desenvolvedor Front-End, João Pessoa - PB
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
  email: "",
  message: "",
  username: "",
  visitor: "cliente",
} as FormSchemaType;

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
