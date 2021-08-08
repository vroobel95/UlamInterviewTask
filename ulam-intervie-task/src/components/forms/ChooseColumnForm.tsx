import "./ChooseColumnForm.scss";

import React, { useState } from "react";
import NumberInput from "../shared/NumberInput";
import Button from "../shared/Button";
import ChooseColumnFormModel from "../../models/ChooseColumnFormModel";

interface ChooseColumnFormProps {
  onSubmit: (model: ChooseColumnFormModel) => void;
}

const ChooseColumnForm: React.FC<ChooseColumnFormProps> = (props) => {
  const [city, setCity] = useState<number>(0);
  const [state, setState] = useState<number>(0);
  const [zipCode, setZipCode] = useState<number>(0);
  const [address, setAddress] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);

  const handleSubmit = () => {
    const formModel = {
      city: city,
      state: state,
      zipCode: zipCode,
      address: address,
      category: category,
    };

    props.onSubmit(formModel);
  };

  // TODO: make generic form or whatever to not write it that way
  const handleCityColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(+e.currentTarget.value);
  };

  const handleStateColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(+e.currentTarget.value);
  };

  const handleZipCodeColumnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setZipCode(+e.currentTarget.value);
  };

  const handleAddressColumnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddress(+e.currentTarget.value);
  };

  const handleCategoryColumnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategory(+e.currentTarget.value);
  };

  return (
    <form className="choose-column-form">
      <div className="inputs">
        <NumberInput
          className="city"
          text="City column"
          value={city}
          onValueChange={handleCityColumnChange}
          minValue={1}
        />
        <NumberInput
          className="state"
          text="State column"
          value={state}
          onValueChange={handleStateColumnChange}
          minValue={1}
        />
        <NumberInput
          className="zip-code"
          text="Zip-code column"
          value={zipCode}
          onValueChange={handleZipCodeColumnChange}
          minValue={1}
        />
        <NumberInput
          className="address"
          text="Address column"
          value={address}
          onValueChange={handleAddressColumnChange}
          minValue={1}
        />
        <NumberInput
          className="category"
          text="Category column"
          value={category}
          onValueChange={handleCategoryColumnChange}
          minValue={1}
        />
      </div>
      <Button className="submit" text="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default ChooseColumnForm;
