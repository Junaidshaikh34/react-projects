import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import BarGraph from "../components/BarGraph"
function DetailsPage(props) {
  return (
    <>
      <div className="subheader bg-white shadow-sm p-3 font-weight-bold">
        <div className="d-flex flex-column flex-sm-row">
          <div className="pr-0 pr-sm-5 mb-2 mb-sm-0">
            <span className="font-14 pr-2">Status:</span>
            <Badge bg="primary" pill className="mr-2 text-white">
              Open
            </Badge>
            <Badge bg="danger" pill className="text-white">
              Closed
            </Badge>
          </div>
          <div>
            <span className="font-14 pr-2">Priority:</span>
            <Badge pill bg="warning" className="mr-2 text-white">
              High
            </Badge>
            <Badge pill bg="success" className="text-white">
              Normal
            </Badge>
          </div>
        </div>
      </div>
      <Container fluid className="dashboard  mt-3">
        <Row >
          <Col sm={6} md={3}>
            <Card className="status-card mb-3">
              <a href="#/">
                <Card.Body>
                  <div className="font-14 mb-2">Works</div>
                  <div className="font-weight-bold m-0 font-24">10</div>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card className="status-card mb-3">
              <a href="#/">
                <Card.Body>
                  <div className="font-14 mb-2">Open</div>
                  <div className="font-weight-bold m-0 font-24">10</div>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card className="status-card mb-3">
              <a href="#/">
                <Card.Body>
                  <div className="font-14 mb-2">On hold</div>
                  <div className="font-weight-bold m-0 font-24">10</div>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card className="status-card mb-3">
              <a href="#/">
                <Card.Body>
                  <div className="font-14 mb-2">Unassigned</div>
                  <div className="font-weight-bold m-0 font-24">10</div>
                </Card.Body>
              </a>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4 gy-3">
          <Col>
            <Card className="detailcard-wrapper">
              <Card.Header>Details</Card.Header>
              <Card.Body className="detailcard-body">
                <Row className="gy-2">
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                  <Col >
                    <Card className="status-card">
                      <a href="#/">
                        <Card.Body>
                          <div className="font-14 mb-2">Unassigned</div>
                          <div className="font-weight-bold m-0 font-24">10</div>
                        </Card.Body>
                      </a>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col>
          <Card>
            <Card.Body>
          <BarGraph/>
          <BarGraph/>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default DetailsPage;
