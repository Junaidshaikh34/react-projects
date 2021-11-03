import React from "react";
// import {Link} from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Tabs,
  Tab,
  Dropdown,
} from "react-bootstrap";
// import {TabText} from "../components/TabText"
// import SidebarItems from "../components/SidebarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabText = [
  // english : {
  //   phone: "6565",
  //   email: "cefe",
  // },
  // spanish : {
  //   phone: "1165",
  //   email: "rhd",
  // }
  {
  phoneEng: '456-789',
  emailEng: 'engeng@gmail.com'
  },
  {
  phoneSpa: '963-741',
  emailSpa: 'spaspa@gmail.com'
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="subheader bg-light shadow-sm p-3 text-primary font-weight-bold">
        <div className="d-flex justify-content-between align-items-center fw-500">
          <div>
            <Button variant="secondary" size="sm" className="mr-2 mb-2 mb-sm-0">
              Add Note
            </Button>
            <Button variant="secondary" size="sm" className="mr-2 mb-2 mb-sm-0">
              Add Call Log
            </Button>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Script
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  data-toggle="modal"
                  data-target="#englishScriptModal"
                >
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  data-toggle="modal"
                  data-target="#spanishScriptModal"
                >
                  Spanish
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="content pt-3 ">
        <Container fluid>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                    <div className="font-20">Open</div>
                    <div className="text-center d-flex flex-column border-left border-primary w-50 ">
                      <span className="font-12">Hours Remaining</span>
                      <span className="font-20 font-weight-bold">36</span>
                    </div>
                  </div>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label>Status</Form.Label>
                      <Form.Control as="select">
                        <option>Open</option>
                        <option>Default select</option>
                        <option>Default select</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Priority</Form.Label>
                      <Form.Control as="select">
                        <option>Low</option>
                        <option>Default select</option>
                        <option>Default select</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <p className="text-left font-14 fw-500 lh-20 mb-4">
                    Date Created: 9/12/2021
                    <br />
                    Member Name with Code: COMST
                    <br />
                    Ticket Number: 2176573766
                    <br />
                    Ticket Type: Normal
                    <br />
                    Damage Threat: High
                    <br />
                    Impact Category: High
                    <br />
                    Suggested Intervention: Email
                    <br />
                    Excavator Info:
                    <br />
                    Excavator Name: Centerline
                    <br />
                    Underground
                    <br />
                    County: HARRIS
                    <br />
                    City: CYPRESS
                    <br />
                    Address: 19210
                    <br />
                    Street: Caney Creek Mills Dr
                    <br />
                    Intersection: E Rio Grande River Dr
                    <br />
                  </p>
                  <div>
                    <button className="btn btn-secondary btn-block">
                      Update
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-2 bg-primary-light">
                <Card.Header className="p-3" id="headingOne">
                  <div className="mb-0 d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center">
                      <h5 className="m-0">CALLER DETAILS</h5>

                      <a href="#/" className="ml-2">
                        <FontAwesomeIcon icon="info-circle" size="sm" />
                      </a>
                    </div>

                    <a href="#/">
                      <FontAwesomeIcon icon="edit" size="sm" />
                    </a>
                  </div>
                </Card.Header>
                <Card.Body className=" text-left">
                  <div className="mt-1 mb-5">
                    <div className="rounded-bg">
                      <h5 className="font-weight-bold mb-4">Michael Smith</h5>

                      <div className="font-12 text-muted">Email</div>
                      <div className="mb-3 fw-500 text-truncate">
                        cornell.emile@ampeddata.com
                      </div>

                      <div className="font-12 text-muted">Contact Phone</div>
                      <div className="fw-500">6784695985</div>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-bg">
                      <div className="font-weight-bold">Timeline</div>
                      <ul className="timeline">
                        <li className="pl-4">
                          <span className="icon-timeline font-12">
                            <FontAwesomeIcon icon="calendar-times" />
                          </span>
                          <div>+91</div>
                          <div className="text-muted text-truncate">
                            22 Sep 2021, 08:32 AM
                          </div>
                          <p className="text-muted">Status: Pending</p>
                        </li>
                        <li className="pl-4">
                          <span className="icon-timeline font-12">
                            <i
                              className="fa fa-calendar"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <div>+91</div>
                          <div className="text-muted text-truncate">
                            22 Sep 2021, 08:32 AM
                          </div>
                          <p className="text-muted ">Status: Pending</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="modal fade"
        id="englishScriptModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="englishScriptModalLabel"
        aria-hidden="true"
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title id="englishScriptModalLabel">
              English Script
            </Modal.Title>
            <Button variant="light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="phone" id="tabsEnglish" className="mb-3">
              <Tab eventKey="phone" title="Phone" >
              <a href="#">
                <div className="tbtxt d-flex justify-content-between align-items-center">                
                  {TabText.map((value, index) => (
                    <p key={index}>{value.phoneEng}</p>                  
                  ))}                  
                  <FontAwesomeIcon icon="copy" />
                </div>
              </a>
              </Tab>
              <Tab eventKey="email" title="Email">
                <a href="#">
                  <div className="tbtxt d-flex justify-content-between align-items-center">
                    {TabText.map((value, index) => (
                        <p key={index}>{value.emailEng}</p>
                      ))}
                    <FontAwesomeIcon icon="copy" />
                  </div>
                </a>
              </Tab>
            </Tabs>
            
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end ">
              <Button variant="primary" className="mr-2">
                Copy
              </Button>
              <Button variant="outline-primary" data-dismiss="modal">
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <div
        className="modal fade"
        id="spanishScriptModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="spanishScriptModalLabel"
        aria-hidden="true"
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title id="spanishScriptModalLabel">
              Spanish Script
            </Modal.Title>
            <Button variant="light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="phone" id="tabsSpanish" className="mb-3">
              <Tab eventKey="phone" title="Phone">
                <a href="#">
                  <div className="tbtxt d-flex justify-content-between align-items-center">
                    {TabText.map((value, index) => (
                        <p key={index}>{value.phoneSpa}</p>
                      ))}
                    <FontAwesomeIcon icon="copy" />
                  </div>
                </a>
              </Tab>
              <Tab eventKey="email" title="Email">
                <a href="#">
                  <div className="tbtxt d-flex justify-content-between align-items-center">
                    {TabText.map((value, index) => (
                        <p key={index}>{value.emailSpa}</p>
                    ))}
                    <FontAwesomeIcon icon="copy" />
                  </div>
                </a>
              </Tab>              
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end ">
              <Button variant="primary" className="mr-2">
                Copy
              </Button>
              <Button variant="outline-primary" data-dismiss="modal">
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      {/* <div
        className="modal fade"
        id="spanishScriptModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="spanishScriptModalLabel"
        aria-hidden="true"
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <h5 className="modal-title" id="spanishScriptModalLabel">
              Spanish Script
            </h5>
            
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="profile" id="tabsSpanish" className="mb-3">
              <Tab eventKey="phone" title="Phone">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae nesciunt corrupti, natus aliquid obcaecati odit
                  dolor reprehenderit optio animi commodi, iste praesentium
                  harum enim iusto facilis quibusdam ad consectetur tenetur.
                </span>
              </Tab>
              <Tab eventKey="email" title="Email">
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate eaque molestias illo cumque beatae quasi ipsa earum
                  maiores mollitia eligendi, minus repellendus perferendis quo,
                  alias amet excepturi exercitationem at natus.
                </span>
              </Tab>
            </Tabs>
            <ul className="nav nav-tabs" id="tabsSpanish" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="phoneTabSpanish"
                  data-toggle="tab"
                  href="#phone"
                  role="tab"
                  aria-controls="phone"
                  aria-selected="true"
                >
                  Phone
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="emailTabSpanish"
                  data-toggle="tab"
                  href="#email"
                  role="tab"
                  aria-controls="email"
                  aria-selected="false"
                >
                  Email
                </a>
              </li>
            </ul>
            
            <div className="tab-content" id="tabContentSpanish">
              <div
                className="tab-pane fade show"
                id="phoneSpanish"
                role="tabpanel"
                aria-labelledby="phone-tab"
              >
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem saepe magnam distinctio maiores, incidunt est non
                  omnis provident expedita quisquam cum iste blanditiis soluta
                  ipsum quidem minima aut excepturi repellat.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="emailSpanish"
                role="tabpanel"
                aria-labelledby="email-tab"
              >
                <p className="my-2">
                  Molestias. Ea voluptates et vel, vitae, officiis voluptas,
                  dicta obcaecati incidunt quos numquam alias dolores. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Est
                  quaerat ipsum mollitia magnam. Eum, commodi.
                </p>
              </div>
            </div>
            <div className=" d-flex justify-content-end  pt-5">
              <button className="btn btn-primary mr-2">Copy</button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
           
          </Modal.Body>
        </Modal.Dialog>
      </div>
     */}
    </>
  );
}

export default ContactPage;
