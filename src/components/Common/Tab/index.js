import React from "react";
import { Tabs } from "react-bootstrap";
import "./style.scss";

const Tab = ({tabs, tabProps, className, ...props}) => {
  return (
    <div className={`tab-wrapper--${props.variant}`} >
      <Tabs {...props} >
        {tabs.map(({key, title, content, ...rest}) => <Tab
        variant={props.variant}
          key={key || title}
          eventKey={key || title}
          title={title}
          {...tabProps}
          {...rest}
        >{content}</Tab>)}
      </Tabs>
    </div>
  );
};

export default Tab;

Tab.defaultProps = {
  variant: "tabs",
  tabs: [], // {key: string, title: string, content: html to render}
};
