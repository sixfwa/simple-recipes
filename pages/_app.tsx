import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid>
      <Component {...pageProps} />
    </Container>
  );
}
