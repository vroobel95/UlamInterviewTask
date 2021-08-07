import React from "react";
import Map from "../components/Map";

// MAPS_API_KEY = 'AIzaSyBZLDVwtsw8LPXxHVhSXRlFhmDe0SdmeRM';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div>{"Check the map"}</div>
      <Map
        locations={[
          { latitude: 51.108594, longitude: 16.978344, color: "#ef0823" },
        ]}
      />
    </div>
  );
};

export default MainPage;
