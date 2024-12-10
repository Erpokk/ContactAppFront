import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import GoogleAuthButton from "../../components/GoogleOAuthBtn/GoogleAuthButton";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import Section from "../../components/Section/Section";

export default function RegisterPage() {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <Section>
        <Container>
          <RegisterForm />
          <GoogleAuthButton>Register with Google</GoogleAuthButton>
        </Container>
      </Section>
    </>
  );
}
