import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AlignLeft, BarChart, LogIn, Settings } from "react-feather";
import { myStyle } from "../StyleConfig";
import { Offcanvas } from "react-bootstrap";
import Sidebar from "./Sidebar";

const color = "#172c73";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const _resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", _resize);

    return () => {
      window.removeEventListener("resize", _resize);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {/* sidebar */}
          <Col
            md={3}
            className="d-none d-md-block "
            style={{
              height: "100vh",
              width: "200px",
              position: "fixed",
              top: 0,
              left: 0,
              borderRight: "0.01rem solid lightgrey",
              overflowY: "auto",
              flex: "0 0 auto",
              backgroundColor: "white",
            }}
          >
            <Sidebar title={true} />
          </Col>

          {/* left side */}
          <Col className="" style={{ minHeight: "100vh", marginLeft: width > 769 ? "200px" : "0px" }}>
            {/* header */}
            <Row className="m-2">
              <Col class className="p-3 mb-2 rounded" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-block d-md-none" onClick={handleShow} role="button">
                      <AlignLeft size={20} color={color} />
                    </div>
                  </div>
                  <div className={`${myStyle.FlexCenter} gap-3`}>
                    <div className={`${myStyle.FlexCenter} gap-1`} role="button">
                      {" "}
                      Login <LogIn size={20} color={color} />{" "}
                    </div>
                    <div className={`${myStyle.FlexCenter} gap-1`} role="button">
                      {" "}
                      Settigns <Settings size={20} color={color} />{" "}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* content */}
            <Row className="m-2">
              <Col className="rounded p-1">{children} </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "200px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className={myStyle.FlexStart} style={{ fontWeight: "bold", fontSize: "28px", color: color }}>
              Hadi Raza
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar title={false} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Layout;
