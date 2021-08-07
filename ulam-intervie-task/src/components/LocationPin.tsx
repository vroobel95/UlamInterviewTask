import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-noto/dumpling";

interface LocationPinProps {
  lat: number;
  lng: number;
  //text: string;
}

const LocationPin: React.FC<LocationPinProps> = (props) => {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      {/* <p className="pin-text">{props.text}</p> */}
    </div>
  );
};

export default LocationPin;
