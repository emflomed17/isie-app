import React from "react";
import { Nav } from "react-bootstrap";
import QuestionPreview from "../QuestionPreview/QuestionPreview";

const QuestionList = () => {
  return (
    <Nav className="questions-container flex-column d-none d-md-flex mt-2">
      <p className="sub-item">Last Questions</p>
      <QuestionPreview
        id="1"
        title="First Question"
        isActive
        onClick={() => null}
      />
      <QuestionPreview
        id="1"
        title="First Question"
        isActive
        onClick={() => null}
      />

      <Nav.Link href="#">Link 2</Nav.Link>
      <Nav.Link href="#">Link 3</Nav.Link>
    </Nav>
  );
};

export default QuestionList;
