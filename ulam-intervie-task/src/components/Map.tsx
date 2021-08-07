import './Map.scss';

import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPinModel from "../models/LocationPinModel";
import LocationPin from "./LocationPin";

interface MapProps {
  locations: LocationPinModel[];
}

const Map: React.FC<MapProps> = (props) => {
  return (
    <div className="map">
      <GoogleMapReact
      defaultCenter={{lat: 51.108594, lng: 16.978344}}
      defaultZoom={1}
      bootstrapURLKeys={{ key: 'AIzaSyBZLDVwtsw8LPXxHVhSXRlFhmDe0SdmeRM' }}
      >
        {props.locations.map((location, index) => (
          <LocationPin lat={location.latitude} lng={location.longitude} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
