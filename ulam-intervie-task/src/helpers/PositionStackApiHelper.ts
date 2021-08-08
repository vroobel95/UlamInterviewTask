import CoordinatesModel from "../models/CoordinatesModel";
import axios from "axios";

interface DataInterface {
    results: CoordinatesModel;
}
class PositionStackApiHelper {
  static getCoordinates = (address: string) => {
    // let coordinates = {} as CoordinatesModel;
    let arr = [] as DataInterface[];

    axios.get<DataInterface>(
      "http://api.positionstack.com/v1/forward",
      {
        params: {
          access_key: "42906e4315e1d6c51cdf5d6f25cd76a0",
          query: address,
        },
      }
    ).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });

    return arr;

    //return coordinates;
  };
}

export default PositionStackApiHelper;
