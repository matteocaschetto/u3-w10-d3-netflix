import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <Row>
              <Col className="mb-2">
                <FaFacebookF className="footer-icon me-2 text-white" />
                <FaInstagram className="footer-icon me-2 text-white" />
                <FaTwitter className="footer-icon me-2 text-white" />
                <FaYoutube className="footer-icon text-white" />
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <div className="footer-links text-white">
                  <p>
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#">Media Center</a>
                  </p>
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact Us</a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Audio Description</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="footer-button rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 text-center copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
