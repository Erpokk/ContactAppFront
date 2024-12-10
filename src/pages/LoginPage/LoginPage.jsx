import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import GoogleAuthButton from "../../components/GoogleOAuthBtn/GoogleAuthButton";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import Section from "../../components/Section/Section";

export default function LoginPage() {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <Section>
        <Container>
          <LoginForm />
          <GoogleAuthButton>Login with Google</GoogleAuthButton>
        </Container>
      </Section>
    </>
  );
}
