import './ChooseColumnForm.scss';

import React from "react";
import NumberInput from "../shared/NumberInput";
import Button from '../shared/Button';

const ChooseColumnForm: React.FC = () => {
  return (
    <div className="choose-column-form">
      <NumberInput className="city" text="City column" />
      <NumberInput className="state" text="State column" />
      <NumberInput className="zip-code" text="Zip-code column" />
      <NumberInput className="address" text="Address column" />
      <NumberInput className="category" text="Category column" />
      <Button className="submit" text="Submit"/>
    </div>
  );
};

export default ChooseColumnForm;
