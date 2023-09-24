"use client";
import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

interface DecisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DecisionModal = ({ isOpen, onClose, onConfirm }: DecisionModalProps) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <ModalHeader closeButton>
        <Modal.Title>Delete Chat</Modal.Title>
      </ModalHeader>
      <ModalBody>Are you sure you want to delete this chat?</ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DecisionModal;
