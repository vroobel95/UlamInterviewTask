import "./NumberInput.scss";

import React, { ChangeEvent } from "react";
import classNames from "classnames";
import MaterialInput from '@material-ui/core/Input';
import MaterialLabel from '@material-ui/core/InputLabel';

interface NumberInputProps {
  className: string;
  text: string;
  value: number;
  minValue?: number;
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const inputClassName = classNames("input", props.className);
  return (
    <div className="number-input">
      <MaterialLabel className="title">{props.text}</MaterialLabel>
      <MaterialInput
        className={inputClassName}
        type="number"
        value={props.value}
        onChange={props.onValueChange}
        defaultValue={props.minValue}
      />
    </div>
  );
};

export default NumberInput;
