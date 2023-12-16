import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { useScreen } from "./useScreens";
import { useState } from "react";
import { LogIn, Menu } from "react-feather";

const color = "#0f256e";
const size = 23;

const App = () => {
  const { width } = useScreen();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="d-none d-md-block"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "200px",
              backgroundColor: "white",
              flex: "0 0 auto",
              height: "100vh",
              overflowY: "auto",
              borderRight: "0.01rem solid lightgrey",
            }}
          >
            <div className="nav-links">
              <span to="/" className="nav-link">
                Home
              </span>
              <span to="/about" className="nav-link">
                About
              </span>
              <span to="/services" className="nav-link">
                Services
              </span>
            </div>
          </Col>

          <Col
            style={{
              minHeight: "100vh",
              margin: "10px",
              marginLeft: width > 769 ? "220px" : "10px",
            }}
          >
            {/* Header */}
            <Row>
              <Col className="p-3 mb-2 rounded " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-block d-md-none menu">
                      <Menu color={color} size={size} onClick={handleShow} />
                    </div>
                  </div>
                  <div className="align">
                    <LogIn color={color} size={size} />
                  </div>
                </div>
              </Col>
            </Row>

            {/* Content Row */}
            <Row className="rounded " style={{ border: "0.01rem solid lightgrey", padding: "5px" }}>
              <Col>
                <Row>
                  <Col sm={6} md={2} className="bg-dark rounded text-light mx-1">
                    <div className="text-center p-3">
                      <h4>3000+</h4>
                      <p>Project Done</p>
                    </div>
                  </Col>
                  <Col sm={6} md={3} className="bg-dark rounded text-light mx-1">
                    <div className="text-center p-3">
                      <h4>3000+</h4>
                      <p>Project Done</p>
                    </div>
                  </Col>
                  <Col sm={6} md={3} className="bg-dark rounded text-light mx-1">
                    <div className="text-center p-3">
                      <h4>3000+</h4>
                      <p>Project Done</p>
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="bg-dark rounded text-light mx-1">
                    <div className="text-center p-3">
                      <h4>3000+</h4>
                      <p>Project Done</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default App;
