import './NumberInput.scss';

import React from "react";

interface NumberInputProps {
  className: string;
  text: string;
}
const NumberInput: React.FC<NumberInputProps> = (props) => {
  return (
    <div className="number-input">
      <div className="title">{props.text}</div>
      <input className={props.className + "-input"} type="number" />
    </div>
  );
};

export default NumberInput;
