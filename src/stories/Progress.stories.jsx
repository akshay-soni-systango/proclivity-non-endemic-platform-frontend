import React from "react";
import { ProgressBar } from "react-bootstrap";

export default {
  title: "Component/Elements/ProgressBar",
  component: ProgressBar,
};

export const ProgressBarElement = () => (
  <>
   <ProgressBar min="0" now="30" max="100" />
  </>
);
