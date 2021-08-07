import "./MainPage.scss";

import React, { useState } from "react";
import Dropzone from "../components/shared/Dropzone";
import Map from "../components/Map";
import PopUp from "../components/shared/PopUp";
import ChooseColumnForm from "../components/forms/ChooseColumnForm";

// MAPS_API_KEY = 'AIzaSyBZLDVwtsw8LPXxHVhSXRlFhmDe0SdmeRM';

const MainPage: React.FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const handleDropFile = (files: File[]) => {
    setIsOpenPopup(true);
    console.log("something");
  };
  
  return (
    <div className="main-page">
      <div>{"Check the map"}</div>
      <Dropzone onDrop={handleDropFile} />
      <Map
        locations={[
          { latitude: 51.108594, longitude: 16.978344, color: "#ef0823" },
        ]}
      />
        <PopUp isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)}>
          <ChooseColumnForm />
        </PopUp>
    </div>
  );
};

export default MainPage;
