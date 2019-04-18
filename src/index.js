import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/common.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/skin/default.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  icon,
  Image,
  Button
} from "react-bootstrap";

function App() {
  return (
    <Navbar className="navbar navbar-default navbar-mobile navbar-fixed white no-background bootsnav">
      <div className="container">
        <div className="navbar-header">
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </Navbar.Toggle>
          <Navbar.Brand href="index.html">
            <Image
              src="assets/img/logo-light.png"
              className="logo logo-display"
              alt=""
            />
            <Image
              src="assets/img/logo.png"
              className="logo logo-scrolled"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <Navbar.Brand href="#home">SolutionTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="nav navbar-nav navbar-left">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav
            className="nav navbar-nav navbar-right justify-content-end"
            as="ul"
          >
            <Nav.Item className="br-right" as="li">
              <Button
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#signin"
              >
                <i className="login-icon ti-user" />
                Login
              </Button>
            </Nav.Item>
            <Nav.Item className="sign-up" as="li">
              <Button className="btn-signup red-btn" href="signup.html">
                <span className="ti-briefcase" />
                Create Account
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
