import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/.netlify/functions/welcome")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <Row>
      <Col>
        <h1>Welcome</h1>
        <p>{message}</p>
      </Col>
    </Row>
  );
};

export default HomePage;
