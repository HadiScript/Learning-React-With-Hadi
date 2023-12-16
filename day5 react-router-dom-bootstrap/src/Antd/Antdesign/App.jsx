import { Col, Row } from "antd";
import React from "react";
import Logo from "./UI/Logo";
import "./assets/layout.css";
import CentralHeader from "./UI/CentralHeader";

const App = () => {
  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col className="border-end fixedCol leftCol" md={4} xs={0}>
        <Logo />
      </Col>
      <Col className="centeralCol" md={16} xs={24}>
        <CentralHeader />
      </Col>
      <Col className="border-start fixedCol rightCol" md={4} xs={0}>
        right
      </Col>
    </Row>
  );
};

export default App;
