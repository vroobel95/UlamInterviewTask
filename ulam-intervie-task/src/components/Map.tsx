import "./Map.scss";

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPinModel from "../models/LocationPinModel";
import LocationPin from "./LocationPin";
import axios from "axios";
import CoordinatesModel from "../models/CoordinatesModel";

interface MapProps {
  locations: LocationPinModel[];
  onLocationsLoaded: () => void;
}

const Map: React.FC<MapProps> = (props) => {
  const [locations, setLocations] = useState<LocationPinModel[]>();

  useEffect(() => {
    const getLocations = async () => {
      if (props.locations.length > 0) {
        let tempLocations = [] as LocationPinModel[];

        for (const location of props.locations) {
          const params = {
            access_key: "42906e4315e1d6c51cdf5d6f25cd76a0",
            query: location.address + ", " + location.city,
          };

          await axios
            .get(`http://api.positionstack.com/v1/forward?access_key=${params.access_key}&query=${params.query}`)
            .then(({ data }) => {
                const coordinates = (data.data as CoordinatesModel[]);
                tempLocations.push({
                    ...location,
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude
                });
              })
            .catch((error) => {
              console.log(error);
            });
        }

        setLocations(tempLocations);
      }
    };
    getLocations();
    props.onLocationsLoaded();
  }, [props.locations]);

  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={{ lat: 51.1197607, lng: 17.0098888 }}
        defaultZoom={15}
        bootstrapURLKeys={{ key: "AIzaSyBZLDVwtsw8LPXxHVhSXRlFhmDe0SdmeRM" }}
      >
        {locations
          ? locations.map((location, index) => (
              <LocationPin
                key={index}
                lat={location.latitude!}
                lng={location.longitude!}
              />
            ))
          : null}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
