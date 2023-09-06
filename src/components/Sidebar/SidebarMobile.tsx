import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const SidebarMobile: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        variant="outline-light"
        onClick={toggleShow}
        className="custom-button me-2 d-md-none"
      >
        <i className="fa fa-bars mt-1 "></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="bg-dark">
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          Some text as a placeholder. In real life, you can have the elements
          you have chosen, like text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMobile;
