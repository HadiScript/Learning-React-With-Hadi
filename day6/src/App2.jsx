import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const App2 = () => {
  return (
    <Container fluid>
      <Row
        style={{
          position: "fixed",
          top: "10px",
          left: "20px",
          right: "20px",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
        }}
      >
        <Col>
          <div style={{ padding: "10px", color: "black" }}>Header</div>
        </Col>
      </Row>

      <Row style={{ marginTop: "60px" }}>
        <Col>
          <div style={{ padding: "10px", height: "100vh" }}>Content goes here...</div>
        </Col>
      </Row>
    </Container>
  );
};

export default App2;
