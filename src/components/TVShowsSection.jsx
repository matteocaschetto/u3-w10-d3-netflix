import React from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { BsGrid, BsGrid3X3 } from "react-icons/bs"; // Utilizzo delle icone di react-icons

function TVShowsSection() {
  return (
    <div className="d-flex justify-content-between">
      {}
      <div className="d-flex">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <div className="ms-4">
          {}
          <Dropdown as={ButtonGroup}>
            <Button variant="secondary" size="sm" className=" bg-dark">
              Generes
            </Button>
            <Dropdown.Toggle
              split
              className="bg-dark"
              variant="secondary"
              id="dropdown-custom-components"
            />
            <Dropdown.Menu className="bg-dark border">
              <Dropdown.Item href="#" className="text-white">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Drama
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {}
      <div>
        <BsGrid className="icons text-white" style={{ fontSize: "1.5rem" }} />
        <BsGrid3X3
          className="icons text-white ms-3"
          style={{ fontSize: "1.5rem" }}
        />
      </div>
    </div>
  );
}

export default TVShowsSection;
