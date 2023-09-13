import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "../../lib/react-bootstrap";
import { BsSendFill } from "react-icons/bs";

const UserInput = () => {
  return (
    <Form>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div className="input-group input-chat">
          <FormControl
            type="text"
            placeholder="Send a message"
            className="form-input form-control"
            autoComplete="none"
          />
          <span className="input-group-text">
            <div className="d-flex justify-content-end">
              <Button
                className="submit-btn"
                variant="outline-secondary"
                size="lg"
                type="submit"
              >
                <BsSendFill size="16px" />
              </Button>
            </div>
          </span>
        </div>
        <p className="copyright-text">
          ChatGPT may produce inaccurate information about people, places, or
          facts. ChatGPT August 3 Version
        </p>
      </FormGroup>
    </Form>
  );
};

export default UserInput;
