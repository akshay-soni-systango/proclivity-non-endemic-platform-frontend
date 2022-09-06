import React from "react";
import { Tabs } from "react-bootstrap";
import "./style.scss";

const Tab = ({tabs}) => {
  return (
    <Tabs>
      {tabs.map(({key, title, content}) => <Tab key={key || title} eventKey={key || title} title={title} >{content}</Tab>)}
    </Tabs>
  );
};

export default Tab;

Tab.defaultProps = {
  tabs: [], // {key: string, title: string, content: html to render}
};
