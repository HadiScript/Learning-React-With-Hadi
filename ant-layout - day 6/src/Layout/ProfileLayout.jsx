import { Row, Col, Button, Grid, Drawer } from "antd";
import React, { useState } from "react";
import A from "../screens/A";
import B from "../screens/B";
import MySidebar from "./MySidebar";
import { styles } from "./Styles";
import CenteralCol from "./CenteralCol";

const ProfileLayout = () => {
  const [currentPage, setCurrentPage] = useState("A");
  const [visible, setVisible] = useState(false);
  const points = Grid.useBreakpoint();

  return (
    <>
      <Row style={{ minHeight: "100vh" }}>
        {points.md && (
          <Col style={styles.leftCol} md={4}>
            <MySidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Col>
        )}
        <Col style={{ backgroundColor: "red" }} md={16} xs={24}>
          <CenteralCol currentPage={currentPage} />
          {!points.md && (
            <div style={{ marginTop: "10px" }}>
              <button>Open Right</button>
              <button>Open Left</button>
            </div>
          )}
        </Col>
        {points.md && (
          <Col style={styles.rightCol} md={4}>
            Right Sidebar
          </Col>
        )}
      </Row>
    </>
  );
};

export default ProfileLayout;
