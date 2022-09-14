import React from "react";
import Select, { components } from 'react-select';
import './style.scss';

const Dropdown = ({ preValue, ...props }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const customStyles = {
    control: () => ({
      border: 'none',
      display: 'flex',
      padding: '4px 8px',
    }),
    indicatorSeparator: () => ({
      border: 'none',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? '#F2F4F7'
        : isSelected
          ? '#F2F4F7'
          : undefined,
      zIndex: 1,
      color: '#344054',
    }),
  }
  const ValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
    const nbValues = getValue().length;
    if (!hasValue) {
      return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      );
    }
    return (
      <components.ValueContainer {...props}>
        <div className="static-value">{preValue} {children}</div>
      </components.ValueContainer>
    );
  };
  const componentList = { ValueContainer };
  return (
    <div className={`select-wrapper ${props.className}`}>
      <Select
        options={options}
        styles={customStyles}
        components={componentList}
      />
    </div>
  );
};
Dropdown.defaultProps = {
  variant: "primary",
};
export default Dropdown;
