import React from "react";
import { Badge } from "react-bootstrap";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const BadgeElement = () => (
  <>
    <Badge bg="secondary" className="me-2">10 Active</Badge>
    <Badge bg="success">Active</Badge>
  </>
);
