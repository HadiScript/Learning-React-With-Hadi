import { Col, Row } from "antd";
import React from "react";
import LeftCol from "./LeftCol";
import LayoutHeader from "./LayoutHeader";

import "../../assets/layout.css";
import "../../assets/darkBlue.css";

import FloatBtn from "./floatButton";

const Layout = ({ children }) => {
  return (
    <>
      <Row style={{ minHeight: "100vh" }} className="main-db_layout">
        <Col md={4} xs={0} className="fixedColumn leftColumn border-end ">
          <LeftCol />
        </Col>
        <Col md={16} xs={24} className="centerColumn ">
          <LayoutHeader />
          <div className="p-3"> {children}</div>
        </Col>
        <Col md={4} xs={0} className=" border-start fixedColumn rightColumn">
          <div></div>
        </Col>
        <FloatBtn />
      </Row>
    </>
  );
};

export default Layout;
