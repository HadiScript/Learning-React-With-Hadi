import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  



  return (
    <Container fluid>
      <Row>
        <Col md={3} className="d-none d-md-block  bg-danger" style={{ width: "200px", height: "100vh", position: "fixed", top: 0, left: 0 }}>
          Sidebar
        </Col>
        <Col className="bg-warning" style={{ minHeight: "100vh", marginLeft: "200px" }}>
          Content
        </Col>
      </Row>
    </Container>
  );
};

export default App;
