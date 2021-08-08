import "./Map.scss";

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPinModel from "../models/LocationPinModel";
import LocationPin from "./LocationPin";
import axios from "axios";

interface MapProps {
  locations: LocationPinModel[];
}

const Map: React.FC<MapProps> = (props) => {
  const [locations, setLocations] = useState<LocationPinModel[]>();

  useEffect(() => {
    const getLocations = () => {
      if (props.locations.length > 0) {
        //   let locations = [] as LocationPinModel[];

        for (const location of props.locations) {
          // const response = PositionStackApiHelper.getCoordinates(
          //   location.address + ", " + location.city
          // );
          const params = {
            access_key: "42906e4315e1d6c51cdf5d6f25cd76a0",
            query: location.address + ", " + location.city,
          };

          axios
            .get(`http://api.positionstack.com/v1/forward?access_key=${params.access_key}&query=${params.query}`)
            .then(({ data }) => {

                if (typeof data.fullName === 'string') {
                  console.log('fine')
                } else {
                  console.log('[AXIOS GET] Wrong data type: ' + typeof data.fullName);
                }
              })
            .catch((error) => {
              console.log(error);
            });
        }

        //   props.locations.forEach(async x => {
        //     const response = await PositionStackApiHelper.getCoordinates(x.address + ", " + x.city);
        //     console.log(response);
        //     // locations.push({...x, longitude: coordinates.longitude, latitude: coordinates.latitude});
        //   })

        setLocations(props.locations);
      }
    };
    getLocations();
  }, [props.locations]);

  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={{ lat: 50.042461, lng: 19.225114 }}
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
