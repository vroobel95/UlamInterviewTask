import './MainPage.scss';

import React from "react";
import Dropzone from "../components/Dropzone";
import Map from "../components/Map";

// MAPS_API_KEY = 'AIzaSyBZLDVwtsw8LPXxHVhSXRlFhmDe0SdmeRM';

const MainPage: React.FC = () => {
  const handleDropFile = (files: File[]) => {
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
    </div>
  );
};

export default MainPage;
