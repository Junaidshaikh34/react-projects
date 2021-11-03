import React from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
// import LogoSmall from "../img/logo-small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ onToggle }) {
  return (
    <header className="header bg-white shadow-sm px-3 d-flex align-items-center ">
      <div className="flex-fill">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            {/* <a href="/#">
                  <img
                    src={LogoSmall}
                    className="img-fluid d-block d-md-none text-center pt-2"
                    alt=""
                    width="40px"
                    height="auto"
                  />
                </a> */}
            <Button onClick={onToggle} variant="light">
              <FontAwesomeIcon icon="bars" />
            </Button>
          </div>

          <div className="profile text-primary">
            <Dropdown as={ButtonGroup}>
              <Button variant="link">Junaid Shaikh</Button>

              <Dropdown.Toggle
                split
                variant="link"
                id="dropdown-split-basic"
              >
                <FontAwesomeIcon icon="user-circle" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
