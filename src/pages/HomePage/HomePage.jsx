import Container from "../../components/Container/Container.jsx";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <Container page={'home'}>
        <h1 className={css.title}>
          Contact manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Container>
    </>
  );
}
