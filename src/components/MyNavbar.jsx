import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";
import logo from "../assets/media/logo_netflix.png";
import kids from "../assets/media/kids_icon.png";
import avatar from "../assets/media/avatar.png";

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <BsSearch className="icons text-white  me-3" />
            <Nav.Link>
              <img
                src={kids}
                alt="kids icon"
                height="40"
                className="me-3 rounded-3"
              />
            </Nav.Link>

            <BsBell className="icons text-white  me-3" />

            <NavDropdown
              title={
                <img
                  src={avatar}
                  alt="avatar"
                  height={40}
                  className="rounded-3"
                ></img>
              }
            >
              <NavDropdown.Item href="#" className="">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
